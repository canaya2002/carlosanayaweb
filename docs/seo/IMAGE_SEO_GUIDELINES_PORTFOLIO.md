# Image SEO Guidelines - carlosanayaweb.com

**Date**: 2026-04-14  
**Domain**: carlosanayaweb.com  
**Framework**: Next.js 16 (App Router) with `next/image`

---

## Current Image Inventory

### Profile

| File | Usage | Notes |
|---|---|---|
| `/images/carlos-anaya-ruiz-software-development-manager.png` | Hero, About, CV | Primary profile photo |

### Open Graph

| File | Usage | Notes |
|---|---|---|
| `/images/og-default.png` | Fallback OG image | Used when no page-specific OG exists |
| `/images/og-es.png` | Spanish locale OG | Homepage and Spanish pages |
| `/images/og-en.png` | English locale OG | Homepage and English pages |

### Projects

| File | Usage |
|---|---|
| `/images/projects/` | 6 project screenshots (approx. 3 per project) |

### Blog

| File | Usage |
|---|---|
| `/images/blog/` | 1 blog cover image |

### Awards

| File | Usage |
|---|---|
| `/images/awards/` | 3 award images |

### Certifications

| File | Usage |
|---|---|
| `/images/certs/` | 14 certification images |

### PWA / Favicons

| File | Usage |
|---|---|
| `/images/icon-*.png` | PWA manifest icons (multiple sizes) |
| `/images/apple-touch-icon.png` | Apple devices bookmark icon |

---

## File Naming Convention

The project follows an excellent naming convention using the `carlos-anaya-ruiz-` prefix on all content images. This practice associates every image with the entity, which helps with:

- Google Image Search attribution
- Entity disambiguation
- Brand consistency in image file names (a minor but real ranking signal)

### Examples of Current Naming

```
carlos-anaya-ruiz-nasa-spaceapps-aurascope.png
carlos-anaya-ruiz-certificacion-ccna-cisco.png
carlos-anaya-ruiz-solis-web-modernizacion.png
```

### Naming Convention Rules

| Image Category | Pattern | Example |
|---|---|---|
| Profile | `carlos-anaya-ruiz-[role].png` | `carlos-anaya-ruiz-software-development-manager.png` |
| Projects | `carlos-anaya-ruiz-[project-name]-[view-description].png` | `carlos-anaya-ruiz-solis-web-dashboard-view.png` |
| Blog covers | `carlos-anaya-ruiz-[topic-slug]-portada.png` | `carlos-anaya-ruiz-nextjs-migration-portada.png` |
| Certifications | `carlos-anaya-ruiz-certificacion-[cert-name].png` | `carlos-anaya-ruiz-certificacion-ccna-cisco.png` |
| Awards | `carlos-anaya-ruiz-[event-name]-[project].png` | `carlos-anaya-ruiz-nasa-spaceapps-aurascope.png` |
| OG images | `og-[locale].png` | `og-es.png`, `og-en.png` |
| PWA icons | `icon-[size].png` | `icon-192.png`, `icon-512.png` |

---

## Alt Text Audit

### Current Alt Text Quality

| Image Context | Alt Text Pattern | Rating |
|---|---|---|
| Hero avatar | "Carlos Anaya Ruiz - Software Development Manager and Full Stack Developer" | GOOD |
| About avatar | "Carlos Anaya Ruiz - Professional photo, Software Development Manager" | GOOD |
| Blog cover | Uses the post title dynamically | GOOD |
| Project screenshots | "Carlos Anaya Ruiz - Project [name] - Screenshot [n]" | GOOD |
| Certification images | "Carlos Anaya Ruiz - Certification: [name] - [issuer]" | GOOD |
| Award images | Context-dependent | GOOD |

### Alt Text Guidelines for New Content

1. **Always include the person's full name** in the alt text: "Carlos Anaya Ruiz"
2. **Be descriptive of what the image shows**, not just what it represents:
   - BAD: "Project screenshot"
   - GOOD: "Carlos Anaya Ruiz - SolisWeb admin dashboard showing client case management interface"
3. **Include relevant keywords naturally** but do not keyword-stuff:
   - BAD: "Carlos Anaya Ruiz software developer web developer full stack developer"
   - GOOD: "Carlos Anaya Ruiz - Full Stack Developer presenting at NASA Space Apps Challenge"
4. **For certifications, include the issuer**:
   - "Carlos Anaya Ruiz - Certification: CCNA - Cisco"
5. **For blog posts, the post title is sufficient** as alt text for the cover image
6. **Keep alt text under 125 characters** when possible (screen readers may truncate longer text)

---

## Image Format and Optimization

### Current Configuration

The project's `next.config.ts` includes:

```
formats: ['image/avif', 'image/webp']
```

This means Next.js will automatically serve AVIF (best compression) with WebP fallback and original format as last resort. This is the optimal configuration.

### Guidelines

1. **Source images**: Upload as PNG for screenshots/graphics, JPG for photographs. Next.js handles conversion to AVIF/WebP automatically at build/request time.
2. **Do not manually convert** images to WebP or AVIF before adding them to the project. Let Next.js handle format optimization.
3. **Reasonable source dimensions**: Provide images at 2x the largest display size (e.g., if an image displays at 600px wide, provide a 1200px wide source). Next.js will generate responsive sizes.
4. **Use `next/image`** for all content images. Never use raw `<img>` tags.
5. **Set `priority` prop** only for above-the-fold images (hero profile photo). All other images should lazy-load by default.

---

## Performance Considerations

### Above-the-fold Images

- The hero profile image uses `priority={true}` to preload it, which is correct.
- OG images are only used for social sharing metadata and do not affect page load performance.

### Below-the-fold Images

- Blog post previews on the hub page should use default lazy loading (no `priority` prop).
- Project thumbnails on the hub page should use default lazy loading.
- Certification and award images are below-fold and correctly lazy-loaded.

### Image Sizing

- All images use `next/image` with either explicit `width`/`height` or `fill` mode with aspect-ratio containers.
- This prevents CLS (Cumulative Layout Shift) from image loading.

---

## Recommendations

| Priority | Action | Impact |
|---|---|---|
| 1 | Maintain the `carlos-anaya-ruiz-` prefix for all new content images | Entity association in Google Image Search |
| 2 | For new blog covers, follow pattern: `carlos-anaya-ruiz-[topic-slug]-portada.png` | Consistency and SEO |
| 3 | For new project galleries, use descriptive view names: `carlos-anaya-ruiz-[project]-[what-is-shown].png` | Better image search visibility |
| 4 | Ensure all blog post cover images have unique, descriptive alt text | Accessibility and image SEO |
| 5 | Keep AVIF/WebP configuration as-is | Already optimal |
| 6 | Consider lazy loading blog preview images on hub page if currently eager-loaded | Reduces initial page weight |
| 7 | Add descriptive alt text documentation for OG images (for internal reference, since they are not rendered as `<img>` tags) | Documentation completeness |

---

## Checklist for Adding New Images

When adding a new image to the project:

- [ ] File name follows the naming convention above (`carlos-anaya-ruiz-[category]-[description].png`)
- [ ] File name uses lowercase, hyphens as separators, no spaces or special characters
- [ ] Alt text is descriptive, includes "Carlos Anaya Ruiz", and is under 125 characters
- [ ] Image is added via `next/image` component (not raw `<img>`)
- [ ] `priority` is only set for above-the-fold images
- [ ] Source image is at least 2x the maximum display width
- [ ] Source format is PNG (for graphics/screenshots) or JPG (for photos)
