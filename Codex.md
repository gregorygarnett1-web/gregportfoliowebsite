# Greg Garnett — Personal Freelance Website
## Product Requirements & Build Instructions for Codex

> **Project goal:** Build a polished, professional personal website that positions Greg Garnett as a web development and UI/UX partner for small businesses, showcases his work and skills honestly, and turns qualified visitors into consistent freelance leads.

---

## 1. Project Overview

### Personal brand
- **Name:** Greg Garnett
- **Professional positioning:** Web Developer & UI/UX Designer
- **Supporting interests:** AI tools, modern web technologies, digital design, and conversion-focused experiences
- **Background:** Former U.S. Air Force service member; currently freelancing while continuing to develop skills in web development, UI/UX, HTML, CSS, Figma, and AI-assisted workflows.
- **Primary audience:** Small businesses, solo entrepreneurs, consultants, and service providers that need a more professional online presence.
- **Primary conversion:** A qualified prospect submits a project inquiry or books an introductory call.

### Brand message
**Headline concept:** Designing Beautiful Digital Experiences That Drive Results.

**Supporting message:** I help small businesses create clear, modern digital experiences that build trust, communicate value, and turn more visitors into customers.

Do not position Greg as an expert in technologies or services he has not demonstrated. Use accurate wording, and make it easy to update skills, projects, and service details as experience grows.

### Business objectives
1. Generate qualified freelance inquiries consistently.
2. Explain services and outcomes clearly.
3. Build trust through portfolio projects, case studies, process, and a concise personal story.
4. Encourage visitors to take one clear next step.
5. Create a site that can grow as Greg gains experience and adds services.

---

## 2. Design Direction

### Visual style
Create a modern, clean, confident, premium-feeling portfolio. It should feel approachable and human—not like a generic agency template.

### Suggested color palette
Use these colors consistently through CSS variables:
- **Navy:** `#10243A` — primary dark text, footer, and dark sections
- **Sky blue:** `#58B8E8` — links, accents, highlights
- **White:** `#FFFFFF` — primary background
- **Light gray:** `#F4F7FA` — alternate sections and cards
- **Slate gray:** `#5B6876` — secondary text
- **CTA green:** `#2F855A` — primary conversion button, used sparingly

Check contrast for accessibility. Do not use color alone to communicate meaning.

### Typography
- Use a modern, highly readable sans-serif pairing or a single flexible font family.
- Use strong heading hierarchy, comfortable line lengths, generous spacing, and readable body text.
- Avoid excessive all-caps, decorative fonts, and dense paragraphs.

### Layout and motion
- Responsive layout for mobile, tablet, and desktop.
- Clear visual hierarchy and generous whitespace.
- Subtle transitions only; respect `prefers-reduced-motion`.
- Use consistent spacing, border radius, shadows, and button styles.
- Prefer authentic project screenshots, prototypes, and diagrams over generic stock photography.
- Do not invent testimonials, client logos, performance metrics, awards, or completed client work.

---

## 3. Site Map

Build these pages:

1. **Home** (`/`)
2. **Services** (`/services`)
3. **Portfolio / Work** (`/work`)
4. **About** (`/about`)
5. **Contact** (`/contact`)

A **Privacy Policy** page may be included if analytics, embedded scheduling, or form tools collect personal data. Keep navigation simple. On mobile, provide an accessible menu with a clear open/close state.

### Global header
- Wordmark: `Greg Garnett`
- Optional descriptor: `Web Development • UI/UX`
- Navigation: Home, Services, Work, About, Contact
- Primary CTA: `Start a Project`
- Header should be sticky only if it improves usability and does not obscure content.

### Global footer
- Name and short positioning statement
- Links to main pages
- Contact email placeholder configured in one place
- Social/profile links only when real URLs are supplied
- Copyright year generated dynamically
- Privacy link if applicable

Do not fabricate email addresses, social links, or booking URLs. Put missing values in a clearly documented configuration file.

---

## 4. Homepage Requirements

Build the homepage as a conversion-focused landing page with these sections in this order.

### Section 1: Hero
**Eyebrow:** WEB DEVELOPMENT • UI/UX DESIGN

**Headline:** Designing Beautiful Digital Experiences That Drive Results.

**Body:** I help small businesses create modern websites and intuitive digital experiences that communicate their value, build trust, and make it easier for customers to take action.

**Primary CTA:** Start a Project  
**Secondary CTA:** View My Work

Include a visual area showing a polished website mockup, responsive layouts, or a Figma-style interface. Use only available assets or create a CSS-based mockup; do not imply a mockup is a real client project.

### Section 2: Trust and introduction
Introduce Greg as a freelancer and former U.S. Air Force service member who values discipline, clear communication, continuous learning, and dependable execution.

Keep this authentic and concise. Military service should support the personal story, not dominate the website or imply a government affiliation.

### Section 3: Services overview
Display three service cards:

1. **Website Design & Development**
   - Modern, responsive websites
   - Landing pages and small-business websites
   - Clear page structure and calls to action
   - Accessible, maintainable front-end implementation

2. **UI/UX Design**
   - User flows and wireframes
   - Figma prototypes and interface design
   - Responsive layouts
   - Usability-focused improvements

3. **Website Improvement & Digital Experience**
   - Website reviews and UX recommendations
   - Content hierarchy and conversion-path improvements
   - Performance and accessibility checks
   - Practical recommendations for next steps

Only advertise a specific deliverable as a service if Greg can currently provide it. AI tools may support the workflow, but do not promise custom AI integrations or automation projects unless that capability is confirmed.

Each card should have a short outcome-oriented description and a link to the Services page.

### Section 4: Selected work
Create a portfolio preview with project cards. Each card should include:
- Project title
- Project type
- One-sentence challenge or goal
- Role and tools used
- Image or screenshot
- Link to the case study

If no finished client projects are available, create clearly labeled **concept projects** or **self-initiated projects**. Never present concept work as paid client work. Include 2–3 editable sample entries in a central data file, with obvious placeholder labels and replaceable images.

Suggested case-study structure:
- Overview
- Problem or opportunity
- Audience and goals
- Process and key decisions
- Design/development solution
- Tools used
- Outcome or lessons learned

Do not invent quantitative results. If a project has no measured results, describe the deliverables and learning instead.

### Section 5: Process
Show a simple four-step process:

1. **Discover** — Understand the business, audience, goals, and constraints.
2. **Plan** — Agree on scope, sitemap, priorities, and deliverables.
3. **Design & Build** — Create the design and develop the responsive experience.
4. **Review & Launch** — Test, refine, hand over, and discuss future improvements.

Clarify that timelines and scope are confirmed for each project.

### Section 6: Why work with me?
Use grounded differentiators:
- Direct communication with the person doing the work
- Thoughtful design and practical development
- Focus on usability and business goals
- Transparent scope and expectations
- A learning mindset and attention to detail

Do not claim guaranteed leads, rankings, revenue, or conversion increases.

### Section 7: Final CTA
**Heading:** Have a project in mind?

**Text:** Tell me what you are building, what is not working, or where you want your website to go. I’ll review your message and follow up about possible next steps.

**CTA:** Start a Project

### Section 8: Optional FAQ
Include concise answers to:
- What types of businesses do you work with?
- Can you improve an existing website?
- Do you offer design and development together?
- What information should I include in a project inquiry?
- How are project scope and pricing determined?

Do not invent fixed delivery times or guarantees.

---

## 5. Services Page

Create a clear service page explaining the value, typical deliverables, and ideal fit for each service.

### Service A: Website Design & Development
**Good fit for:** Small businesses and independent professionals who need a credible, easy-to-use website.

**Potential deliverables:**
- Discovery and requirements discussion
- Sitemap and page structure
- Responsive page design
- Front-end development
- Contact or inquiry form
- Basic accessibility and performance review
- Launch checklist and handoff

### Service B: UI/UX Design
**Good fit for:** Businesses that need to improve the usability or clarity of a website or digital product.

**Potential deliverables:**
- User and business goals
- User flows
- Wireframes
- High-fidelity Figma designs
- Clickable prototype
- Responsive design guidance
- Usability recommendations

### Service C: Website Review & Improvement
**Good fit for:** Businesses with an existing website that needs clearer messaging, better navigation, improved usability, or a stronger inquiry path.

**Potential deliverables:**
- Heuristic UX review
- Navigation and content hierarchy recommendations
- Mobile usability review
- Calls-to-action review
- Prioritized improvement list

### Pricing
Do not publish invented or binding prices. Build the service cards so pricing can be added later. Until pricing is finalized, use **“Request a project estimate”** and explain that cost depends on scope, functionality, content, and timeline.

Avoid vague claims such as “full-service digital agency.” Keep the offer focused and understandable.

---

## 6. Portfolio / Work Page

Create a filterable or clearly categorized project gallery if this can be implemented accessibly without unnecessary complexity.

Possible categories:
- Websites
- UI/UX
- Landing Pages
- Concept Projects

Each project should link to a detail page or modal with accessible controls. Prefer dedicated case-study pages for search visibility and clear sharing.

Create a central project data file so projects can be added without rewriting the layout. Each project entry should support:
- `slug`
- `title`
- `category`
- `projectType` (client, personal, concept, or coursework)
- `summary`
- `challenge`
- `approach`
- `deliverables`
- `tools`
- `image`
- `alt`
- `outcome`
- `featured`

Mark example content as placeholder content and make it straightforward to replace. Do not leave fake testimonials or fabricated client names in the finished site.

---

## 7. About Page

Tell Greg’s story in a warm, professional voice.

Suggested draft:

> I’m Greg Garnett, a freelancer focused on web development and UI/UX design. My background includes serving in the U.S. Air Force, and I bring that experience’s emphasis on discipline, teamwork, and responsibility into how I approach projects.
>
> I’m continually developing my skills in HTML, CSS, modern web development, Figma, and AI-assisted tools. I enjoy combining design and technology to make websites clearer, more useful, and more effective for the people who use them.
>
> My goal is to work collaboratively with small businesses and independent professionals to build digital experiences that reflect their value and make the next step clear for their customers.

Edit this copy to match Greg’s voice. Do not imply that military service, current study, or learning tools are certifications or client credentials.

Include a skills area that can be edited as skills develop:
- HTML and CSS
- Responsive web design
- Figma and UI/UX workflows
- Front-end development (list specific frameworks only when confirmed)
- AI-assisted design and development workflows

Use honest proficiency labels, or omit skill percentages and progress bars because they are subjective and can mislead.

---

## 8. Contact and Lead Generation

The contact experience is one of the most important parts of the site.

### Contact page content
**Heading:** Let’s talk about your project.

**Body:** Share a little about your business, what you need, and what success would look like. The more context you provide, the easier it is to recommend a useful next step.

### Inquiry form fields
- Name (required)
- Email (required; validate format)
- Business or organization (optional)
- Website URL (optional)
- Service needed (select: Website Design & Development, UI/UX Design, Website Review & Improvement, Not Sure Yet)
- Estimated budget (optional; ranges should be configurable and not presented as mandatory)
- Desired timeline (optional)
- Project details (required)
- Consent checkbox if required by the selected email/form provider or applicable privacy rules

Form requirements:
- Use labels associated with every field; do not rely on placeholder text alone.
- Provide clear validation and accessible error messages.
- Show a success message only after successful submission.
- Show a useful failure message if submission fails.
- Include loading and duplicate-submission protection.
- Protect against spam using a reasonable server-side or provider-supported method.
- Never expose API keys or email service secrets in client-side code.
- Do not pretend the form sends messages unless a real backend or form service is configured.

### Form integration
Build a small, well-documented integration layer that can connect to a real provider (for example, a server endpoint or a form service). Use environment variables for secrets. If credentials are not available, implement the UI and validation, document the missing setup, and show a clearly labeled development-only behavior rather than claiming delivery.

### Conversion support
- Keep a CTA visible in the header and at key page endings.
- Make contact links easy to find.
- Ask only for information needed to start a conversation.
- Consider adding a scheduling link after a real booking URL is supplied.
- Add a short confirmation state explaining what happens next, without promising a response time unless Greg chooses one.

---

## 9. Technical Requirements

### First step
Inspect the existing repository before making changes. Identify the framework, package manager, current structure, and existing conventions. Preserve useful working code. If the repository is empty, select a simple, maintainable setup appropriate for a responsive portfolio site.

### Implementation principles
- Use semantic HTML and accessible components.
- Use reusable components for the header, footer, buttons, service cards, project cards, and CTA sections.
- Separate content data from layout code where practical.
- Keep code readable, typed if the project uses TypeScript, and easy for Greg to maintain.
- Use CSS variables/design tokens for colors, spacing, typography, and radius.
- Use responsive CSS rather than fixed-width layouts.
- Avoid unnecessary dependencies and overly complex animation libraries.
- Optimize images, use appropriate dimensions, and avoid layout shift.
- Include sensible loading, empty, and error states wherever relevant.
- Use real links and working navigation; do not leave dead buttons or `href="#"` placeholders.
- Ensure forms, menus, and dialogs are keyboard accessible.
- Respect reduced-motion preferences.
- Keep secrets in environment variables and include an `.env.example` containing names but no real secret values.

### Suggested components
- `SiteHeader`
- `MobileNavigation`
- `SiteFooter`
- `Button` / `LinkButton`
- `SectionHeading`
- `ServiceCard`
- `ProjectCard`
- `ProcessSteps`
- `FAQ`
- `ContactForm`
- `CTASection`

Adapt names and folders to the repository's existing conventions.

### Content and configuration
Centralize editable values such as:
- Contact email
- Social/profile URLs
- Scheduling URL
- SEO defaults
- Project data
- Service data
- Optional pricing
- Analytics ID, if later configured

Do not fabricate real contact details. Use clearly identified placeholders in configuration and document what Greg must replace.

---

## 10. SEO, Accessibility, and Performance

### SEO
- Unique page title and meta description for each page.
- Correct heading hierarchy with one clear main heading per page.
- Descriptive URLs and internal links.
- Open Graph metadata for sharing.
- Descriptive image alt text; decorative images should use empty alt text.
- Add a sitemap and robots file if supported by the chosen framework.
- Add structured data only when accurate and useful; never invent ratings or reviews.
- Use keywords naturally, such as web development, website design, UI/UX design, and small-business websites. Avoid keyword stuffing.

### Accessibility
Aim for WCAG 2.2 AA practices where practical:
- Keyboard navigation and visible focus states
- Sufficient color contrast
- Semantic landmarks and form labels
- Useful link and button names
- Accessible mobile navigation
- Reduced-motion support
- No information conveyed by color alone
- Appropriate alt text
- Clear validation and status announcements

### Performance
- Minimize JavaScript and avoid unnecessary dependencies.
- Use responsive, compressed images.
- Lazy-load below-the-fold images where appropriate.
- Avoid layout shifts and oversized hero assets.
- Verify responsive behavior at common mobile, tablet, and desktop widths.

---

## 11. Analytics and Lead Tracking

Prepare the site so privacy-conscious analytics can be added later. Do not add tracking scripts until an analytics provider and privacy approach are selected.

Useful events, if analytics is configured:
- `project_cta_click`
- `contact_form_start`
- `contact_form_submit_success`
- `contact_form_submit_error`
- `portfolio_project_open`
- `email_link_click`

Do not record form message contents, email addresses, or other sensitive personal data in analytics events.

---

## 12. Content and Trust Rules

- Never invent client testimonials, customer logos, awards, certifications, years of experience, project outcomes, or conversion metrics.
- Distinguish client projects from personal, concept, and coursework projects.
- Do not guarantee search rankings, revenue, leads, or conversion lifts.
- Use clear, specific copy instead of jargon.
- Do not claim a form is operational until the integration has been tested end-to-end.
- Do not claim a service is available if it depends on unconfirmed skills or tools.
- Make placeholders obvious and document every value Greg needs to supply.

---

## 13. Testing and Acceptance Criteria

The site is ready for review when:

- [ ] All five main pages exist and have consistent navigation.
- [ ] Layout works on mobile, tablet, and desktop.
- [ ] All links and buttons perform their stated actions.
- [ ] No dead links, console errors, or broken images remain.
- [ ] Contact form validation works accessibly.
- [ ] Form submission is either tested with a real provider or clearly documented as not yet connected.
- [ ] There are no fabricated testimonials, client claims, or results.
- [ ] Portfolio examples are labeled accurately.
- [ ] Page titles, descriptions, headings, and image alt text are present.
- [ ] Keyboard focus and mobile navigation work.
- [ ] Reduced-motion settings are respected.
- [ ] Images and fonts do not cause major layout shifts.
- [ ] Any required environment variables are documented in `.env.example` and setup instructions.
- [ ] README includes install, development, build, deployment, and form-configuration instructions.

Run the project's available lint, type-check, test, and production build commands. Fix errors introduced by the implementation. If a command cannot be run, state why.

---

## 14. Recommended Build Order

1. Inspect the repository and report the existing stack.
2. Set up design tokens and global layout.
3. Implement header, navigation, footer, and reusable UI components.
4. Build the homepage and its responsive sections.
5. Build Services, Work, About, and Contact pages.
6. Add project/service data and clear placeholder configuration.
7. Implement form validation and the integration boundary.
8. Add SEO, accessibility, and performance refinements.
9. Run checks and fix issues.
10. Update README with setup, deployment, and required configuration.

Do not stop after generating a static mockup. Build a working, navigable website using the existing project conventions.

---

## 15. Final Instructions to Codex

Before coding, inspect the repository and summarize the implementation plan in a few bullets. Then implement the website rather than only describing it.

Prioritize, in order:
1. Clear positioning and a compelling, honest first impression
2. A working path from visitor to project inquiry
3. Portfolio credibility and clear service descriptions
4. Responsive, accessible design
5. Maintainable code and straightforward future updates

When finished, summarize:
- What was implemented
- Which files were created or changed
- How to run the site locally
- How to connect and test the contact form
- Which placeholders Greg must replace
- Which checks were run and their results
