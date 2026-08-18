# External Actions Plan -- carlosanayaweb.com

> Manual actions Carlos must take outside the codebase to build authority  
> Last updated: 2026-04-14  
> Companion doc: `INTERNAL_LINKING_MAP_PORTFOLIO.md`, `MEASUREMENT_PLAN_PORTFOLIO.md`

---

## 1. Profile Alignment

All external profiles should point back to carlosanayaweb.com and present a consistent professional identity. Complete these in priority order.

### 1.1 LinkedIn

**Profile:** [linkedin.com/in/carlos-anaya-ruiz-732abb249/](https://linkedin.com/in/carlos-anaya-ruiz-732abb249/)

| Action | Detail | Priority |
|--------|--------|----------|
| Update "Website" field | Set to `https://carlosanayaweb.com` | Critical |
| Add company website | Add `https://carlosanayaruiz.com` as "Company Website" under current employer or consulting entity | Critical |
| Featured section | Pin links to 2-3 best project pages and 1-2 best blog articles | High |
| About section | Reference both domains with clear role distinction: "Portfolio & blog at carlosanayaweb.com. Consulting services at carlosanayaruiz.com" | High |
| Publications | Add each blog article as a publication with link back to carlosanayaweb.com | Medium (ongoing) |
| Headline | Ensure it matches target bio (see Brand Consistency below) | High |
| Profile photo | Use the same professional photo across all platforms | High |

### 1.2 GitHub

**Accounts:** [CArlos12002](https://github.com/CArlos12002) and [canaya2002](https://github.com/canaya2002)

| Action | Detail | Priority |
|--------|--------|----------|
| Profile README (both accounts) | Add link to carlosanayaweb.com prominently | Critical |
| Profile bio (both accounts) | "Portfolio: carlosanayaweb.com" | Critical |
| Pin repos | Pin repositories related to portfolio projects (Nora AI if public, Manuel Solis Web, carlosanayaweb) | High |
| Repo descriptions | Ensure pinned repos have clear descriptions with relevant keywords | Medium |
| Contribution activity | Maintain regular commits -- visible activity reinforces "real developer" trust signal | Ongoing |
| GitHub Pages | If either account uses GitHub Pages, redirect or link to carlosanayaweb.com | Low |

### 1.3 Google Search Console

| Action | Detail | Priority |
|--------|--------|----------|
| Add carlosanayaweb.com as property | Verify via DNS TXT record (already on Vercel) | Critical |
| Add carlosanayaruiz.com as property | Verify separately | Critical |
| Submit sitemap for carlosanayaweb.com | `https://carlosanayaweb.com/sitemap.xml` | Critical |
| Submit sitemap for carlosanayaruiz.com | `https://carlosanayaruiz.com/sitemap.xml` | Critical |
| Monitor Performance reports | Watch for keyword cannibalization between both domains | Weekly |
| URL Inspection | Inspect every new page after publication to request indexing | Per publish |
| Coverage report | Check for crawl errors, excluded pages, redirect issues | Weekly |

### 1.4 Google Business Profile

| Action | Detail | Priority |
|--------|--------|----------|
| Check if a profile exists | Search "Carlos Anaya Ruiz" on Google Maps | Medium |
| If creating personal brand profile | Link primary website to carlosanayaweb.com | Medium |
| If creating business profile | Link to carlosanayaruiz.com for consulting services | Medium |
| Category | "Software Company" or "Technology Consultant" | Medium |

---

## 2. Backlink Opportunities

Each opportunity is ranked by impact and feasibility. Pursue in order.

### Tier 1: High Impact, High Feasibility

| Source | Action | Expected Link |
|--------|--------|---------------|
| **Tec de Monterrey alumni directory** | Request profile listing or update existing one with website URL | Backlink from .edu domain (very high authority) |
| **LinkedIn profile** | Website field already counts as a nofollow link, but high-authority domain | Profile link to carlosanayaweb.com |
| **GitHub profiles** | Bio and README links | Profile links to carlosanayaweb.com |
| **Stack Overflow** | Create or update profile, add website field | Profile link to carlosanayaweb.com |

### Tier 2: High Impact, Medium Feasibility

| Source | Action | Expected Link |
|--------|--------|---------------|
| **NASA Space Apps Challenge** | Check if the project page allows contributor links; request addition | Backlink from nasa.gov subdomain or spaceapps domain |
| **Dev.to** | Create profile, syndicate articles (see Content Syndication below) | Profile link + article canonical tags |
| **Hashnode** | Create profile, syndicate articles | Profile link + article canonical tags |
| **Medium** | Publish articles with canonical pointing to carlosanayaweb.com | Profile link + in-article links |

### Tier 3: Medium Impact, Variable Feasibility

| Source | Action | Expected Link |
|--------|--------|---------------|
| **IndieHackers** | If launching Nora AI publicly, create a product page | Product page link |
| **Product Hunt** | If launching Nora AI publicly, submit as a product | Product page link |
| **Conference/meetup profiles** | If speaking at events, ensure speaker profile links to website | Event page backlinks |
| **Tech community forums** | Thoughtful participation with profile link | Forum profile links |
| **Crunchbase** | If the consulting entity is registered, create a profile | Company profile link |

### Tier 4: Long-Term / Opportunistic

| Source | Action | Expected Link |
|--------|--------|---------------|
| **Guest posts on established tech blogs** | Pitch articles to blogs in Next.js, AI, or cybersecurity space | Author bio backlink |
| **Podcast appearances** | Pitch to tech podcasts (especially AI/engineering leadership) | Show notes backlink |
| **Technical interviews** | Participate in developer interview series | Interview page backlink |
| **Open source project documentation** | Contribute significantly to a project; contributor page link | Contributor page backlink |

---

## 3. Content Syndication Strategy

The goal is to keep carlosanayaweb.com as the canonical source while amplifying reach through other platforms.

### Publication Workflow

```
Day 0:  Publish original article on carlosanayaweb.com/blog
        -> Submit URL in Google Search Console (URL Inspection -> Request Indexing)
        -> Share on LinkedIn with link to original

Day 3:  Create Twitter/X thread summarizing key points
        -> Final tweet links to full article on carlosanayaweb.com

Day 14: Syndicate to Dev.to
        -> Use Dev.to's canonical_url front matter: canonical_url: https://carlosanayaweb.com/blog/[slug]
        -> This tells Google the original is on carlosanayaweb.com

Day 14: Syndicate to Hashnode (if using)
        -> Use Hashnode's "Add Original Article URL" feature
        -> Points canonical to carlosanayaweb.com

Day 21: Syndicate to Medium (if using)
        -> Import story using Medium's import tool (auto-sets canonical)
        -> Verify canonical tag is correct after import
```

### Syndication Rules

| Rule | Detail |
|------|--------|
| Always publish on carlosanayaweb.com first | Minimum 2-week lead before syndication |
| Always set canonical tag | Every syndicated copy must have `canonical_url` pointing to the original |
| Never modify the canonical after setting it | Changing canonicals confuses Google |
| Customize the intro for each platform | Add a sentence like "Originally published on my blog" with link |
| Do not syndicate every article | Syndicate only high-value, evergreen articles |
| Monitor for scraping | Periodically search article titles in quotes to find unauthorized copies |

### Platform-Specific Notes

**Dev.to:**
- Front matter: `canonical_url: https://carlosanayaweb.com/blog/[slug]`
- Tags: use relevant Dev.to tags (up to 4)
- Cross-link to other carlosanayaweb.com articles within the text

**LinkedIn:**
- Share as a post (not a LinkedIn article) with a link to the original
- Write a compelling 2-3 sentence hook before the link
- Use relevant hashtags (#NextJS, #AI, #SoftwareEngineering)
- Tag relevant people or companies if appropriate

**Twitter/X:**
- Create a thread (5-8 tweets) summarizing the article
- Last tweet: "Full article with code examples: [link]"
- Pin the thread if it performs well

---

## 4. Authority Signals to Build

These are activities that build E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness) signals over time.

### Experience Signals

| Signal | Action | Timeline |
|--------|--------|----------|
| Open source contributions | Contribute to popular repos in Next.js, AI, or security ecosystems. Visible on GitHub profile. | Ongoing |
| Public project launches | Launch Nora AI or other projects publicly (Product Hunt, IndieHackers) | When ready |
| Client work showcases | Document consulting projects on carlosanayaruiz.com with permission | Per project |

### Expertise Signals

| Signal | Action | Timeline |
|--------|--------|----------|
| Technical blog posts | Publish in-depth, original technical content on carlosanayaweb.com | 2+ per month target |
| Conference talks | Apply to speak at local or virtual meetups/conferences | Quarterly |
| Workshop facilitation | Host workshops on Next.js, AI, or security topics | Quarterly |
| Technical certifications | If obtained, add to LinkedIn, CV page, and schema markup | As achieved |

### Authoritativeness Signals

| Signal | Action | Timeline |
|--------|--------|----------|
| Backlinks from authoritative domains | Pursue Tier 1 and Tier 2 backlink opportunities above | Ongoing |
| Mentions in tech media | Pitch stories or contribute quotes to tech journalists | Opportunistic |
| University affiliations | Maintain Tec de Monterrey alumni connection; guest lecture if possible | Annual |
| Awards and recognition | Submit projects to award programs (Awwwards, CSS Design Awards, hackathons) | Per project |

### Trustworthiness Signals

| Signal | Action | Timeline |
|--------|--------|----------|
| Consistent identity across platforms | Same photo, same bio format, same website links | Immediate |
| Complete profiles | Fill out every field on every platform | Immediate |
| Regular activity | Post on LinkedIn weekly, commit on GitHub regularly | Ongoing |
| Accurate claims | Every credential, role, and date on the CV page must be verifiable | Always |

---

## 5. Brand Consistency Rules

### Standard Bio

Use this bio (or minor variations of it) across all platforms:

> **Software Development Manager | Engineering Leadership | AI & Full-Stack | carlosanayaweb.com**

**Acceptable variations:**
- "Software Development Manager specializing in AI, full-stack development, and engineering leadership. Portfolio: carlosanayaweb.com"
- "Engineering leader building with Next.js, TypeScript, Python, and LLMs. Writing at carlosanayaweb.com"

### Prohibited Language on Personal Profiles

The following language belongs **only** on carlosanayaruiz.com (the commercial domain):

- "SEO consultant"
- "Web development agency"
- "Hire me for..."
- "Services starting at..."
- "Agency" or "firm" language
- Pricing or rate information

The personal brand (carlosanayaweb.com) should feel like a **portfolio and thought leadership platform**, not a services storefront.

### Profile Photo

- Use the **same professional photo** across LinkedIn, GitHub, Twitter/X, Dev.to, and any other platform.
- Ensure the photo is high quality and shows face clearly (important for potential Knowledge Panel).

### sameAs Schema Integration

All profile URLs listed in this document should be included in the `sameAs` property of the Person structured data on carlosanayaweb.com. This is implemented in the codebase's schema markup. The list should include:

- `https://linkedin.com/in/carlos-anaya-ruiz-732abb249/`
- `https://github.com/canaya2002`
- `https://github.com/CArlos12002`
- `https://carlosanayaruiz.com`
- Any additional platform profiles created (Dev.to, Stack Overflow, etc.)

---

## 6. Action Priority Matrix

### Immediate (This Week)

- [ ] Update LinkedIn "Website" field to carlosanayaweb.com
- [ ] Update LinkedIn "About" to reference both domains
- [ ] Update both GitHub profile bios with carlosanayaweb.com
- [ ] Update both GitHub profile READMEs with carlosanayaweb.com link
- [ ] Add carlosanayaweb.com to Google Search Console (if not done)
- [ ] Add carlosanayaruiz.com to Google Search Console (if not done)
- [ ] Submit both sitemaps in GSC
- [ ] Verify consistent professional photo across LinkedIn and GitHub

### Short-Term (This Month)

- [ ] Pin best repos on both GitHub accounts
- [ ] Create Dev.to profile with bio and website link
- [ ] Create or update Stack Overflow profile with website link
- [ ] Add LinkedIn Featured section with 2-3 portfolio links
- [ ] Request Tec de Monterrey alumni directory listing
- [ ] Check NASA Space Apps Challenge for contributor link opportunity
- [ ] Update sameAs schema in codebase with all profile URLs

### Medium-Term (1-3 Months)

- [ ] Publish first syndicated article on Dev.to (after original has 2-week lead)
- [ ] Begin weekly LinkedIn posting cadence
- [ ] Research and apply to 1-2 conference speaking opportunities
- [ ] Explore IndieHackers / Product Hunt for Nora AI launch
- [ ] Set up Google Alerts for "Carlos Anaya Ruiz" to monitor mentions

### Ongoing

- [ ] Syndicate each new blog article per the workflow above
- [ ] Maintain regular GitHub contribution activity
- [ ] Share articles and insights on LinkedIn weekly
- [ ] Pursue backlink opportunities as they arise
- [ ] Monitor GSC for both domains weekly
- [ ] Update sameAs schema when new profiles are created
