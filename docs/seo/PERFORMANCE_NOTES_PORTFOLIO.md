# Performance Notes - carlosanayaweb.com

**Date**: 2026-04-14  
**Domain**: carlosanayaweb.com  
**Framework**: Next.js 16 (App Router)  
**Deployment**: Vercel

---

## What Is Working Well

### Server-Side Rendering and Static Generation

Next.js 16 with App Router defaults to server components. The majority of the site is server-rendered or statically generated, resulting in minimal client-side JavaScript. Only 2 components are client-side (`Newsletter`, `ContactClient`), which is excellent for performance.

### Image Optimization

- All images use `next/image` with proper `sizes` attributes for responsive loading.
- Above-fold images (hero profile photo) use `priority={true}` for preloading.
- AVIF and WebP formats are enabled in `next.config.ts` via `formats: ['image/avif', 'image/webp']`.
- Images use `fill` mode with aspect-ratio containers to prevent layout shift.

### Font Loading

- Inter (variable weight) and Playfair Display are loaded with `display: 'swap'`.
- This prevents FOIT (Flash of Invisible Text). Users see fallback fonts immediately, then swap to the custom fonts once loaded.
- No external font requests to Google Fonts -- fonts are self-hosted via Next.js font optimization.

### Security Headers

Security headers are configured in `next.config.ts`, including CSP, X-Frame-Options, and other standard headers. This does not directly impact performance but is a positive signal for overall site quality.

### CSS

- Tailwind CSS 4 with PostCSS produces minimal CSS output.
- Only the utility classes actually used in the project are included in the production build.
- No large external CSS libraries.

### Deployment

- Vercel provides edge-optimized delivery with automatic CDN distribution.
- Static pages are served from the edge with zero server compute latency.
- ISR (Incremental Static Regeneration) can be leveraged for blog posts if needed.

---

## Concerns and Issues

### 1. Firebase SDK Import Chain

**Severity**: Medium  
**File**: `lib/firebase.ts`

The Firebase SDK is loaded at module level in `lib/firebase.ts`. While it is only consumed by client components (`Newsletter`, `ContactClient`), the import chain could pull Firebase into server bundles if any server component accidentally imports from a module that re-exports or touches `firebase-services`.

**Risk**: Firebase SDK is substantial in size. If it leaks into the server bundle, it increases SSR processing time and potentially the client bundle if tree-shaking fails to remove it.

**Action**: Audit the import graph to confirm Firebase is only imported from client components. Consider adding an ESLint rule or comment guard to prevent server components from importing `lib/firebase.ts`. Alternatively, wrap Firebase initialization in a client-only module pattern:

```typescript
// lib/firebase-client.ts
'use client'
// Firebase initialization here
```

### 2. No Dynamic Imports for Below-Fold Interactive Components

**Severity**: Low-Medium  
**Files**: `Newsletter`, `ContactClient` components

Both the Newsletter signup form and Contact form are interactive client components that appear below the fold. They are currently imported statically, meaning their JavaScript is included in the initial page bundle even though users may never scroll to them.

**Action**: Use `next/dynamic` to lazy-load these components:

```typescript
import dynamic from 'next/dynamic'

const Newsletter = dynamic(() => import('@/components/Newsletter'), {
  loading: () => <div className="h-32 animate-pulse bg-gray-100 rounded" />,
  ssr: false
})

const ContactClient = dynamic(() => import('@/components/ContactClient'), {
  loading: () => <div className="h-64 animate-pulse bg-gray-100 rounded" />,
  ssr: false
})
```

This defers loading their JavaScript (and Firebase SDK) until the components are about to enter the viewport.

### 3. Font Weight Subsets

**Severity**: Low  
**File**: Font configuration in layout

Inter loads 4 weights (400, 500, 600, 700) and Playfair Display loads 3 weights (400, 600, 700). Each additional weight increases the font file size.

**Action**: Audit which weights are actually used in the Tailwind classes across the project. If `font-medium` (500) or `font-semibold` (600) for Inter are rarely used, removing them saves a few KB per weight. For a portfolio site, this is a minor optimization.

### 4. No Preconnect Hints

**Severity**: Low  
**File**: `[locale]/layout.tsx` or `app/layout.tsx`

If Firebase or any analytics services are loaded on the client, the browser must establish connections to their domains (DNS lookup, TCP, TLS). Adding `<link rel="preconnect">` hints allows the browser to start these connections before they are needed.

**Action**: Add preconnect hints for Firebase domains if they are loaded on page:

```html
<link rel="preconnect" href="https://firestore.googleapis.com" />
<link rel="preconnect" href="https://firebase.googleapis.com" />
```

Only add these if Firebase is actually loaded on the page (or conditionally via the dynamic import).

### 5. Duplicate CSS Variable Definitions

**Severity**: Low  
**File**: `globals.css`

The file contains both `@theme` (Tailwind v4 syntax) and a `:root` block that defines overlapping CSS custom properties. The `:root` block may be redundant because Tailwind v4's `@theme` already generates CSS custom properties for all design tokens.

**Action**: Compare the variables defined in both blocks. If they are duplicates, remove the `:root` block and keep only `@theme`. If the `:root` block defines variables used outside of Tailwind (e.g., in inline styles or third-party components), keep both but document why.

### 6. Responsive Font Sizing

**Severity**: Low  
**File**: `globals.css`

The HTML `font-size` changes at breakpoints (16px -> 17px -> 18px). This is an unusual pattern that adjusts the base rem unit across screen sizes.

**Potential issue**: If font-size changes happen mid-layout (e.g., during window resize or on initial load with cached layout), it could cause a CLS event. In practice, this is unlikely because the font-size is set in CSS (not JavaScript) and applies before first paint.

**Action**: No immediate action required. Monitor CLS in Google Search Console and Lighthouse. If CLS issues appear, consider using a single base font-size and adjusting individual elements with responsive utility classes instead.

### 7. No Bundle Analysis

**Severity**: Low

There is no bundle analyzer configured to track the size of JavaScript and CSS bundles over time.

**Action**: Install `@next/bundle-analyzer` for development:

```bash
npm install -D @next/bundle-analyzer
```

Configure in `next.config.ts`:

```typescript
import withBundleAnalyzer from '@next/bundle-analyzer'

const config = withBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
})({
  // existing next config
})
```

Run with `ANALYZE=true npm run build` to generate a visual bundle report. This helps catch unexpected dependency growth (e.g., Firebase leaking into server bundles).

---

## Core Web Vitals Assessment

### LCP (Largest Contentful Paint)

**Expected**: Good (under 2.5s)

- The hero section loads the profile image with `priority` -- this is the likely LCP element.
- Above-fold content is entirely server-rendered, so there is no client-side rendering delay.
- Blog preview images on the blog hub may be eager-loaded. If any of these are the LCP element on their respective pages, that is acceptable. Otherwise, they should be lazy-loaded to reduce bandwidth contention with the actual LCP element.

### INP (Interaction to Next Paint)

**Expected**: Excellent (under 200ms)

- The site has minimal client-side interactivity: mobile header menu toggle, newsletter form, and contact form.
- No heavy event handlers, no complex state management, no virtual lists.
- INP should be well within the "good" threshold.

### CLS (Cumulative Layout Shift)

**Expected**: Good (under 0.1)

- Images use explicit sizing via `fill` prop with aspect-ratio containers, preventing image-load layout shifts.
- Fonts use `display: 'swap'`, which can cause minor CLS when fonts load, but this is generally under the threshold for text-heavy pages.
- Responsive font-size changes (16/17/18px) are applied via CSS before first paint and should not cause CLS.
- No dynamically injected content above the fold.

---

## Summary of Recommendations

| Priority | Action | Metric Impact |
|---|---|---|
| 1 | Audit Firebase import chain to prevent server bundle bloat | LCP, TTI |
| 2 | Dynamic import `Newsletter` and `ContactClient` components | TTI, TBT |
| 3 | Add preconnect hints for Firebase domains | LCP (minor) |
| 4 | Remove duplicate `:root` CSS variables (keep `@theme` only) | CSS size (minor) |
| 5 | Consider lazy loading below-fold images on blog/project hub pages | LCP, bandwidth |
| 6 | Add `@next/bundle-analyzer` for ongoing monitoring | Maintenance |
| 7 | Audit font weights -- remove unused weights if any | Font load size (minor) |
