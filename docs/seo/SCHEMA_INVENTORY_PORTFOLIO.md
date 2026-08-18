# Schema Inventory - carlosanayaweb.com

**Date**: 2026-04-14  
**Domain**: carlosanayaweb.com  
**Schema source**: `lib/seo.ts`

---

## Current Schema Map

| Schema Type | Defined In | Injected In | Status | Action |
|---|---|---|---|---|
| Person | `lib/seo.ts` | `[locale]/layout.tsx` | Active, Good | Minor refinements to `knowsAbout` |
| Organization | `lib/seo.ts` | `[locale]/layout.tsx` | Active, Remove | Remove from portfolio domain |
| WebSite | `lib/seo.ts` | `[locale]/layout.tsx` | Active, Good | Validate SearchAction functionality |
| BlogPosting | `lib/seo.ts` | `blog/[slug]/page.tsx` | Active, Fix | Make `image` property dynamic |
| BreadcrumbList | `lib/seo.ts` | Multiple pages | Active, Good | No changes needed |
| CreativeWork | -- | -- | Missing | Add for project detail pages |
| ProfilePage | -- | -- | Missing | Consider for about page |
| ItemList | -- | -- | Missing | Consider for blog/project hub pages |
| FAQPage | -- | -- | Missing | Optional, if Q&A content exists |

---

## Schema Injection Points

### Site-wide (`[locale]/layout.tsx`)

- Person (always present)
- Organization (to be removed)
- WebSite (always present)

### Per-page

| Page | Schemas Injected |
|---|---|
| `/` (home) | Person, WebSite only (inherited from layout) |
| `/about` | BreadcrumbList + layout schemas |
| `/cv` | BreadcrumbList + layout schemas |
| `/blog` | BreadcrumbList + layout schemas |
| `/blog/[slug]` | BreadcrumbList, BlogPosting + layout schemas |
| `/projects` | BreadcrumbList + layout schemas |
| `/projects/[slug]` | BreadcrumbList + layout schemas |

---

## Implementation Guide for Changes

### 1. Remove Organization Schema

**File**: `lib/seo.ts`

Remove the function or object that generates the Organization JSON-LD. Then remove its injection from `[locale]/layout.tsx`.

The `worksFor` property in the Person schema already references the employer with:

```json
{
  "worksFor": {
    "@type": "Organization",
    "name": "Law Offices of Manuel Solis"
  }
}
```

This inline reference is correct and sufficient. The standalone Organization schema is what should be removed.

---

### 2. Add CreativeWork Schema for Projects

**File**: `lib/seo.ts` (add new function)  
**Inject in**: `projects/[slug]/page.tsx`

```json
{
  "@context": "https://schema.org",
  "@type": "CreativeWork",
  "name": "{{ project.title }}",
  "description": "{{ project.description }}",
  "url": "https://carlosanayaweb.com/projects/{{ project.slug }}",
  "image": "https://carlosanayaweb.com{{ project.coverImage }}",
  "author": {
    "@type": "Person",
    "name": "Carlos Anaya Ruiz",
    "url": "https://carlosanayaweb.com"
  },
  "dateCreated": "{{ project.date }}",
  "inLanguage": "{{ locale }}",
  "keywords": "{{ project.tags.join(', ') }}",
  "thumbnailUrl": "https://carlosanayaweb.com{{ project.screenshots[0] }}"
}
```

For projects that are software applications, consider using `SoftwareApplication` as the `@type` instead, and add:

```json
{
  "applicationCategory": "WebApplication",
  "operatingSystem": "Web",
  "programmingLanguage": "{{ project.techStack }}"
}
```

**Implementation steps**:
1. Add a `generateCreativeWorkSchema(project, locale)` function to `lib/seo.ts`
2. Import and call it in `projects/[slug]/page.tsx`
3. Inject the JSON-LD via a `<script type="application/ld+json">` tag

---

### 3. Fix BlogPosting Image (Dynamic)

**File**: `lib/seo.ts`

In the BlogPosting schema generator, replace the hardcoded image URL with the post's actual cover image:

```typescript
// Before (hardcoded)
image: `${SITE_CONFIG.url}/images/blog/default-cover.png`

// After (dynamic)
image: `${SITE_CONFIG.url}${post.coverImage}`
```

Ensure the `post` object passed to the schema generator includes `coverImage` as a field. If a post has no cover image, fall back to the default OG image:

```typescript
image: post.coverImage
  ? `${SITE_CONFIG.url}${post.coverImage}`
  : `${SITE_CONFIG.url}/images/og-default.png`
```

---

### 4. Add ProfilePage Schema for About Page (Optional)

**File**: `lib/seo.ts` (add new function)  
**Inject in**: `about/page.tsx`

```json
{
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  "mainEntity": {
    "@type": "Person",
    "name": "Carlos Anaya Ruiz",
    "url": "https://carlosanayaweb.com"
  },
  "dateCreated": "2025-01-01",
  "dateModified": "{{ lastModifiedDate }}",
  "name": "About Carlos Anaya Ruiz",
  "description": "Professional profile of Carlos Anaya Ruiz, Software Development Manager"
}
```

**Implementation steps**:
1. Add a `generateProfilePageSchema(locale)` function to `lib/seo.ts`
2. Import and call it in the about page component
3. The `mainEntity` can reference the same Person data used in the site-wide Person schema

---

### 5. Validate or Remove SearchAction

**File**: `lib/seo.ts`

Check if `/blog?q={search_term_string}` (or equivalent) actually returns filtered results server-side. Test by visiting:

```
https://carlosanayaweb.com/blog?q=test
```

- If the page filters blog posts based on the `q` parameter: **Keep the SearchAction**.
- If the page ignores the `q` parameter: **Remove the SearchAction** from the WebSite schema.

A non-functional SearchAction can result in Google issuing a structured data warning in Search Console.

---

### 6. Refine knowsAbout in Person Schema

**File**: `lib/seo.ts`

Review the 13 topics in `knowsAbout` and make them more specific where possible:

| Current (Generic) | Suggested (Specific) |
|---|---|
| Cloud Computing | Azure Cloud Infrastructure |
| Cybersecurity | Network Security and Ethical Hacking |
| Web Development | Full Stack Web Development (React, Next.js) |
| AI | Applied AI and Machine Learning (Python) |

Keep domain-specific terms that are already precise (e.g., "CCNA", "PMP").

---

## Validation

After implementing changes, validate all structured data using:

1. **Google Rich Results Test**: https://search.google.com/test/rich-results
2. **Schema.org Validator**: https://validator.schema.org/
3. **Google Search Console**: Monitor the Enhancements section for structured data errors

Test each page type:
- Home page (Person, WebSite)
- About page (Person, WebSite, BreadcrumbList, ProfilePage)
- Blog post (Person, WebSite, BreadcrumbList, BlogPosting)
- Project detail (Person, WebSite, BreadcrumbList, CreativeWork)
