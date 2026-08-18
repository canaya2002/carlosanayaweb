# Cross-Domain Strategy: Portfolio + Commercial

**Portfolio Domain:** carlosanayaweb.com
**Commercial Domain:** carlosanayaruiz.com
**Last Updated:** 2026-04-14

---

## 1. Domain Role Definition

Each domain has a distinct purpose. Overlap between them creates cannibalization. Clarity between them creates mutual reinforcement.

### Role Matrix

| Aspect | carlosanayaweb.com (Portfolio) | carlosanayaruiz.com (Commercial) |
|--------|-------------------------------|----------------------------------|
| **Primary intent** | Informational, navigational, reputation | Transactional, commercial |
| **Core pages** | Portfolio, blog, projects, CV, about | Services, pricing, case studies for clients, contact for leads |
| **Target audience** | Peers, recruiters, technical community, curious professionals | Potential clients, businesses needing SEO/web dev |
| **Keywords** | Name + role, technical topics, project names | Service keywords, "consultor SEO", "desarrollo web Mexico" |
| **CTAs** | "Read more", "View projects", "See CV", "Explore" | "Get a quote", "Schedule consultation", "Hire us", "Start your project" |
| **Schema focus** | Person, BlogPosting, CreativeWork, ProfilePage | LocalBusiness/ProfessionalService, Service, FAQ, Review |
| **Trust signals** | Awards, certs, experience timeline, open source, technical depth | Client testimonials, ROI metrics, client case studies, before/after |
| **Tone** | Engineering depth, thought leadership, analytical | Professional consulting, results-focused, business outcomes |
| **Content style** | Technical articles, architecture deep dives, project breakdowns | Strategic guides, ROI analyses, service explanations |
| **Conversion goal** | Reputation building, professional connection | Lead generation, client acquisition |
| **Contact purpose** | Professional networking, collaboration, recruiter outreach | Business inquiry, project scoping, consultation booking |

---

## 2. Cross-Domain Linking Strategy

### From Portfolio to Commercial

Links from carlosanayaweb.com to carlosanayaruiz.com should be natural, contextual, and clearly framed as a different offering.

#### Footer (All Pages)

```
For SEO consulting and web development services, visit carlosanayaruiz.com
```

- Appears in the site-wide footer
- Uses descriptive anchor text with the commercial domain's primary keywords
- Framed as a helpful pointer, not a sales pitch

#### Contact Page

Add a visible callout section above or below the contact form:

```
Looking for SEO consulting or web development services?
Visit my consulting practice at carlosanayaruiz.com for service details,
pricing, and to schedule a consultation.
```

- Clearly differentiates the portfolio contact form (professional inquiries) from the commercial contact (business leads)
- Helps users who land on the wrong domain find what they need

#### About Page

Within the professional narrative, include a natural reference:

```
In addition to my engineering work, I run a consulting practice focused on
SEO strategy and web development for businesses. Learn more at carlosanayaruiz.com.
```

- Positioned within the career narrative, not as a standalone sales block
- Provides context for why two domains exist

#### Blog Posts (Contextual, When Relevant)

When a blog post covers a topic that intersects with the commercial offering (e.g., SEO best practices, web performance optimization), include a contextual link:

```
For a deeper look at how I apply these principles for clients,
see my consulting approach at carlosanayaruiz.com.
```

- Only when genuinely relevant to the post content
- Not on every post -- avoid making the blog feel like a sales funnel

### From Commercial to Portfolio

Links from carlosanayaruiz.com to carlosanayaweb.com reinforce the "person behind the practice" trust signal.

#### About / Team Page

```
Learn more about Carlos's technical background, projects, and engineering
blog at carlosanayaweb.com.
```

- Links to the portfolio home or about page
- Establishes the consulting practice is backed by a real, credentialed professional

#### Blog / Resources (When Relevant)

When the commercial blog references a technical concept that Carlos has covered in depth on the portfolio blog:

```
For a technical deep dive on this topic, see my engineering blog post:
[Article Title] on carlosanayaweb.com.
```

- Provides value to the reader
- Signals to search engines that the portfolio domain has authoritative technical content

#### Service Pages (Selective)

On relevant service pages, reference portfolio case studies:

```
See the full technical breakdown of this project on my engineering portfolio.
```

- Only for projects that serve as both client case studies (commercial) and engineering case studies (portfolio)
- The commercial version focuses on business outcomes; the portfolio version focuses on technical decisions

---

## 3. Anti-Cannibalization Rules

These rules prevent the two domains from competing for the same queries. Violations of these rules should be treated as bugs.

### Rule 1: No "Services" Section on Portfolio Domain

**What:** Never use "servicios" / "services" as a section title, nav item, or heading on carlosanayaweb.com.

**Why:** "Services" signals commercial intent. Search engines will attempt to rank the page for service queries, directly competing with the commercial domain.

**Instead:** Use "Areas of Expertise", "Technical Focus", or "What I Build" -- these communicate competence without commercial framing.

---

### Rule 2: No "Consultant" in Portfolio Metadata

**What:** Never use "consultor" / "consultant" / "consultoria" / "consulting" in any title tag, meta description, keyword list, or schema property on carlosanayaweb.com.

**Why:** These terms trigger commercial intent classification. They are the commercial domain's primary keywords.

**Instead:** Use "engineering leader", "software development manager", "technical architect" -- role descriptors, not commercial identifiers.

---

### Rule 3: Portfolio Contact Is for Connection, Not Lead Generation

**What:** The portfolio contact form should collect name, email, and message only. No fields for budget, timeline, project scope, or company size.

**Why:** Lead-qualifying form fields signal commercial intent. They also confuse the purpose of the portfolio domain.

**Instead:** Keep the form simple. Add a clear redirect: "For project inquiries and consulting, visit carlosanayaruiz.com."

---

### Rule 4: Blog Content Differentiation

**What:** Blog content on each domain serves a different purpose and must not overlap in topic or framing.

| Topic Angle | Portfolio Blog | Commercial Blog |
|-------------|---------------|-----------------|
| SEO | "How I implemented structured data in Next.js" (technical) | "How structured data increases your organic traffic by 30%" (ROI) |
| Web performance | "Optimizing Core Web Vitals: a technical deep dive" (how-to) | "Why site speed matters for your business revenue" (business case) |
| AI | "Building an LLM orchestration layer" (architecture) | "How AI can automate your content strategy" (client benefit) |
| Team management | "How I structure engineering sprints" (practice) | N/A (not relevant to commercial domain) |

**Why:** Same-topic content across domains creates cannibalization. Different framing ensures each domain ranks for its intended audience.

---

### Rule 5: Project Pages vs. Client Case Studies

**What:** Projects on the portfolio domain focus on engineering decisions. Case studies on the commercial domain focus on client results.

| Element | Portfolio Project Page | Commercial Case Study |
|---------|----------------------|----------------------|
| Headline | "Nora AI: Architecture of an Intelligent Assistant" | "How We Built an AI Assistant That Reduced Support Costs 40%" |
| Focus | Tech stack, architecture decisions, challenges solved | Business problem, solution delivered, ROI achieved |
| Metrics | Performance benchmarks, code quality, load times | Revenue impact, time saved, client satisfaction |
| CTA | "View more projects" / "Read related blog post" | "Get similar results for your business" / "Schedule a consultation" |

**Why:** Same projects can appear on both domains, but the framing must be completely different to avoid competing for the same queries.

---

### Rule 6: Schema Separation

**What:** Each domain uses schema types appropriate to its purpose.

| Schema Type | Portfolio | Commercial |
|-------------|-----------|------------|
| Person | YES (primary) | YES (about page only) |
| BlogPosting | YES | YES |
| CreativeWork / SoftwareApplication | YES (project pages) | NO |
| ProfilePage | YES (about page) | NO |
| LocalBusiness / ProfessionalService | NO | YES (primary) |
| Service | NO | YES |
| FAQ | NO (unless in blog context) | YES (service pages) |
| Review / AggregateRating | NO | YES (client reviews) |

**Why:** Schema types send strong intent signals. Using Service schema on the portfolio domain tells search engines it's a commercial page.

---

## 4. Immediate Changes Required

These changes must be implemented on carlosanayaweb.com before any new content is published.

### Change 1: Remove Services Section from Home Page

**Current state:** Home page contains a "Services" section listing 8 commercial service offerings.

**Required action:** Remove the entire Services section. Replace with an "Areas of Expertise" section that lists technical focus areas in an informational framing:

| Current (REMOVE) | Replacement |
|-------------------|-------------|
| App Development | Application Architecture |
| Database Development | Data Systems & Architecture |
| Web Design | User Experience Engineering |
| Web Development | Full-Stack Web Engineering |
| iOS Development | Mobile Platform Development |
| Information Management | Information Architecture |
| Team Integration | Engineering Team Leadership |
| Leadership Development | Technical Mentorship |

The replacement items describe competencies, not services for sale.

---

### Change 2: Remove Commercial Keywords from constants.ts

**Current state:** Keywords include `"consultor tecnologico"` / `"technology consultant"`.

**Required action:** Remove these keywords. Replace with:

```typescript
// ES
"portafolio de ingenieria", "liderazgo tecnico", "arquitectura de software",
"proyectos de IA", "desarrollo full-stack"

// EN
"engineering portfolio", "technical leadership", "software architecture",
"AI projects", "full-stack development"
```

---

### Change 3: Add Footer Link to Commercial Domain

**Current state:** No reference to carlosanayaruiz.com anywhere on the site.

**Required action:** Add to the site footer:

```
ES: "Para servicios de consultoria SEO y desarrollo web, visita carlosanayaruiz.com"
EN: "For SEO consulting and web development services, visit carlosanayaruiz.com"
```

With a `rel="noopener"` link (NOT `rel="nofollow"` -- we want to pass authority to the commercial domain).

---

### Change 4: Rewrite Contact Page Metadata

**Current state:** Contact page metadata includes "consulting" and "nuevas oportunidades" language.

**Required action:** Rewrite to:

```
ES title: "Contacto | Carlos Anaya Ruiz"
ES description: "Conecta con Carlos Anaya Ruiz para consultas profesionales,
colaboracion tecnica y oportunidades de networking."

EN title: "Contact | Carlos Anaya Ruiz"
EN description: "Connect with Carlos Anaya Ruiz for professional inquiries,
technical collaboration, and networking opportunities."
```

Add visible text on the contact page redirecting service inquiries to the commercial domain.

---

### Change 5: Remove Organization Schema for Employer

**Current state:** A standalone Organization schema for "Law Offices of Manuel Solis" is emitted.

**Required action:** Remove the standalone Organization schema. The employer relationship is already represented in the Person schema via the `worksFor` property, which is sufficient.

---

### Change 6: Add Cross-Domain Reference on About Page

**Current state:** About page makes no mention of consulting practice or commercial domain.

**Required action:** Add a paragraph within the professional narrative:

```
ES: "Ademas de mi trabajo de ingenieria, dirijo una practica de consultoria
enfocada en estrategia SEO y desarrollo web. Conoce mas en carlosanayaruiz.com."

EN: "In addition to my engineering work, I run a consulting practice focused
on SEO strategy and web development. Learn more at carlosanayaruiz.com."
```

---

## 5. Long-Term Cross-Domain Synergy

### How the Domains Reinforce Each Other

```
                    TRUST FLOW
    
    carlosanayaweb.com          carlosanayaruiz.com
    (Portfolio)                 (Commercial)
    
    Technical depth    ------>  "This consultant knows
    Blog authority              what they're talking about"
    Project proof    
    Person entity               Client testimonials
    Awards & creds              ROI proof
                                Service pages
    "Who is this     <------   "About the founder"
     person?"                   links back to portfolio
```

**The portfolio domain builds trust. The commercial domain converts it.**

A prospect discovers the commercial domain through a service query. They see the "About Carlos" link, visit the portfolio, read two deep technical articles, see the project case studies, and return to the commercial domain ready to engage. This is the intended user journey.

### Shared Entity Building

Both domains should reinforce the same Person entity in Google's Knowledge Graph:

- Both domains link to the same LinkedIn, GitHub, and social profiles via `sameAs`
- Both domains use consistent `name`, `jobTitle`, and `image` in Person schema
- The portfolio domain is the Person entity's primary home (more comprehensive Person schema)
- The commercial domain references the person as the founder/principal

### Content Coordination

When publishing content, coordinate between domains:

| Portfolio publishes... | Commercial can publish... |
|----------------------|--------------------------|
| "How I built X with Next.js" (technical) | "How we deliver X for clients" (commercial) |
| "AI orchestration architecture" (deep dive) | "How AI automation saves businesses time" (benefit) |
| "Security audit checklist" (educational) | "Our security audit service" (service page) |

The portfolio content provides the technical proof. The commercial content translates it into business value. They never compete for the same query because the framing is fundamentally different.

---

## 6. Monitoring & Maintenance

### Monthly Cross-Domain Health Check

1. **Google Search Console:** Compare query overlap between domains. If both domains appear for the same query, investigate and adjust.
2. **Keyword tracking:** Monitor the 10 commercial keywords on both domains. Portfolio domain should not rank for any of them.
3. **Internal link audit:** Ensure cross-domain links remain intact and properly attributed.
4. **Schema validation:** Run structured data tests on both domains quarterly to ensure schema separation is maintained.
5. **Content review:** Before publishing any new content on either domain, verify it doesn't overlap in topic AND framing with existing content on the other domain.

### Red Flags to Watch For

- Portfolio domain ranking for "consultor SEO" or any service query
- Commercial domain outranking portfolio for "Carlos Anaya Ruiz" name queries
- Both domains appearing in the same SERP for the same query
- Declining impressions on the commercial domain's service pages (could indicate cannibalization)
- Person entity confusion in Knowledge Panel (wrong domain shown as primary)

---

## 7. Summary

Two domains, two purposes, zero overlap. carlosanayaweb.com builds the reputation. carlosanayaruiz.com converts the trust. Cross-domain links are bridges, not leaks -- they help users find what they need and help search engines understand the relationship. The anti-cannibalization rules are non-negotiable: every violation costs both domains ranking power. Enforce them on every commit, every content publish, and every metadata change.
