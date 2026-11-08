// Google Apps Script endpoint for the Greg Garnett portfolio contact form.
// Paste this into a Google Apps Script project and set SPREADSHEET_ID below.

const SPREADSHEET_ID = "PASTE_YOUR_GOOGLE_SHEET_ID_HERE";
const SHEET_NAME = "Contact submissions";
const HEADERS = [
  "Submitted at",
  "Name",
  "Email",
  "Business or organization",
  "Website URL",
  "Service needed",
  "Estimated budget",
  "Desired timeline",
  "Project details"
];

function doPost(e) {
  try {
    const data = (e && e.parameter) || {};
    const name = clean_(data.name, 150);
    const email = clean_(data.email, 254);
    const details = clean_(data.details, 10000);

    if (!name || !email || !details || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return json_({ ok: false, error: "Please provide a valid name, email, and project description." });
    }

    const spreadsheet = SpreadsheetApp.openById(SPREADSHEET_ID);
    const sheet = spreadsheet.getSheetByName(SHEET_NAME) || spreadsheet.insertSheet(SHEET_NAME);
    const lock = LockService.getScriptLock();
    lock.waitLock(10000);
    try {
      if (sheet.getLastRow() === 0) {
        sheet.appendRow(HEADERS);
        sheet.setFrozenRows(1);
      }
      sheet.appendRow([
        new Date(),
        safeCell_(name),
        safeCell_(email),
        safeCell_(clean_(data.business, 200)),
        safeCell_(clean_(data.website, 500)),
        safeCell_(clean_(data.service, 200)),
        safeCell_(clean_(data.budget, 100)),
        safeCell_(clean_(data.timeline, 300)),
        safeCell_(details)
      ]);
    } finally {
      lock.releaseLock();
    }

    return json_({ ok: true });
  } catch (error) {
    console.error(error);
    return json_({ ok: false, error: "The submission could not be saved." });
  }
}

function clean_(value, maxLength) {
  return String(value || "").trim().slice(0, maxLength);
}

// Prevent submitted values from being interpreted as spreadsheet formulas.
function safeCell_(value) {
  return /^[=+@-]/.test(value) ? "'" + value : value;
}

function json_(value) {
  return ContentService
    .createTextOutput(JSON.stringify(value))
    .setMimeType(ContentService.MimeType.JSON);
}
