# SEO Audit: carlosanayaweb.com (Portfolio Domain)

**Audit Date:** 2026-04-14
**Domain:** carlosanayaweb.com
**Framework:** Next.js 16 with App Router
**Internationalization:** ES/EN via next-intl
**Hosting:** Firebase / Vercel (inferred)
**Companion Domain:** carlosanayaruiz.com (commercial — SEO consulting & web dev services)

---

## 1. Site Architecture

### Route Structure

```
/[locale]/                    → Home
/[locale]/about               → About / Bio
/[locale]/blog                → Blog listing
/[locale]/blog/[slug]         → Individual blog post
/[locale]/projects            → Projects listing
/[locale]/projects/[slug]     → Individual project
/[locale]/cv                  → Curriculum Vitae
/[locale]/contact             → Contact form
```

**Total indexable page types:** 8 templates
**Locales:** ES (default, x-default), EN
**Rendering:** SSR/SSG hybrid via Next.js App Router
**Data source:** Static TypeScript files in `/data/`

### Locale Routing

- Locale prefix strategy: `always` (e.g., `/es/blog`, `/en/blog`)
- `x-default` hreflang points to ES variant — correct for Mexico-based professional
- Content parity maintained between ES and EN — good

---

## 2. Critical Problems Found

### PROBLEM 1 (SEVERITY: CRITICAL) — Services Section on Home Competes with Commercial Domain

The home page contains a full **Services section** listing 8 service offerings:

1. App Development
2. Database Development
3. Web Design
4. Web Development
5. iOS Development
6. Information Management
7. Team Integration
8. Leadership Development

**Why this is critical:** These are transactional, commercial-intent service descriptions. They directly compete with carlosanayaruiz.com for service-related queries ("desarrollo web", "desarrollo de aplicaciones"). This creates keyword cannibalization between the two domains and confuses search engines about which domain to rank for service queries.

**Fix:** Remove the Services section entirely. Replace with an "Areas of Expertise" or "Technical Focus Areas" section that communicates competence without commercial intent. Frame as knowledge domains, not sellable services.

---

### PROBLEM 2 (SEVERITY: CRITICAL) — Commercial Keywords in constants.ts

The site-wide keyword definitions in `constants.ts` include:

- `"consultor tecnologico"` (ES)
- `"technology consultant"` (EN)

**Why this is critical:** These are transactional keywords that belong exclusively on the commercial domain. Having them in the portfolio domain's metadata actively cannibalizes the commercial domain's ability to rank for consulting queries.

**Fix:** Remove all consultant/consulting keywords from the portfolio domain. Replace with: `"engineering portfolio"`, `"technical leadership"`, `"software architecture"`, `"AI projects"`, `"portafolio de ingenieria"`, `"liderazgo tecnico"`.

---

### PROBLEM 3 (SEVERITY: HIGH) — Contact Page Uses Commercial Language

The contact page metadata includes terms like "consulting" and "nuevas oportunidades" (new opportunities), framing it as a business inquiry page rather than a professional connection point.

**Why this matters:** Contact pages with commercial language signal transactional intent. On a portfolio domain, the contact page should facilitate professional networking, collaboration inquiries, and recruiter outreach — not lead generation for consulting services.

**Fix:** Rewrite contact metadata to: "Connect with Carlos Anaya Ruiz for professional inquiries, collaboration, and technical discussions." Add a visible callout: "Looking for SEO consulting or web development services? Visit carlosanayaruiz.com."

---

### PROBLEM 4 (SEVERITY: MEDIUM) — Unnecessary Organization Schema

An Organization schema for "Law Offices of Manuel Solis" (employer) is present in the structured data output.

**Why this matters:** While technically accurate as an employer, including a full Organization schema for a law firm on a software engineer's portfolio site adds irrelevant entity signals. It does not help the portfolio domain rank for anything meaningful and could dilute the Person entity focus.

**Fix:** Remove the standalone Organization schema. The employer relationship is already captured in the Person schema via `worksFor`. That is sufficient.

---

### PROBLEM 5 (SEVERITY: HIGH) — Massive Content Gap

Current content inventory:
- **Blog posts:** 1 (AI Ethics)
- **Projects:** 2 (Nora AI, Manuel Solis Web)

For a domain that needs to establish technical authority, this is critically insufficient. Authoritative engineering portfolios need 15-20 blog posts and 5-8 detailed project case studies as a baseline.

**Fix:** Develop a content calendar (see PORTFOLIO_POSITIONING_STRATEGY.md) targeting 2-3 posts per month across the defined content pillars.

---

### PROBLEM 6 (SEVERITY: MEDIUM) — About Page Is Flat

The About page is a standard bio: summary paragraph, skills list, and awards. It reads like a resume section, not a strategic narrative that establishes why this professional matters in their field.

**Fix:** Restructure as a professional narrative: career arc, engineering philosophy, key inflection points, and a clear thesis about what the person brings to the industry. Make awards and credentials supporting evidence within the narrative rather than a standalone list.

---

### PROBLEM 7 (SEVERITY: HIGH) — No Links to Primary Commercial Domain

Zero references to carlosanayaruiz.com exist anywhere on the portfolio site. The two domains operate in complete isolation, missing the opportunity for mutually reinforcing authority signals.

**Fix:** Add contextual links in:
- Footer: "For consulting services, visit carlosanayaruiz.com"
- Contact page: reference to consulting practice
- About page: mention of consulting work with link

---

### PROBLEM 8 (SEVERITY: LOW) — Hero CTA Is Not Identity-Forward

The hero section CTA is "Read the Blog." While functional, it pushes visitors to an area with only 1 post and doesn't reinforce the core identity positioning of the home page.

**Fix:** Change primary CTA to "View My Work" or "Explore Projects" once project content is built out. Secondary CTA can remain blog-focused. Alternatively, use "See What I Build" to maintain personality.

---

### PROBLEM 9 (SEVERITY: LOW) — Footer Description Is Generic

The footer contains a generic description that doesn't reinforce the domain's positioning or provide a link to the commercial domain.

**Fix:** Rewrite footer description to reinforce technical identity. Add a line with link to carlosanayaruiz.com for consulting/services.

---

### PROBLEM 10 (SEVERITY: LOW) — Dark Mode Not Togglable

Dark mode configuration exists in the codebase but no toggle is exposed to users. This is a UX issue more than an SEO issue, but it affects engagement signals.

**Fix:** Implement a dark mode toggle in the header/nav.

---

### PROBLEM 11 (SEVERITY: LOW) — PWA Not Fully Implemented

A `manifest.json` and service worker are present, but the PWA is not fully functional. Incomplete PWA implementations can trigger Lighthouse warnings.

**Fix:** Either complete the PWA implementation or remove the service worker and manifest to avoid mixed signals.

---

## 3. Metadata Audit

### Title Tags

| Page | ES | EN | Assessment |
|------|----|----|------------|
| Home | "Carlos Anaya Ruiz -- Lider en Desarrollo de Software, Innovacion Tecnologica e IA" | "Carlos Anaya Ruiz -- Software Development Leader, Tech Innovation & AI" | Good length, identity-forward. Could add "Portfolio" for clarity. |
| Template | `%s \| Carlos Anaya Ruiz` | `%s \| Carlos Anaya Ruiz` | Acceptable. Consider adding a domain-role descriptor for inner pages. |

### Keywords in Metadata

**Must remove from portfolio domain:**
- `"consultor tecnologico"` / `"technology consultant"`
- Any service-oriented terms (desarrollo web como servicio, etc.)

**Should add:**
- `"engineering portfolio"` / `"portafolio de ingenieria"`
- `"technical leadership"` / `"liderazgo tecnico"`
- `"software architecture"` / `"arquitectura de software"`
- `"AI projects"` / `"proyectos de IA"`
- `"full-stack development"` / `"desarrollo full-stack"`

### Open Graph

- OG images exist per locale: `og-es.png`, `og-en.png` -- **GOOD**
- OG type, title, description present on all pages -- **GOOD**

### Canonical & Hreflang

- Self-referencing canonicals on all pages -- **GOOD**
- Hreflang annotations for ES and EN -- **GOOD**
- Alternates properly configured -- **GOOD**
- `x-default` points to ES variant -- **CORRECT** (Mexico-based)

---

## 4. Schema / Structured Data Audit

### Present and Correct

| Schema Type | Location | Status |
|-------------|----------|--------|
| Person | Site-wide / Home | Comprehensive: name, jobTitle, worksFor, alumniOf, credentials, awards, sameAs, knowsAbout |
| WebSite | Site-wide | Includes SearchAction -- good for sitelinks search box |
| BlogPosting | Blog post pages | Proper article markup |
| BreadcrumbList | All inner pages | Correct hierarchy |

### Issues in Existing Schema

- **Person > knowsAbout:** Includes generic commercial terms that overlap with service keywords. Should be refined to technical competency areas only.
- **Organization (Manuel Solis):** Standalone Organization schema for employer should be removed. The `worksFor` property in the Person schema is sufficient.

### Missing Schema

| Schema Type | Where Needed | Priority |
|-------------|-------------|----------|
| **CreativeWork / SoftwareApplication** | Project pages (`/projects/[slug]`) | HIGH -- projects are a core differentiator |
| **ProfilePage** | About page | MEDIUM -- helps search engines identify the about page as a profile |
| **ItemList** | Blog listing, Projects listing | LOW -- helps with rich results for list pages |

---

## 5. Content Audit

### Blog

| Post | Topic | Word Count (est.) | Assessment |
|------|-------|-------------------|------------|
| AI Ethics | AI ethics in development | ~800-1200 | Single post. Insufficient for authority. |

**Gap:** Needs 15-20 articles minimum covering the defined content pillars (engineering leadership, Next.js architecture, AI/LLM, cybersecurity, project decisions, career growth).

### Projects

| Project | Type | Assessment |
|---------|------|------------|
| Nora AI | AI assistant | Needs detailed engineering breakdown: architecture decisions, tech stack rationale, challenges, outcomes |
| Manuel Solis Web | Client website | Needs technical case study format: problem, approach, implementation, results |

**Gap:** Needs 5-8 detailed case studies. Each should include: problem statement, technical approach, architecture diagrams (or descriptions), implementation details, results/metrics, lessons learned.

### Awards & Credentials

Awards are present but buried in the About page as a list. They are not leveraged for authority signals across the site.

**Fix:** Reference awards contextually in relevant blog posts and project pages. Add credential badges or certification logos where appropriate. Consider a dedicated achievements section on the CV page.

### Open Source & Community

No references to open source contributions, GitHub activity, or community involvement.

**Fix:** Add GitHub links, open source project references, and any community contributions (talks, workshops, mentoring) to strengthen the technical authority narrative.

---

## 6. Performance & Technical

### Positive Findings

- Images use Next.js `<Image>` component with proper `sizes` attributes -- **GOOD**
- Fonts: Inter + Playfair Display loaded with `display: swap` -- **GOOD**
- Security headers configured: `X-Frame-Options`, `X-Content-Type-Options`, `Referrer-Policy` -- **GOOD**
- Client components limited to interactive elements (Newsletter, Contact form) -- **GOOD**, minimal client JS

### Issues

| Issue | Severity | Detail |
|-------|----------|--------|
| Firebase SDK client-side | MEDIUM | Firebase SDK loaded at module level adds bundle weight. Consider lazy-loading or moving to server-only where possible. |
| No dark mode toggle | LOW | Configuration exists but no user-facing toggle. |
| PWA incomplete | LOW | Service worker and manifest present but not fully functional. |

---

## 7. Internationalization (i18n) Audit

| Aspect | Status |
|--------|--------|
| Locale detection | Correct (middleware-based) |
| Hreflang implementation | Correct (ES, EN, x-default=ES) |
| Content parity | Full parity between ES and EN |
| Data file localization | All data files have locale variants |
| URL structure | `/es/...` and `/en/...` with proper alternates |
| Default locale | ES (correct for Mexico-based professional) |

**Assessment:** i18n implementation is solid. No issues found.

---

## 8. Internal Linking Audit

### Current State

- Navigation links between all main pages -- **BASIC**
- Blog posts link to projects and contact -- **GOOD**
- Project pages link to contact -- **GOOD**
- CV links to contact -- **GOOD**

### Missing

| Link Type | Status | Priority |
|-----------|--------|----------|
| Cross-domain links to carlosanayaruiz.com | ABSENT | **HIGH** |
| Contextual links between related projects | ABSENT | MEDIUM |
| Contextual links between related blog posts | ABSENT | MEDIUM |
| Blog-to-project deep links | MINIMAL | MEDIUM |
| Author bio links on blog posts | ABSENT | LOW |

**Fix:** Implement a related content system that links blog posts to relevant projects and vice versa. Add cross-domain links in footer, contact page, and about page.

---

## 9. Priority Action Items

### Immediate (Before Next Deploy)

1. Remove Services section from home page
2. Remove "consultor tecnologico" / "technology consultant" from all keywords
3. Rewrite contact page metadata to remove commercial language
4. Remove standalone Organization schema for Manuel Solis
5. Add footer link to carlosanayaruiz.com

### Short-Term (Within 30 Days)

6. Add CreativeWork schema to project pages
7. Add ProfilePage schema to about page
8. Restructure About page as professional narrative
9. Add cross-domain reference on contact and about pages
10. Clean up Person schema `knowsAbout` to remove commercial terms

### Medium-Term (Within 90 Days)

11. Publish 5-8 blog posts across content pillars
12. Add 3-5 more detailed project case studies
13. Implement related content linking system
14. Complete or remove PWA implementation
15. Add dark mode toggle

### Long-Term (Ongoing)

16. Maintain 2-3 blog posts per month
17. Add new projects as completed
18. Monitor keyword cannibalization with commercial domain
19. Build contextual internal linking with each new piece of content
20. Track Person entity recognition in Google Knowledge Panel

---

## 10. Summary

carlosanayaweb.com has a solid technical foundation: proper i18n, good schema breadth, correct canonical/hreflang implementation, and clean Next.js architecture. The critical issues are **strategic, not technical** -- the site currently competes with its companion commercial domain through service listings, commercial keywords, and consulting-oriented language. The content gap (1 blog post, 2 projects) severely limits the domain's ability to build the technical authority it needs to serve its portfolio purpose.

The highest-impact changes are: removing the Services section, purging commercial keywords, adding cross-domain links, and aggressively building out blog and project content within the defined content pillars.
