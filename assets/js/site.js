(() => {
  const path = location.pathname.replace(/\/$/, "") || "/";
  const page = path === "/" ? "home" : path.split("/").pop();
  const navItems = [["Home","/"],["Services","/services/"],["Work","/work/"],["About","/about/"],["Contact","/contact/"]];
  const header = document.querySelector("#site-header");
  if (header) header.innerHTML = `<header class="site-header"><div class="nav-wrap"><a class="brand" href="/" aria-label="Greg Garnett home">Greg Garnett<small>Web Development • UI/UX</small></a><button class="menu-toggle" aria-label="Open navigation" aria-expanded="false" aria-controls="primary-navigation">☰</button><nav class="nav-links" id="primary-navigation" aria-label="Primary navigation">${navItems.map(([name,url])=>`<a href="${url}"${(url === "/" ? page === "home" : path === url.replace(/\/$/, "")) ? ' aria-current="page"' : ""}>${name}</a>`).join("")}<a class="button button-primary" href="/contact/">Start a project <span aria-hidden="true">↗</span></a></nav></div></header>`;
  const toggle = document.querySelector(".menu-toggle"), nav = document.querySelector(".nav-links");
  toggle?.addEventListener("click", () => { const open = toggle.getAttribute("aria-expanded") !== "true"; toggle.setAttribute("aria-expanded", String(open)); toggle.setAttribute("aria-label", open ? "Close navigation" : "Open navigation"); toggle.textContent = open ? "×" : "☰"; nav.dataset.open = String(open); });
  const closeMenu = () => { if (!toggle || !nav) return; toggle.setAttribute("aria-expanded", "false"); toggle.setAttribute("aria-label", "Open navigation"); toggle.textContent = "☰"; nav.dataset.open = "false"; };
  nav?.querySelectorAll("a").forEach(link => link.addEventListener("click", closeMenu));
  document.addEventListener("keydown", event => { if (event.key === "Escape" && toggle?.getAttribute("aria-expanded") === "true") { closeMenu(); toggle.focus(); } });
  const footer = document.querySelector("#site-footer");
  if (footer) footer.innerHTML = `<footer class="site-footer"><div class="wrap"><div class="footer-top"><div><a class="footer-brand" href="/">Greg Garnett</a><p>Thoughtful websites and digital experiences for small businesses and independent professionals.</p></div><div><h3>EXPLORE</h3><div class="footer-links"><a href="/">Home</a><a href="/services/">Services</a><a href="/work/">Work</a><a href="/about/">About</a><a href="/contact/">Contact</a></div></div><div><h3>LET’S CONNECT</h3><div class="footer-links">${window.SITE_CONFIG?.contactEmail ? `<a href="mailto:${window.SITE_CONFIG.contactEmail}">${window.SITE_CONFIG.contactEmail}</a>` : '<span>Email details coming soon</span>'}${(window.SITE_CONFIG?.socialLinks || []).map(x=>`<a href="${x.url}" rel="me">${x.label}</a>`).join("")}</div></div></div><div class="footer-bottom"><span>© ${new Date().getFullYear()} Greg Garnett</span><span>Designed with care.</span></div></div></footer>`;
  const iconService = s => `<article class="service-card"><div class="service-icon" aria-hidden="true">${s.icon}</div><h3>${s.title}</h3><p>${s.summary}</p><a href="${s.href}">Explore service <span aria-hidden="true">→</span></a></article>`;
  const visual = p => `<div class="project-visual" data-tone="${p.tone}" role="img" aria-label="Abstract browser mockup for ${p.title} concept"><div class="mini-window"><span class="mini-pic"></span><i></i><strong>${p.title}</strong><i></i><i></i><b></b></div></div>`;
  const previewServices = document.querySelector("#service-preview"); if (previewServices) previewServices.innerHTML = window.SERVICES.map(iconService).join("");
  const projectCards = (detail = false) => window.PROJECTS.map((p,i)=>`<article class="project-card" id="${p.slug}">${visual(p)}<div class="project-meta"><span class="project-tag">${p.category} · Self-initiated</span><h3>${p.title}</h3><p>${p.summary}</p>${detail ? `<div class="case-study"><div><h4>CHALLENGE</h4><p>${p.challenge}</p></div><div><h4>APPROACH</h4><p>${p.approach}</p></div><div><h4>DELIVERABLES</h4><p>${p.deliverables}</p></div><div><h4>TOOLS & OUTCOME</h4><p>${p.tools}. ${p.outcome}</p></div></div>` : `<a href="/work/#${p.slug}">View concept details <span aria-hidden="true">→</span></a>`}</div></article>`).join("");
  const projects = document.querySelector("#project-preview"); if (projects) projects.innerHTML = projectCards();
  const work = document.querySelector("#work-list"); if (work) work.innerHTML = projectCards(true);
  const services = document.querySelector("#service-list");
  if (services) services.innerHTML = window.SERVICE_DETAILS.map(s=>`<article class="service-detail" id="${s.id}"><div><p class="eyebrow">SERVICE</p><h2>${s.title}</h2><p class="service-fit"><strong>A good fit for:</strong> ${s.fit}</p></div><div class="deliverable-block"><h3>Potential deliverables</h3><ul>${s.deliverables.map(x=>`<li>${x}</li>`).join("")}</ul><a class="text-link" href="/contact/">Request a project estimate <span aria-hidden="true">→</span></a></div></article>`).join("");
  document.querySelectorAll("[data-year]").forEach(el => el.textContent = new Date().getFullYear());
  if ("IntersectionObserver" in window && !matchMedia("(prefers-reduced-motion: reduce)").matches) {
    const observer = new IntersectionObserver(entries => entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add("is-visible"); observer.unobserve(entry.target); } }), { threshold: .12 });
    document.querySelectorAll(".section-heading, .service-card, .project-card, .steps article, .service-detail").forEach(el => { el.classList.add("reveal"); observer.observe(el); });
  }
  const form = document.querySelector("#inquiry-form");
  if (form) {
    const status = form.querySelector(".form-status");
    const setError = (input,msg) => { const slot = form.querySelector(`[data-error-for="${input.name}"]`); input.setAttribute("aria-invalid", msg ? "true" : "false"); if(slot) slot.textContent = msg; };
    form.addEventListener("submit", e => { e.preventDefault(); let valid = true; const name=form.elements.name,email=form.elements.email,details=form.elements.details,zh=document.documentElement.lang==="zh-CN";
      [[name,name.value.trim()?"":(zh?"请输入姓名。":"Please enter your name.")],[email,/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim())?"":(zh?"请输入有效的电子邮箱地址。":"Enter a valid email address.")],[details,details.value.trim()?"":(zh?"请简单介绍一下你的项目。":"Please tell me a little about your project.")]].forEach(([el,msg])=>{setError(el,msg);if(msg)valid=false;});
      status.hidden = false; status.setAttribute("role","status");
      if (!valid) { status.className="form-status"; status.textContent=zh?"请检查标记的字段后重试。":"Please review the highlighted fields and try again."; form.querySelector('[aria-invalid="true"]')?.focus(); return; }
      const endpoint = window.SITE_CONFIG?.formEndpoint;
      if (!endpoint) { status.className="form-status"; status.textContent="Your message has not been sent because the inquiry form is not connected yet. Please contact Greg after a provider endpoint is configured."; return; }
      const submit = form.querySelector('[type="submit"]');
      if (submit.disabled) return;
      submit.disabled = true; submit.textContent = "Sending…"; status.className="form-status"; status.textContent="Sending your inquiry…";
      fetch(endpoint, { method: "POST", headers: { "Content-Type": "application/json", "Accept": "application/json" }, body: JSON.stringify(Object.fromEntries(new FormData(form))) })
        .then(response => { if (!response.ok) throw new Error("Request failed"); status.className="form-status form-status-success"; status.textContent="Thanks for reaching out. Your inquiry was sent."; form.reset(); form.querySelectorAll('[aria-invalid]').forEach(input => input.removeAttribute("aria-invalid")); })
        .catch(() => { status.className="form-status"; status.textContent="Your inquiry could not be sent. Please try again later."; })
        .finally(() => { submit.disabled = false; submit.innerHTML = 'Review inquiry <span aria-hidden="true">↗</span>'; });
    });
    form.addEventListener("input",e=>{if(e.target.matches("input,textarea,select")&&e.target.getAttribute("aria-invalid")==="true")setError(e.target,"");});
  }
})();
