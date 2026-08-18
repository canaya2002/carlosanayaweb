# Schema Audit - carlosanayaweb.com

**Date**: 2026-04-14  
**Domain**: carlosanayaweb.com  
**Framework**: Next.js 16 (App Router)  
**Schema source**: `lib/seo.ts`

---

## Person Schema

**Injected in**: `[locale]/layout.tsx` (site-wide)

| Property | Value | Status |
|---|---|---|
| name | Carlos Anaya Ruiz | OK |
| jobTitle | Software Development Manager | OK |
| worksFor | Law Offices of Manuel Solis | OK |
| alumniOf | Tec de Monterrey (2 entries: ITC + Cybersecurity) | OK |
| hasCredential | CCNA, TOEFL, PMP Prep, Cybersecurity | OK |
| award | NASA Space Apps, LogiRoute AI | OK |
| sameAs | LinkedIn, 2x GitHub | OK |
| knowsAbout | 13 topics | OK |
| email | Present | OK |
| nationality | Mexico | OK |
| knowsLanguage | Spanish, English | OK |

### Issues

- **knowsAbout** includes some generic terms that could be more specific. For example, "cloud computing" could be narrowed to "Azure cloud infrastructure" or "AWS serverless architecture" to improve disambiguation and relevance.
- **Missing optional properties**: `birthPlace` and `gender` are not included. These are optional but help Google disambiguate between people with similar names. Recommended to add `birthPlace` at minimum.
- **Image URL**: Uses `SITE_CONFIG.url` prefix to build an absolute URL from a relative path. This works correctly but should be verified after any domain or config changes.

---

## Organization Schema

**Injected in**: `[locale]/layout.tsx` (site-wide)

Represents Law Offices of Manuel Solis as a standalone Organization entity.

### Recommendation: REMOVE

This schema describes the employer, not the portfolio site itself. Having a standalone Organization schema on a personal portfolio domain creates semantic noise. Google may misinterpret the portfolio as being an official page of that organization.

The employer relationship is already correctly expressed through `worksFor` inside the Person schema. That is sufficient and semantically accurate.

**Action**: Remove the standalone Organization schema from `lib/seo.ts` and its injection in `[locale]/layout.tsx`. Keep the `worksFor` reference in Person schema unchanged.

---

## WebSite Schema

**Injected in**: `[locale]/layout.tsx` (site-wide)

| Property | Value | Status |
|---|---|---|
| name | Present | OK |
| url | Present | OK |
| description | Present | OK |
| inLanguage | Present | OK |
| author | Present | OK |
| potentialAction | SearchAction (blog search) | Verify |

### Issue

The `SearchAction` defines a URL template pointing to blog search functionality. If the blog does not have a working server-side search endpoint that returns results for the `{search_term_string}` parameter, this SearchAction is misleading to search engines.

**Action**: Either implement server-side blog search or remove the SearchAction from the WebSite schema. A non-functional SearchAction can result in Google testing the URL, receiving a broken page, and lowering trust in the site's structured data.

---

## BlogPosting Schema

**Injected in**: `blog/[slug]/page.tsx` (per blog post)

| Property | Value | Status |
|---|---|---|
| headline | Present | OK |
| description | Present | OK |
| url | Present | OK |
| datePublished | Present | OK |
| dateModified | Present | OK |
| author | Present (Person) | OK |
| publisher | Present (Person) | OK |
| mainEntityOfPage | Present | OK |
| image | Hardcoded to single image | FIX |

### Issue

The `image` property is hardcoded to a single generic blog image rather than using the specific cover image for each post. This reduces the effectiveness of the schema for rich results, as Google expects the image to be relevant to the specific article.

**Action**: Replace the hardcoded image URL with `post.coverImage` (or equivalent dynamic field) so each BlogPosting schema uses the actual cover image of that specific post.

---

## BreadcrumbList Schema

**Injected in**: Multiple pages (about, cv, blog, blog/[slug], projects, projects/[slug])

| Property | Value | Status |
|---|---|---|
| itemListElement | Properly structured | OK |
| position | Sequential numbering | OK |
| name | Descriptive labels | OK |
| item | Absolute URLs | OK |

**Status**: Well-implemented. No changes needed.

---

## Missing Schemas

### CreativeWork / SoftwareApplication (for project pages)

Each project detail page (`projects/[slug]`) should have a CreativeWork or SoftwareApplication schema describing the project. This helps Google understand the portfolio content and can enable rich results for software projects.

Key properties to include:
- `@type`: CreativeWork or SoftwareApplication
- `name`: Project title
- `description`: Project description
- `author`: Person reference
- `url`: Project page URL
- `image`: Project screenshot
- `dateCreated`: Project date
- `programmingLanguage`: Tech stack
- `applicationCategory`: (if SoftwareApplication)

### ProfilePage (for about page)

Google introduced the ProfilePage schema type for personal profile pages. Adding this to the about page would strengthen the entity signal for Carlos Anaya Ruiz.

Key properties:
- `@type`: ProfilePage
- `mainEntity`: Person reference
- `dateCreated`, `dateModified`

### ItemList (for hub pages)

The blog index and projects index pages could benefit from an ItemList schema that enumerates the items displayed. This helps Google understand the relationship between the hub page and its child pages.

### FAQPage (optional)

If the about or CV page contains Q&A-style content, wrapping it in FAQPage schema could enable FAQ rich results in search.

---

## Summary of Recommendations

| Priority | Action | Impact |
|---|---|---|
| 1 | Remove standalone Organization schema | Reduces semantic noise |
| 2 | Add CreativeWork schema for project detail pages | Enables rich results for portfolio work |
| 3 | Fix BlogPosting image to use dynamic `post.coverImage` | Improves article rich results |
| 4 | Consider adding ProfilePage to about page | Strengthens entity signal |
| 5 | Remove SearchAction if blog search is not functional server-side | Prevents broken structured data |
| 6 | Refine knowsAbout with more specific terms | Better entity disambiguation |
| 7 | Keep Person and WebSite schemas as-is | Already well-implemented |
