# Measurement Plan -- carlosanayaweb.com

> How to track SEO performance and know if the strategy is working  
> Last updated: 2026-04-14  
> Companion doc: `INTERNAL_LINKING_MAP_PORTFOLIO.md`, `EXTERNAL_ACTIONS_PORTFOLIO.md`

---

## 1. Key Metrics by Category

### 1.1 Brand & Reputation

These metrics tell you whether Carlos Anaya Ruiz is becoming more discoverable and authoritative in search results.

| Metric | Source | What It Tells You | Target |
|--------|--------|-------------------|--------|
| Impressions for "Carlos Anaya Ruiz" queries | GSC (Performance > Queries) | How often the name appears in search results | Steady growth month-over-month |
| Average position for name + role queries | GSC | Where carlosanayaweb.com ranks for brand searches | Top 3 for all name variations |
| Click-through rate on brand queries | GSC | Whether the SERP listing is compelling enough to click | >40% CTR on exact name queries |
| Knowledge Panel presence | Manual Google search | Whether Google recognizes Carlos as a notable entity | Achieved within 6-12 months |
| Sitelinks in brand SERP | Manual Google search | Whether Google shows sitelinks below the main result | Achieved within 3-6 months |

**Brand queries to track:**
- "Carlos Anaya Ruiz"
- "Carlos Anaya Ruiz software"
- "Carlos Anaya Ruiz developer"
- "Carlos Anaya Ruiz Amazon"
- "Carlos Anaya Ruiz portfolio"
- "Carlos Anaya Ruiz blog"
- "carlosanayaweb"

### 1.2 Technical Authority

These metrics measure whether the blog and technical content are building topical authority.

| Metric | Source | What It Tells You | Target |
|--------|--------|-------------------|--------|
| Organic traffic to blog articles | GSC + Vercel Analytics | Whether articles are attracting search traffic | Growing month-over-month |
| Impressions for technical keywords | GSC (filter by /blog/ pages) | How visible the blog is for target topics | 10+ keywords with >100 monthly impressions |
| Blog post rankings by cluster | GSC (manual grouping) | Which topical clusters are strongest | At least 1 cluster with 3+ page-1 rankings |
| Time on page for articles | Vercel Analytics | Whether readers find the content valuable | >3 minutes average for long-form articles |
| Scroll depth on articles | Vercel Analytics (if configured) | How much of each article is actually read | >60% average scroll depth |

**Technical keywords to track (grouped by cluster):**

AI / LLM cluster:
- "building AI assistants"
- "LLM prompt engineering"
- "conversational AI development"
- "Nora AI"

Web Modernization cluster:
- "Next.js portfolio"
- "Next.js performance optimization"
- "TypeScript web development"
- "Vercel deployment"

Security cluster:
- "web application security"
- "cybersecurity development"
- "secure coding practices"

Leadership cluster:
- "software development manager"
- "engineering leadership"
- "tech team management"

### 1.3 Portfolio Engagement

These metrics indicate whether the portfolio is serving its purpose: showcasing work and generating professional opportunities.

| Metric | Source | What It Tells You | Target |
|--------|--------|-------------------|--------|
| Project page views | Vercel Analytics | Interest in specific projects | Each project page >50 monthly views |
| Project page scroll depth | Vercel Analytics | Depth of engagement with project details | >50% average scroll depth |
| CV page views | Vercel Analytics | Recruiter / hiring manager interest | >100 monthly views |
| CV page traffic sources | Vercel Analytics + GSC | Where CV visitors come from (search vs. referral vs. direct) | Growing organic share |
| Contact form submissions | Firebase Analytics (event tracking) | Conversion rate of portfolio visitors | >5 qualified inquiries per month at maturity |
| Contact page conversion rate | Vercel Analytics (pageviews) vs Firebase (submissions) | How effectively the contact page converts | >10% of contact page visitors submit |

### 1.4 Cross-Domain Health

These metrics ensure carlosanayaweb.com and carlosanayaruiz.com are complementing each other rather than competing.

| Metric | Source | What It Tells You | Target |
|--------|--------|-------------------|--------|
| Referring traffic from carlosanayaruiz.com | Vercel Analytics (referrer filter) | Whether cross-domain linking is working | Measurable referral traffic |
| Referring traffic from carlosanayaweb.com to carlosanayaruiz.com | GSC / Analytics on commercial domain | Whether portfolio is sending traffic to commercial | Measurable referral traffic |
| Shared keywords where both domains rank | GSC data export (both properties) | Cannibalization risk | Zero overlap on commercial-intent keywords |
| Relative position changes after content publishes | GSC (compare date ranges) | Whether new content causes ranking shifts on either domain | No negative position changes on the other domain |

**Cannibalization check process:**
1. Export GSC query data for both domains (same date range)
2. Find queries that appear in both exports
3. For each shared query, check if both domains are ranking
4. If both rank: determine which domain should own the query
5. Action: adjust content, add canonical, or differentiate title/meta

### 1.5 Indexation & Technical Health

These metrics ensure Google can find and render all pages correctly.

| Metric | Source | What It Tells You | Target |
|--------|--------|-------------------|--------|
| Pages indexed vs. submitted | GSC (Pages > Indexing) | Whether all important pages are in the index | 100% of submitted pages indexed |
| Crawl frequency | GSC (Settings > Crawl stats) | How often Google visits the site | Increasing after new content publishes |
| Core Web Vitals (LCP, INP, CLS) | GSC (Experience > CWV) + PageSpeed Insights | Whether the site meets performance thresholds | All metrics green (Good) |
| Mobile usability issues | GSC (Experience > Mobile Usability) | Whether any pages have mobile rendering problems | Zero issues |
| Structured data errors | GSC (Enhancements) | Whether schema markup has errors | Zero errors, all items valid |
| Sitemap coverage | GSC (Sitemaps) | Whether the sitemap is complete and error-free | All URLs in sitemap indexed |

---

## 2. Tools

### Already Integrated

| Tool | Purpose | Access |
|------|---------|--------|
| **Vercel Analytics** | Page views, traffic sources, top pages, visitor geography | Vercel Dashboard > Analytics |
| **Vercel Speed Insights** | Real-user Core Web Vitals data (LCP, INP, CLS) | Vercel Dashboard > Speed Insights |
| **Firebase Analytics** | Event tracking (form submissions, button clicks, custom events) | Firebase Console > Analytics |

### Needs Setup (Free)

| Tool | Purpose | Setup Action |
|------|---------|-------------|
| **Google Search Console** | Search performance, indexation, crawl health, structured data validation | Add property, verify domain, submit sitemap |
| **Google PageSpeed Insights** | On-demand performance testing (lab data) | No setup; use [pagespeed.web.dev](https://pagespeed.web.dev) |
| **Google Alerts** | Monitor mentions of "Carlos Anaya Ruiz" across the web | Set up at [google.com/alerts](https://www.google.com/alerts) |

### Optional (Free Tier Available)

| Tool | Purpose | When to Add |
|------|---------|-------------|
| **Bing Webmaster Tools** | Search performance on Bing | After GSC is stable |
| **Ahrefs Webmaster Tools** | Backlink monitoring (free tier) | After 3 months of link building |
| **Screaming Frog (free up to 500 URLs)** | Technical SEO crawl audit | Quarterly audits |

---

## 3. Dashboards to Set Up

### Dashboard 1: GSC Performance -- carlosanayaweb.com

**Location:** Google Search Console > Performance

**Views to save:**
- **Brand queries:** Filter queries containing "carlos anaya" -- track impressions, clicks, CTR, position
- **Blog traffic:** Filter pages containing "/blog/" -- track total clicks and impressions
- **Project traffic:** Filter pages containing "/projects/" -- track total clicks and impressions
- **CV traffic:** Filter page = "/cv" -- track clicks and sources
- **Date comparison:** Always compare to previous period (28 days vs. previous 28 days)

### Dashboard 2: GSC Performance -- Brand Queries

**Location:** Google Search Console > Performance > Queries filter

**Queries to monitor individually:**
- "Carlos Anaya Ruiz" (exact)
- "Carlos Anaya" (partial)
- "carlosanayaweb" (navigational)
- "Carlos Anaya developer" / "Carlos Anaya software" (qualified)

**Key metrics:** Position trend (should approach 1.0), CTR trend (should increase as SERP features appear)

### Dashboard 3: Vercel Analytics -- Section Performance

**Location:** Vercel Dashboard > Analytics > Top Pages

**Group by URL path prefix:**
- `/blog/*` -- total views, top articles, trend
- `/projects/*` -- total views, top projects, trend
- `/cv` -- views, trend (recruiter signal)
- `/about` -- views, trend
- `/contact` -- views, trend (conversion funnel entry)
- `/` -- home page views (brand traffic)

### Dashboard 4: Monthly Cannibalization Check

**Process (manual, spreadsheet-based):**

1. Export GSC data for carlosanayaweb.com (Queries, 28 days)
2. Export GSC data for carlosanayaruiz.com (Queries, 28 days)
3. Combine in spreadsheet, match on query column
4. Flag any query where both domains appear
5. For each flagged query:
   - Which domain has higher position? (That domain should own it)
   - Is the query commercial-intent? (Should be carlosanayaruiz.com)
   - Is the query informational? (Should be carlosanayaweb.com)
   - Is the query brand/navigational? (Should be carlosanayaweb.com)
6. Document action items for any misaligned queries

---

## 4. Review Cadence

### Weekly Review (15 minutes)

| Check | Tool | Action If Issue Found |
|-------|------|-----------------------|
| New pages indexed? | GSC > URL Inspection | Request indexing for any missing pages |
| Crawl errors? | GSC > Pages > Not Indexed | Fix errors (404s, redirects, server errors) |
| CTR on brand queries | GSC > Performance > Brand filter | Adjust meta titles/descriptions if CTR drops |
| Structured data errors | GSC > Enhancements | Fix schema markup errors in codebase |
| Traffic anomalies | Vercel Analytics | Investigate any sudden drops or spikes |

### Monthly Review (1 hour)

| Check | Tool | Action If Issue Found |
|-------|------|-----------------------|
| Full performance review | GSC + Vercel Analytics | Compare to previous month; identify trends |
| Content gap analysis | GSC queries with high impressions, low clicks | Write new content targeting gaps |
| Cannibalization check | GSC exports for both domains | Adjust content ownership (see Dashboard 4) |
| Backlink progress | Ahrefs free / manual check | Pursue new link opportunities |
| Blog article performance | GSC filtered by /blog/ | Update underperforming articles; amplify winners |
| Core Web Vitals | GSC > Experience OR PageSpeed Insights | Address any regressions in codebase |
| Schema validation | Google Rich Results Test | Test any pages with updated schema |

### Quarterly Review (2 hours)

| Check | Tool | Action If Issue Found |
|-------|------|-----------------------|
| Authority growth assessment | GSC (overall impressions and position trends) | Adjust content strategy if growth is flat |
| Link profile review | Ahrefs free / GSC links report | Identify new backlink opportunities |
| Strategy adjustment | All dashboards | Update targets, add new keyword clusters |
| Competitor check | Manual Google searches for target keywords | Identify competitors ranking above us |
| Technical audit | Screaming Frog or manual crawl | Fix any technical issues discovered |
| Schema markup completeness | Rich Results Test on all page types | Add schema for new content types |
| Cross-domain strategy review | Both GSC properties | Ensure domains are complementing, not competing |

---

## 5. Success Criteria -- 6-Month Targets

### Brand & Reputation

| Target | Metric | How to Verify |
|--------|--------|---------------|
| Top 3 for "Carlos Anaya Ruiz" | Average position in GSC | GSC > Performance > filter "carlos anaya ruiz" |
| Top 3 for all role variations | Average position for "Carlos Anaya Ruiz developer", "Carlos Anaya Ruiz software manager", etc. | GSC > Performance > filter each variation |
| Sitelinks appearing | Visual check | Google search for "Carlos Anaya Ruiz" |
| Knowledge Panel progress | Visual check | Google search for "Carlos Anaya Ruiz" (may take >6 months) |

### Blog & Content

| Target | Metric | How to Verify |
|--------|--------|---------------|
| 10+ articles published | Page count | Count /blog/ pages in sitemap |
| 3+ articles ranking on page 1 | Position <10 for target keywords | GSC > Performance > filter /blog/, sort by position |
| Growing organic traffic to blog | Monthly clicks to /blog/ pages | GSC > Performance > filter /blog/, compare months |
| Average time on page >3 minutes | Time metric | Vercel Analytics (if available) or Firebase |

### Portfolio & Projects

| Target | Metric | How to Verify |
|--------|--------|---------------|
| All project pages indexed | Index status | GSC > URL Inspection for each project page |
| Project pages appearing for project-name queries | Position data | GSC > Performance > filter project names |
| Each project page >50 monthly views | Page views | Vercel Analytics > Top Pages |

### Technical Health

| Target | Metric | How to Verify |
|--------|--------|---------------|
| Core Web Vitals all green | LCP <2.5s, INP <200ms, CLS <0.1 | GSC > Experience > Core Web Vitals |
| Mobile-friendly (zero issues) | Mobile usability report | GSC > Experience > Mobile Usability |
| No indexation issues | All submitted pages indexed | GSC > Pages > Indexed vs. Not Indexed |
| Zero structured data errors | Enhancement reports | GSC > Enhancements |
| Sitemap complete and valid | Sitemap status | GSC > Sitemaps |

### Cross-Domain

| Target | Metric | How to Verify |
|--------|--------|---------------|
| Zero cannibalization for commercial keywords | Cannibalization check | Monthly export comparison (see Dashboard 4) |
| Measurable referral traffic between domains | Referrer data | Vercel Analytics referrer filter |
| Clear query ownership | Each keyword owned by one domain | GSC comparison |

### Engagement & Conversion

| Target | Metric | How to Verify |
|--------|--------|---------------|
| CV page >100 monthly views | Page views | Vercel Analytics |
| Contact form receiving qualified inquiries | Form submissions | Firebase Analytics events |
| Contact page conversion rate >10% | Submissions / page views | Firebase vs. Vercel Analytics |

---

## 6. Pages to Grow First (Priority Order)

Focus SEO effort on these pages in this order. Each tier should be performing before heavy investment in the next.

### Priority 1: Blog Articles

**Why first:** Biggest authority-building opportunity. Each article targets new keywords, builds topical authority, attracts backlinks, and creates content for syndication. Blog articles are the engine that drives organic growth for the entire site.

**Actions:**
- Publish 2+ articles per month
- Target one specific keyword cluster per article
- Build internal links to and from project pages
- Syndicate to Dev.to and LinkedIn per the external actions plan
- Monitor individual article performance in GSC weekly

### Priority 2: Project Detail Pages

**Why second:** Proof of expertise. Project pages demonstrate real work and rank for project-specific queries. They also serve as landing pages when other developers search for similar solutions.

**Actions:**
- Ensure each project page has 500+ words of unique content
- Add technical details, screenshots, and architecture decisions
- Link to related blog articles (cluster linking)
- Optimize meta titles for "[Project Name] - Carlos Anaya Ruiz"

### Priority 3: About Page

**Why third:** Reputation queries. When someone searches "Carlos Anaya Ruiz", the About page is often the first result they want to see. It directly supports E-E-A-T.

**Actions:**
- Ensure comprehensive, well-structured narrative
- Include all key career highlights and education
- Link to projects, CV, and blog as evidence
- Keep structured data (Person schema) accurate and complete

### Priority 4: CV Page

**Why fourth:** Recruiter traffic. The CV page captures high-intent visitors (recruiters, hiring managers) and converts them to contact form submissions.

**Actions:**
- Optimize for "[Name] resume" and "[Name] CV" queries
- Ensure the page is indexable and loads fast
- Link experience entries to relevant project pages
- Include clear CTA to Contact page

### Priority 5: Home Page

**Why last:** The home page already benefits from direct traffic, brand queries, and being the root domain. It naturally accumulates authority. Focus on making it a strong hub that distributes equity to other pages rather than optimizing it for specific keywords.

**Actions:**
- Feature latest blog posts and top projects (distribute equity)
- Ensure clean, fast loading
- Strong internal linking to all key sections
- Keep meta title as brand-focused: "Carlos Anaya Ruiz - Software Development Manager & Engineer"

---

## 7. Reporting Template

Use this template for the monthly review. Copy into a document or spreadsheet and fill in each month.

```
MONTHLY SEO REPORT -- carlosanayaweb.com
Period: [Month Year]
Prepared: [Date]

BRAND METRICS
- Impressions for "Carlos Anaya Ruiz": [number] ([+/-]% vs. last month)
- Average position for brand queries: [number]
- Brand CTR: [number]%
- Knowledge Panel: [Yes/No/Partial]
- Sitelinks: [Yes/No]

TRAFFIC
- Total organic clicks: [number] ([+/-]% vs. last month)
- Blog organic clicks: [number]
- Project page organic clicks: [number]
- CV page views: [number]
- Contact page views: [number]

CONTENT
- Articles published this month: [number]
- Total articles live: [number]
- Articles on page 1: [list]
- New keywords ranking: [list]

TECHNICAL HEALTH
- Pages indexed: [number] / [number] submitted
- Core Web Vitals: LCP [number]s, INP [number]ms, CLS [number]
- Structured data errors: [number]
- Mobile usability issues: [number]

CROSS-DOMAIN
- Cannibalized keywords found: [number]
- Actions taken: [list]
- Referral traffic between domains: [number] sessions

ACTIONS FOR NEXT MONTH
- [ ] Action 1
- [ ] Action 2
- [ ] Action 3

NOTES
[Any observations, anomalies, or strategic changes]
```
