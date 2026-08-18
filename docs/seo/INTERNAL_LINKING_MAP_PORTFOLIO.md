# Internal Linking Map -- carlosanayaweb.com

> Portfolio domain for Carlos Anaya Ruiz  
> Last updated: 2026-04-14  
> Companion doc: `EXTERNAL_ACTIONS_PORTFOLIO.md`, `MEASUREMENT_PLAN_PORTFOLIO.md`

---

## 1. Current State (Baseline)

| Element | Links To | Notes |
|---------|----------|-------|
| Navigation (header + footer) | Home, Blog, Projects, About, CV, Contact | Flat, no hierarchy signals |
| Hero section | Blog (primary CTA), Projects, Contact | No featured projects or latest posts |
| Blog posts | Projects hub, Contact | No contextual links between related content |
| Project pages | Contact, Projects hub | No links to related blog posts or other projects |
| About | CV, Projects | No link to consulting domain |
| CV | Contact | Missing links to project evidence and blog authority |
| Footer | Main nav pages | No link to carlosanayaruiz.com |

### Key Gaps

- **Zero links** to the commercial domain (carlosanayaruiz.com) from any page.
- **No contextual cross-links** between related content (e.g., Nora AI project page does not link to AI/LLM blog articles).
- **No topical cluster structure** -- every page links generically instead of by topic relevance.
- **No featured/latest content** on the home page to distribute link equity to new pages.
- **CV is a dead end** -- links only to Contact, missing the opportunity to connect experience entries to project pages and articles.

---

## 2. Proposed Linking Map

### 2.1 Home Page (`/`)

| Link Target | Anchor / Placement | Purpose |
|-------------|---------------------|---------|
| Featured projects (Nora AI, Manuel Solis Web) | Project cards in "Selected Work" section | Distribute equity to highest-value project pages |
| Latest blog posts (2-3) | "Latest Articles" section below hero | Push equity to fresh content, encourage crawling |
| About (`/about`) | Brief intro paragraph: "Learn more about my background" | Support reputation queries |
| CV (`/cv`) | Header CTA: "View Resume" | Recruiter pathway |
| carlosanayaruiz.com | Footer: "For consulting services, visit my consulting practice" | Cross-domain authority bridge |
| Contact (`/contact`) | Secondary CTA: "Get in touch" | Conversion pathway |

### 2.2 About Page (`/about`)

| Link Target | Anchor / Placement | Purpose |
|-------------|---------------------|---------|
| CV (`/cv`) | "See my full professional history" | Deep professional detail |
| Projects (`/projects`) | "Explore my recent work" | Proof of work |
| Blog (`/blog`) | "Read my technical articles" | Thought leadership signal |
| carlosanayaruiz.com | In-content: "my consulting practice" | Cross-domain bridge |
| Specific project pages | Inline where awards/projects are mentioned in narrative | Contextual deep links |
| LinkedIn, GitHub | External profile links | sameAs authority reinforcement |

### 2.3 Blog Hub (`/blog`)

| Link Target | Anchor / Placement | Purpose |
|-------------|---------------------|---------|
| All published articles | Article cards / list | Primary content distribution |
| Featured project related to latest post | Sidebar or callout: "Related Project" | Cluster reinforcement |
| About (`/about`) | Author byline: "Carlos Anaya Ruiz" links to About | Author authority (E-E-A-T) |
| Category/tag pages (future) | Tag links on each article card | Topical clustering |

### 2.4 Blog Posts (Individual Articles)

| Link Target | Anchor / Placement | Purpose |
|-------------|---------------------|---------|
| Related project pages | **In-content, contextual** (e.g., "I built this in my Nora AI project") | Strongest internal link signal |
| Related blog posts (2-3) | "Related Articles" section at end of post | Cluster reinforcement, session depth |
| About (`/about`) or CV (`/cv`) | Author bio box at end of article | Author authority |
| carlosanayaruiz.com | **Only when article topic overlaps with a commercial service** (e.g., "I offer consulting on this -- learn more at my consulting practice") | Cross-domain bridge, contextual |
| Contact (`/contact`) | End-of-article CTA: "Want to discuss this topic? Get in touch" | Conversion |
| External sources | Cited references, tools mentioned | Outbound trust signals |

### 2.5 Projects Hub (`/projects`)

| Link Target | Anchor / Placement | Purpose |
|-------------|---------------------|---------|
| All project detail pages | Project cards | Primary content distribution |
| Blog posts related to project technologies | "Technical Deep Dives" section or callouts | Cluster reinforcement |
| CV (`/cv`) | "See my professional background" | Authority context |

### 2.6 Project Detail Pages (`/projects/[slug]`)

| Link Target | Anchor / Placement | Purpose |
|-------------|---------------------|---------|
| Related blog posts (same tech/topic) | "Related Articles" section or in-content links | Cluster reinforcement |
| Other related projects | "More Projects" section (2-3 related) | Session depth, equity distribution |
| CV (`/cv`) | "Professional context" or "See my experience" | Authority |
| About (`/about`) | Contextual where personal narrative adds value | Reputation |
| carlosanayaruiz.com | **Only if project was client/consulting work**: "This project was delivered through my consulting practice" | Cross-domain, contextual |
| GitHub repo | External link to source code (if public) | Trust signal |

### 2.7 CV Page (`/cv`)

| Link Target | Anchor / Placement | Purpose |
|-------------|---------------------|---------|
| Project pages | **Link each experience highlight to its relevant project page** (e.g., Amazon experience -> relevant project) | Evidence linking |
| Blog posts | Link skills/technologies to related articles (e.g., "Next.js" -> Next.js article) | Authority reinforcement |
| About (`/about`) | "Read my story" or similar | Narrative context |
| Contact (`/contact`) | CTA: "Interested in working together?" | Conversion |
| LinkedIn | External: "View on LinkedIn" | Profile verification |
| GitHub | External: "View my code" | Technical verification |

### 2.8 Contact Page (`/contact`)

| Link Target | Anchor / Placement | Purpose |
|-------------|---------------------|---------|
| Projects (`/projects`) | "See my work first" | Pre-conversion context |
| CV (`/cv`) | "Review my professional background" | Pre-conversion context |
| Blog (`/blog`) | "Read my latest thinking" | Pre-conversion context |
| carlosanayaruiz.com | "For consulting and services inquiries, visit my consulting practice" | Commercial pathway redirect |

### 2.9 Footer (All Pages)

| Link Target | Anchor / Placement | Purpose |
|-------------|---------------------|---------|
| All main nav pages | Footer navigation | Site-wide equity distribution |
| carlosanayaruiz.com | "Consulting & Services" | Persistent cross-domain bridge |
| LinkedIn | Icon + text | External authority |
| GitHub | Icon + text | External authority |
| Email (mailto) | Icon + text | Contact pathway |

---

## 3. Topical Cluster Linking

Each cluster connects a **pillar** concept across project pages, blog articles, and static pages. Links within a cluster should use descriptive, keyword-relevant anchor text.

### Cluster: AI / LLM

```
Nora AI project page
    <-> AI/LLM blog articles (e.g., "Building conversational AI", "LLM prompt engineering")
    <-> About page (AI expertise section)
    <-> CV (AI-related experience entries)
```

**Example contextual links:**
- Nora AI project -> blog article: "Read how I approached prompt engineering in this article"
- AI blog post -> Nora AI: "I applied these techniques when building Nora AI"
- About page -> Nora AI: "My AI work includes Nora AI, a conversational assistant"

### Cluster: Web Modernization

```
Manuel Solis Web project page
    <-> Next.js / performance blog articles
    <-> Performance optimization articles
    <-> CV (relevant web development experience)
```

**Example contextual links:**
- Manuel Solis project -> blog: "I wrote about the performance techniques used in this project"
- Next.js blog post -> Manuel Solis: "I applied this approach in the Manuel Solis website rebuild"

### Cluster: Leadership

```
Career / leadership blog articles
    <-> CV experience section (Amazon, management roles)
    <-> About page narrative (career story)
```

**Example contextual links:**
- Leadership article -> CV: "My experience managing teams at Amazon shaped this perspective"
- About page -> leadership article: "I write about engineering leadership on my blog"

### Cluster: Security

```
Security blog articles
    <-> About page (cybersecurity specialization mention)
    <-> CV (Tec de Monterrey cybersecurity education)
    <-> Any security-related project pages
```

**Example contextual links:**
- Security article -> About: "Cybersecurity has been a focus since my studies at Tec de Monterrey"
- CV (education) -> security article: "I explore cybersecurity topics in depth on my blog"

---

## 4. Cross-Domain Linking Rules

### Portfolio (carlosanayaweb.com) -> Commercial (carlosanayaruiz.com)

| Rule | Detail |
|------|--------|
| Maximum links per page | 2-3, always contextual (never forced) |
| Link attribute | `rel="noopener"` on all cross-domain links |
| Anchor text | Descriptive and varied: "my consulting practice", "consulting services", "professional services" |
| Prohibited anchor text | "click here", "visit site", naked URLs, exact-match commercial keywords |
| Placement | In-content where consulting/services are naturally relevant, or footer |
| Pages that should always link | About, Contact, Footer |
| Pages that link conditionally | Blog posts (only when topic overlaps commercial services), Project pages (only if client work) |

### Commercial (carlosanayaruiz.com) -> Portfolio (carlosanayaweb.com)

| Rule | Detail |
|------|--------|
| Link targets | "About Carlos" (about page), "Technical Blog" (blog hub) |
| Purpose | Establish the person behind the consulting brand |
| Anchor text | "about Carlos Anaya Ruiz", "technical blog", "portfolio" |
| Placement | About/team page, footer, relevant service pages |

### Anti-Pattern Rules

- **No reciprocal link loops on the same anchor text.** If Page A links to Page B with anchor "consulting services", Page B must NOT link back to Page A with the same anchor.
- **No link farms.** Do not create pages whose sole purpose is linking to the other domain.
- **No hidden links.** Every cross-domain link must be visible and useful to the reader.
- **No excessive linking.** If a page already has 2-3 cross-domain links, do not add more.

---

## 5. Link Equity Flow Diagram

```
                         HOME
                        / | \  \
                       /  |  \  \
                    About Blog Projects CV
                      |   |      |      |
                      |   v      v      |
                      | Articles Project |
                      |   Pages  Detail  |
                      |     |      |     |
                      +--+--+--+---+--+--+
                         |     |      |
                      Contact  |   carlosanayaruiz.com
                               |      (footer + contextual)
                           GitHub/LinkedIn
                           (external authority)
```

**Equity priorities (pages that should receive the most internal links):**

1. Blog articles (authority building, long-tail traffic)
2. Project detail pages (proof of expertise)
3. About page (reputation, E-E-A-T)
4. CV page (recruiter traffic)
5. Home page (brand anchor, already strong from direct traffic)

---

## 6. Implementation Checklist

- [ ] Add "Featured Projects" section to home page with links to Nora AI and Manuel Solis Web
- [ ] Add "Latest Articles" section to home page with links to 2-3 recent blog posts
- [ ] Add carlosanayaruiz.com link to footer on all pages ("Consulting & Services")
- [ ] Add carlosanayaruiz.com contextual link to About page
- [ ] Add carlosanayaruiz.com contextual link to Contact page
- [ ] Add "Related Articles" section to each project detail page
- [ ] Add "Related Projects" section to each blog post
- [ ] Add "Related Articles" / "More Projects" sections to project detail pages
- [ ] Convert CV experience entries into links to relevant project pages
- [ ] Add author byline on blog hub linking to About page
- [ ] Add end-of-article CTA linking to Contact on all blog posts
- [ ] Add author bio box at end of each blog post linking to About and CV
- [ ] Audit all cross-domain links for `rel="noopener"` attribute
- [ ] Verify anchor text diversity across all cross-domain links
- [ ] Implement cluster-based "Related Content" logic (tag or category matching)
