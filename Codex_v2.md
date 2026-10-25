# Greg Garnett — Freelance Website V2
## Codex Build Specification: Modern UX, Motion, and Lead Generation

**Purpose:** Use this document as the implementation brief for Version 2 of Greg Garnett's freelance website. Treat the uploaded screenshot of Version 1 as the visual reference and starting point. Improve it into a more modern, user-friendly, polished, responsive experience with purposeful animation and a stronger path to qualified client inquiries.

---

## 1. Instructions Before Coding

1. Inspect the current repository and existing website before changing anything.
2. Review the supplied Version 1 screenshot. Preserve the strongest elements: navy/white/sky-blue palette, bold editorial typography, clean spacing, service cards, concept-work cards, process timeline, trust section, and clear CTA.
3. Identify the existing framework, package manager, assets, routes, and conventions. **Do not replace a working stack without a clear reason.**
4. Summarize the planned changes in 5–8 bullets, then implement them.
5. Build the real website in the repository—not only a mockup, screenshot, or design description.
6. Keep content truthful. Do not invent clients, testimonials, metrics, awards, certifications, contact details, or working integrations.
7. If this project already contains the first version's copy or components, reuse and improve them rather than starting from scratch unnecessarily.

## 2. Project Goal

Create a personal freelance website that helps Greg Garnett earn trust, communicate his services clearly, showcase his work, and convert suitable visitors into project inquiries.

### Profile
- **Name:** Greg Garnett
- **Role:** Freelance Web Developer & UI/UX Designer
- **Background:** Former U.S. Air Force service member
- **Current skills and learning:** HTML, CSS, web development, Figma, UI/UX, and AI-assisted tools
- **Target clients:** Small businesses, solo entrepreneurs, consultants, and service-based businesses
- **Primary conversion:** A visitor submits a project inquiry
- **Secondary conversion:** A visitor views a project or service, then contacts Greg

### Positioning
**Headline:** Designing beautiful digital experiences that drive results.

**Supporting copy:** I help small businesses create modern websites and intuitive digital experiences that communicate their value, build trust, and make it easier for customers to take action.

Use a confident, friendly, plain-English voice. Focus on the value delivered rather than buzzwords. Do not claim guaranteed leads, revenue, rankings, or conversion improvements.

---

## 3. Design Direction

### Overall feel
Build a contemporary, premium-feeling independent designer/developer portfolio. It should be visually memorable without being flashy, cluttered, or difficult to use.

Design keywords:
- Clean and editorial
- Confident typography
- Generous whitespace
- Crisp, precise layouts
- Soft surfaces and restrained shadows
- Intentional color accents
- Responsive, touch-friendly interactions
- Subtle, purposeful motion

Avoid a generic SaaS landing-page look, overuse of gradients, excessive glassmorphism, large walls of text, and animation that delays access to content.

### Color tokens
Use CSS variables or the project's existing token system.

```css
:root {
  --color-navy: #10243A;
  --color-navy-deep: #0B1D2E;
  --color-sky: #58B8E8;
  --color-sky-soft: #EAF7FC;
  --color-green: #2F855A;
  --color-white: #FFFFFF;
  --color-surface: #F4F7FA;
  --color-surface-blue: #EEF7FA;
  --color-text: #15283D;
  --color-muted: #5B6876;
  --color-border: #DCE5EC;
}
```

Use green primarily for the main action button and small positive accents. Ensure sufficient contrast for every text and interactive element. Do not use color alone to communicate status.

### Typography
- Use a modern, highly readable sans-serif.
- Use a strong, compact headline with a responsive scale such as `clamp()`.
- Body text should remain comfortably readable on mobile and desktop.
- Maintain consistent heading levels, paragraph widths, and line spacing.
- Avoid tiny text for important content; small eyebrow labels are acceptable but must remain legible.

### Shape, spacing, and surfaces
- Use a consistent spacing scale.
- Cards may have subtle borders and medium rounded corners.
- Use shadows sparingly and consistently.
- Keep section widths aligned to a common content container.
- Avoid excessive rounded “pill” shapes on every component.
- Buttons should have clear labels, comfortable touch targets, hover states, and visible keyboard focus.

---

## 4. Site Structure and Navigation

Preserve or implement these routes, adapting to the existing architecture:
- `/` — Home
- `/services` — Services
- `/work` — Portfolio
- `/work/[slug]` or equivalent — Project detail/case study
- `/about` — About Greg
- `/contact` — Contact / project inquiry
- `/privacy` — Privacy policy only if needed for configured tools and data collection

### Header
- Wordmark: `Greg Garnett`
- Descriptor: `Web Development • UI/UX`
- Navigation: Home, Services, Work, About, Contact
- Primary CTA: `Start a project`
- Optional language switcher: do not display a non-functional language selector. If multilingual support is not implemented, omit it.

Header behavior:
- Use a clean static or sticky header based on what works best in the current layout.
- If sticky, apply a subtle background/border or shadow only after scrolling if practical.
- Ensure it never covers section headings when navigating to anchors.
- Mobile navigation must be keyboard accessible, have an accurate expanded state, close on selection, and support Escape.
- Clearly mark the active page/route.

### Footer
- Short brand statement
- Main page links
- Real contact information only after supplied
- Social links only when real URLs are configured
- Current year generated automatically
- Privacy link if applicable

Put editable contact and social details in a single configuration file. Do not invent an email address, profile URL, or booking URL.

---

## 5. Homepage: Refined Section Plan

Keep the familiar content architecture from Version 1, but improve hierarchy, responsiveness, interaction design, and storytelling. The page should have enough breathing room without feeling unnecessarily long.

### Section A — Hero

Use a two-column layout on desktop and a stacked layout on small screens.

**Eyebrow:** WEB DEVELOPMENT • UI/UX DESIGN

**Headline:** Designing beautiful digital experiences that drive results.

**Description:** I help small businesses create modern websites and intuitive digital experiences that communicate their value, build trust, and make it easier for customers to take action.

**Primary CTA:** Start a project  
**Secondary CTA:** View my work

Optional small trust line: `Independent freelance partner for small businesses`

Visual:
- Build a polished website/device composition, using existing assets if available.
- The visual may show desktop and mobile website previews, layout cards, or a design-to-development concept.
- If a mockup is illustrative, make sure it is not presented as a real client deliverable.
- Use subtle decorative circles, grid lines, or a small accent shape only where they help composition.
- Avoid a huge stock photo or an oversized generic AI image.

Motion:
- On initial load, animate the eyebrow, heading, description, buttons, and visual in a restrained stagger.
- Use opacity and small vertical translation; avoid dramatic zooms or bounce.
- Keep the page content visible and usable if animation is disabled or JavaScript fails.
- Do not delay CTA access until an animation finishes.

### Section B — About / Trust Strip

Use a deep navy background with a compact, high-contrast layout.

**Eyebrow:** A LITTLE ABOUT ME

**Heading:** Good work starts with listening.

**Copy:** I'm Greg—a freelance web developer and UI/UX designer with a background in the U.S. Air Force. I bring discipline, thoughtful communication, and a learning mindset to every project.

**Link:** More about Greg →

A simple `GG` monogram or typographic brand mark may be used as a decorative element. It should not compete with the content or be mistaken for a client logo. Ensure text contrast is accessible.

Animation: a subtle reveal on entry, only if motion preferences allow.

### Section C — Services

**Eyebrow:** WHAT I CAN HELP WITH

**Heading:** Useful digital work, built around your goals.

Include three service cards:

1. **Website Design & Development**  
   Modern, responsive websites that make your value clear and guide customers toward the next step.

2. **UI/UX Design**  
   Thoughtful wireframes, Figma prototypes, and interface designs that make digital experiences easier to understand and use.

3. **Website Review & Improvement**  
   A practical review of a site's messaging, navigation, mobile experience, and inquiry path.

Each card includes:
- Simple icon or lightweight CSS/SVG illustration
- Service name
- Short outcome-focused description
- Text link such as `Explore service →`
- Clear hover and keyboard-focus states

Interactions:
- On hover, lightly raise the card or emphasize its border.
- On touch devices, do not hide information behind hover.
- Keep card heights and CTA alignment consistent where practical.

### Section D — Selected Work

Use a lightly tinted surface background to distinguish the portfolio.

**Eyebrow:** SELECTED WORK

**Heading:** Ideas brought to the screen.

**Supporting copy:** A few self-initiated concepts exploring useful, welcoming digital experiences.

Create a responsive grid of three project cards. Suggested concept entries from Version 1:
- **Northline Studio** — concept website for an independent interior design studio
- **Goodday Market** — concept landing page for a neighborhood food market
- **Fieldnotes** — UI/UX concept for a lightweight digital journal

These are examples only. Keep them explicitly labeled **Concept project** or **Self-initiated concept** unless real project facts confirm otherwise.

Each card should include:
- A visual preview or screenshot
- Project category/type
- Title and concise summary
- Link to a case study or detail page
- Alt text that describes meaningful imagery

Do not invent client names, paid engagement claims, performance results, or testimonials. Make projects editable through a data file.

Interactions:
- Subtle image zoom or card lift on hover, with no layout shift.
- Keyboard users must get equivalent visible feedback.
- Clicking the card or its clearly named link opens the case study.

### Section E — Process Timeline

**Eyebrow:** A CLEAR, COLLABORATIVE PROCESS

**Heading:** From first conversation to a confident launch.

Show four steps in a horizontal timeline on desktop and a vertical sequence on small screens:

1. **Discover** — Understand the business, audience, goals, and constraints.
2. **Plan** — Agree on scope, page structure, priorities, and deliverables.
3. **Design & build** — Create the visual direction and build the responsive experience.
4. **Review & launch** — Test, refine, hand over, and discuss next steps.

Include a small note: `Every project is different. Scope and timing are agreed together before work begins.`

Animation: a restrained line or step reveal may animate into view. Do not make the timeline dependent on animation to communicate sequence.

### Section F — Working Together / Differentiators

Use a pale blue or neutral section with two columns.

**Eyebrow:** WORKING TOGETHER

**Heading:** Thoughtful work. Clear communication.

**Copy:** You work directly with the person designing and building your experience.

Show concise points:
- Design decisions grounded in user needs
- Practical development with usability in mind
- Transparent scope and expectations
- Careful attention to detail at every step

Do not claim guaranteed business results. Keep this section credible and specific.

### Section G — Final CTA

Use a navy CTA panel with clear contrast and a decorative visual accent.

**Eyebrow:** YOUR NEXT CHAPTER STARTS HERE

**Heading:** Have a project in mind?

**Copy:** Tell me what you're building, what isn't working, or where you want your website to go. We can talk through a useful next step.

**Button:** Start a project

The CTA must navigate to the real contact page or open a working contact method. Never use a dead link.

### Section H — Footer

Use a deep navy footer. Keep it compact and legible:
- Name and short positioning statement
- Explore links
- Contact details when configured
- Social links when configured
- Current year and copyright

---

## 6. Services, Work, About, and Contact Pages

### Services
Create a page with:
- Clear introductory heading and short value proposition
- Detailed sections for the three service categories
- Typical deliverables and ideal client fit
- Simple process and FAQ
- CTA to request a project estimate

Do not invent fixed prices. Use `Request a project estimate` until pricing is decided. Make clear that final scope and cost depend on requirements.

### Work / case studies
Build a maintainable project data structure. Each project supports:
- `slug`
- `title`
- `category`
- `projectType` (`client`, `personal`, `concept`, or `coursework`)
- `summary`
- `challenge`
- `approach`
- `deliverables`
- `tools`
- `image`
- `alt`
- `outcomeOrLearning`
- `featured`

Each case study should explain the goal, constraints, approach, design/development choices, deliverables, tools, and outcome or lessons learned. If there are no measured results, state that honestly.

### About
Use a warm, professional personal story. Mention Air Force service as background, then focus on how Greg approaches projects and continues learning web development, CSS, HTML, Figma, UI/UX, and AI-assisted workflows.

Do not represent learning in progress as a certification or mastery. Avoid arbitrary skill percentages.

### Contact
**Heading:** Let's talk about your project.

**Body:** Share a little about your business, what you need, and what success would look like. A bit of context helps me understand the right next step.

Recommended fields:
- Name (required)
- Email (required, validated)
- Business / organization (optional)
- Current website (optional)
- Service needed (select)
- Desired timeline (optional)
- Estimated budget (optional)
- Project details (required)

Requirements:
- Explicit labels, not placeholder-only labels
- Accessible field errors and status messages
- Loading, success, and failure states
- Prevent accidental duplicate submissions
- Spam mitigation where supported
- Do not claim a message was sent unless a real provider or backend confirms success
- Never expose private API keys in browser code

If no form provider is configured, build the UI and validation and document the integration steps. Do not fake successful delivery. Do not invent Greg's email or scheduling URL.

---

## 7. Motion and Interaction System

Use motion to improve orientation and provide feedback, not to decorate every element.

### Required motion patterns
1. **Hero entrance:** short staggered fade/translate, with no blocking overlay.
2. **Scroll reveals:** section headings and cards can fade/translate slightly when entering view.
3. **Card interaction:** subtle lift, border-color change, or image scale on hover/focus.
4. **Buttons:** smooth color/shadow transition and a small arrow movement if suitable.
5. **Navigation:** understated hover and active-page states.
6. **Process timeline:** optional line/step reveal, with all content readable by default.
7. **Mobile menu:** simple, fast open/close transition that does not impair keyboard use.

### Motion constraints
- Prefer CSS transitions and keyframes for simple effects.
- Use the existing motion library only if one is already installed and justified.
- Do not add a large animation dependency for a handful of transitions.
- Avoid scroll hijacking, forced horizontal scrolling, flashing, parallax that harms usability, cursor-following effects, and excessive bounce.
- Keep most micro-interactions around 150–300 ms; larger entrance effects should be short and restrained.
- Respect `prefers-reduced-motion: reduce` by removing or minimizing non-essential movement.
- Ensure the site remains understandable if animation never runs.
- Do not animate every paragraph independently.

Example CSS direction (adapt to the existing codebase):

```css
@media (prefers-reduced-motion: no-preference) {
  .reveal {
    animation: reveal-up 600ms ease both;
  }

  @keyframes reveal-up {
    from {
      opacity: 0;
      transform: translateY(14px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
}

@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    scroll-behavior: auto !important;
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

Do not blindly apply an entrance animation class to all elements. Use a small set of reusable patterns and ensure initially hidden content cannot remain invisible if scripts fail.

---

## 8. User Experience and Accessibility

Treat accessibility as a build requirement, not a final polish step.

- Use semantic landmarks and logical heading hierarchy.
- Make all navigation, menus, forms, and controls keyboard accessible.
- Provide clear focus indicators.
- Ensure buttons and links have meaningful names.
- Use sufficiently large touch targets, especially on mobile.
- Ensure readable type sizes and sufficient color contrast.
- Associate form labels and validation messages programmatically.
- Announce form status accessibly.
- Give meaningful images appropriate alt text; use empty alt for purely decorative images.
- Do not rely on hover-only behavior.
- Do not hide essential content until a scroll animation runs.
- Respect reduced-motion preferences.
- Avoid horizontal overflow at common viewport widths.
- If using a mobile menu, implement `aria-expanded`, focus behavior, Escape to close, and close-on-navigation.
- If adding a skip link, make it visible on keyboard focus.

Aim for WCAG 2.2 AA practices where practical.

---

## 9. Responsive Design

Test and refine at minimum:
- Small mobile: 320–375 px
- Typical mobile: 390–430 px
- Tablet: 768 px
- Laptop: 1024–1280 px
- Desktop: 1440 px and wider

Requirements:
- No clipped headings, cards, or CTA buttons.
- No horizontal page scrolling.
- Hero columns stack naturally on mobile.
- Service and project grids collapse to one column on narrow screens.
- Timeline changes from horizontal to vertical.
- Header navigation becomes an accessible mobile menu.
- Spacing and typography scale fluidly.
- Images and mockups stay within their containers.
- Buttons remain easy to tap.

---

## 10. Engineering Requirements

- Inspect the repository before choosing or changing tools.
- Preserve the current framework, package manager, and architecture unless there is a concrete reason to change.
- Build reusable components for header, footer, buttons, section headings, service cards, project cards, process steps, FAQ, CTA, and form fields.
- Separate page content data from layout where practical.
- Use CSS variables or the project's existing design token system.
- Use semantic HTML and maintainable, typed code if TypeScript is already in use.
- Use real navigation destinations and working interactions; remove dead `href="#"` links.
- Avoid unnecessary dependencies.
- Optimize image sizes and prevent layout shift.
- Use environment variables for secrets and include `.env.example` with names only.
- Do not commit credentials.
- Keep editable content and external URLs centralized in configuration.
- Add useful loading, empty, and error states where relevant.

### SEO and metadata
- Unique title and description for each route
- Correct heading hierarchy
- Open Graph metadata
- Descriptive URLs
- Image alt text
- Sitemap and robots file if supported
- Structured data only when factually accurate
- Natural keywords related to web development, website design, UI/UX, and small-business websites

### Analytics
Do not install analytics or tracking by default. If later configured, track only privacy-appropriate events such as CTA clicks and successful form submissions. Never send message content, email addresses, or other sensitive personal data to analytics.

---

## 11. Acceptance Checklist

Before calling the work complete, verify:

- [ ] Existing repository was inspected and its conventions preserved.
- [ ] The result is a working website, not only a visual mockup.
- [ ] All required pages and case-study routes work.
- [ ] Desktop and mobile navigation function correctly.
- [ ] Design is consistent with the Version 1 reference while visibly improved.
- [ ] Animation is restrained, purposeful, and respects reduced motion.
- [ ] Content remains visible and usable if animation is disabled.
- [ ] Cards, buttons, and links have appropriate hover and keyboard-focus states.
- [ ] No horizontal overflow or major responsive layout defects.
- [ ] All links have real destinations.
- [ ] Portfolio projects are clearly labeled by project type.
- [ ] No invented testimonials, clients, credentials, or results.
- [ ] Contact form validation and status states work.
- [ ] The contact form is connected and tested, or the missing provider setup is clearly documented.
- [ ] SEO titles and descriptions are present.
- [ ] Images are optimized and have appropriate alt text.
- [ ] No new console errors or broken assets.
- [ ] Lint, type-check, tests, and production build are run where available.
- [ ] README includes setup, local development, build, deployment, and form setup instructions.

---

## 12. Recommended Implementation Sequence

1. Inspect the repository and screenshot, then report the plan.
2. Establish or refine global tokens, typography, layout, and responsive rules.
3. Improve the shared header, mobile navigation, footer, buttons, and section components.
4. Refine the homepage from hero through footer.
5. Build or refine Services, Work, About, and Contact.
6. Add project data and case-study pages.
7. Implement subtle motion and reduced-motion support.
8. Implement form validation and the real integration boundary.
9. Add SEO and accessibility improvements.
10. Test responsiveness, keyboard use, forms, links, and production build.
11. Update README and report anything that still requires Greg's input.

## 13. Final Instruction to Codex

Implement Version 2 in the existing repository. Use the uploaded Version 1 screenshot as a reference, not a rigid pixel-perfect constraint. Preserve the recognizable brand direction while making the result more polished, accessible, responsive, and interactive.

Do not stop after producing a plan. After a brief plan, make the code changes, run available checks, and report:
- What improved from Version 1
- Files created or modified
- How to run the site
- How to connect and verify the contact form
- Which placeholders need real information
- Tests and build commands run, with results
