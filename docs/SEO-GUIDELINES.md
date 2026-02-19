# Onsite SEO Guidelines

Standard SEO checklist for all marketing websites. Apply these to every site we build.

---

## 1. Keyword Focus

Every page targets ONE primary keyword (or phrase). Define this before writing.

### Rules
- **One primary keyword per page** — no page should compete with another
- **2-3 secondary keywords** — related terms that support the primary
- **Document your targets** — maintain a keyword map (spreadsheet or in site config)

### Keyword Placement (Primary Keyword Must Appear In)
- [ ] Page title (near the front)
- [ ] Meta description
- [ ] H1 heading
- [ ] First 100 words of body content
- [ ] URL slug
- [ ] At least one image alt text

### Keyword Density
- Primary keyword: 1-2% of content (natural, not forced)
- Don't repeat unnaturally — use synonyms and related terms
- If it sounds awkward reading aloud, rewrite it

### Keyword Map Template
| Page | Primary Keyword | Secondary Keywords | Search Volume | Competition |
|------|-----------------|-------------------|---------------|-------------|
| /services/emergency-dentist | emergency dentist austin | 24 hour dentist, same day dental | 1,200/mo | Medium |
| /services/teeth-whitening | teeth whitening austin | cosmetic dentist, dental whitening | 800/mo | Low |

---

## 2. Page Titles

- **Format:** `Primary Keyword - Secondary Keyword | Brand Name`
- **Length:** 50-60 characters (Google truncates at ~60)
- **Rules:**
  - Every page has a unique title
  - Put important keywords first
  - Include brand name at the end
  - No keyword stuffing

**Examples:**
- ✅ `Emergency Dentist in Austin - Same Day Appointments | Eastside Dental`
- ❌ `Home | Eastside Dental` (wasted opportunity)
- ❌ `Best Dentist Austin Texas Dental Services Emergency Dentist` (stuffed)

---

## 3. Meta Descriptions

- **Length:** 150-160 characters
- **Rules:**
  - Unique for every page
  - Include primary keyword naturally
  - Include a call-to-action
  - Accurately describe page content
  - Write for humans, not bots

**Example:**
```
Need an emergency dentist in Austin? Eastside Dental offers same-day appointments and 24/7 care. Call now or book online.
```

---

## 4. Heading Structure

- **H1:** One per page, contains primary keyword
- **H2-H6:** Logical hierarchy, use for content structure
- **Rules:**
  - Never skip levels (H1 → H3 is wrong)
  - H1 should be visually prominent
  - Use headings for structure, not styling
  - Include keywords naturally in H2s where relevant

**Correct structure:**
```
H1: Emergency Dental Care in Austin
  H2: Same-Day Appointments
  H2: Services We Offer
    H3: Root Canals
    H3: Extractions
  H2: Insurance & Payment
```

---

## 5. URL Structure

- **Format:** `domain.com/primary-keyword` or `domain.com/category/page-name`
- **Rules:**
  - Lowercase only
  - Hyphens between words (not underscores)
  - Descriptive slugs that reflect content hierarchy
  - No dates unless content is time-sensitive
  - No parameters or IDs when possible
  - Match the page topic

### Location + Service Pages

Use hierarchical structure: `/state/city/service`

**Examples:**
- ✅ `/washington/lynnwood/obesity-care`
- ✅ `/washington/seattle/weight-loss-surgery`
- ✅ `/texas/austin/emergency-dentist`
- ✅ `/california/los-angeles/teeth-whitening`

### Standard Pages

**Examples:**
- ✅ `/services/obesity-care`
- ✅ `/about`
- ✅ `/contact`
- ❌ `/services/emergency-dentist-austin-texas-24-hour-dental-care` (too long)
- ❌ `/page?id=12345`

### URL Hierarchy Pattern

```
/                                    → Home
/about                               → About Us
/services                            → Services Overview
/services/obesity-care               → Service Detail
/washington                          → State Landing Page
/washington/lynnwood                 → City Landing Page  
/washington/lynnwood/obesity-care    → Location + Service Page
/washington/lynnwood/weight-loss     → Location + Service Page
```

---

## 6. Image Optimization

### File Names
- Descriptive, keyword-rich
- Lowercase with hyphens
- Example: `emergency-dentist-austin-office.jpg`

### Alt Text
- Describe the image accurately
- Include keywords where natural
- Keep under 125 characters
- Don't start with "Image of..." or "Picture of..."

**Examples:**
- ✅ `Dentist examining patient in modern Austin dental office`
- ❌ `IMG_4532.jpg`
- ❌ `dentist dentist austin dentist texas dental`

### Technical
- Use modern formats (WebP with JPEG fallback)
- Compress images (target < 200KB for photos)
- Specify width/height to prevent layout shift
- Lazy load below-the-fold images

---

## 7. Internal Linking

- **Rules:**
  - Link to relevant pages using descriptive anchor text
  - Every page should be reachable within 3 clicks from home
  - Use breadcrumbs for hierarchical sites
  - Don't use "click here" as anchor text
  - Link contextually within content, not just navigation

**Examples:**
- ✅ `Learn more about our [emergency dental services](/services/emergency-dentist)`
- ❌ `[Click here](/services/emergency-dentist) to learn more`

---

## 8. External Links

**Minimum 3 external links to high-authority websites on every page.**

### Why
- Signals to Google that your content is well-researched
- Provides value to users with additional resources
- Builds trust and credibility
- Shows you're part of the broader web ecosystem

### Rules
- **Minimum 3 per page** — no exceptions
- **High authority only** — government sites (.gov), educational (.edu), major publications, industry leaders
- **Relevant to content** — links must make sense in context
- **Open in new tab** — use `target="_blank" rel="noopener noreferrer"`
- **Natural anchor text** — describe what they'll find, not "click here"

### Good Sources by Industry
| Industry | Authority Sources |
|----------|-------------------|
| Healthcare | CDC, NIH, Mayo Clinic, WebMD, medical journals |
| Legal | State bar associations, courts.gov, law school resources |
| Finance | SEC, IRS, Federal Reserve, major financial publications |
| General | Wikipedia, major news outlets, industry associations |

### Examples
- ✅ `According to the [American Dental Association](https://ada.org), regular checkups...`
- ✅ `The [CDC recommends](https://cdc.gov/...) brushing twice daily...`
- ❌ `[Click here](https://random-blog.com) for more info`
- ❌ Links to competitors
- ❌ Links to low-quality or spammy sites

### Placement Tips
- Cite statistics and claims with authoritative sources
- Link to official guidelines or regulations
- Reference industry standards or best practices
- Include "Further Reading" section if natural links are hard to place

---

## 9. Schema Markup (Structured Data)

Implement JSON-LD schema on every site. Minimum required:

### ⚠️ Critical Schema Rules
- **All URLs must be HTTPS** — never use `http://` in schema, always `https://`
- **BreadcrumbList required on EVERY page** — no exceptions
- **NO HTML in schema text** — JSON text values must be plain text only. HTML tags like `<a href="...">` break JSON parsing because the quotes terminate the string early
- **Avoid special characters** — Dollar signs (`$`) can be stripped by template engines (Nunjucks). Use "USD" suffix instead (e.g., "8,000 USD" not "$8,000")
- **Validate JSON** — Always test schema at [Google Rich Results Test](https://search.google.com/test/rich-results) before deploying

### Common Schema Errors
| Error | Cause | Fix |
|-------|-------|-----|
| `Parsing Error @type` | HTML in JSON text | Remove `<a>`, `<strong>`, etc. from text values |
| `Invalid \escape` | Template engine stripped `$` | Use "X,000 USD" instead of "$X,000" |
| `Unexpected token` | Unescaped quotes | Ensure all quotes inside strings are escaped |

### BreadcrumbList Best Practices

Breadcrumbs help users and search engines understand site hierarchy. Use **hierarchy-based breadcrumbs** (not path-based).

**Rules:**
- **Include full path** from homepage to current page
- **Don't link the current page** — display it but don't make it clickable
- **Use consistent separators** — recommend `>` or `›`
- **Schema must match visible breadcrumbs** — if you show breadcrumbs on page, schema should match
- **Position 1 is always Home** — subsequent positions follow hierarchy

**Hierarchy Design:**
```
Home
├── [Category] (e.g., Services, Locations, Blog)
│   └── [Subcategory/Item] (e.g., Service type, City)
│       └── [Detail page] (e.g., City + Service combo)
```

**Example Schema (3 levels):**
```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://example.com/"},
    {"@type": "ListItem", "position": 2, "name": "Locations", "item": "https://example.com/locations/"},
    {"@type": "ListItem", "position": 3, "name": "Seattle", "item": "https://example.com/locations/seattle/"}
  ]
}
```

**Note:** The current page (last item) can include or omit the `item` URL — Google accepts both.

### Organization (every site)
```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Business Name",
  "url": "https://domain.com",
  "logo": "https://domain.com/logo.png",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+1-XXX-XXX-XXXX",
    "contactType": "customer service"
  }
}
```

### LocalBusiness (for local businesses)
```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Business Name",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "123 Main St",
    "addressLocality": "Austin",
    "addressRegion": "TX",
    "postalCode": "78701"
  },
  "telephone": "+1-XXX-XXX-XXXX",
  "openingHours": "Mo-Fr 09:00-17:00"
}
```

### BreadcrumbList (for navigation)
```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://domain.com"},
    {"@type": "ListItem", "position": 2, "name": "Services", "item": "https://domain.com/services"}
  ]
}
```

### FAQPage (every page — minimum 5 Q&As)
```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is obesity care?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Obesity care is a comprehensive medical approach to treating obesity through lifestyle changes, medical interventions, and ongoing support..."
      }
    },
    {
      "@type": "Question",
      "name": "How much does obesity treatment cost?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The cost of obesity treatment varies depending on the type of treatment..."
      }
    }
  ]
}
```

### Required Schema Per Page Type

| Page Type | Required Schema |
|-----------|-----------------|
| All Pages | Organization + FAQPage (5+ Q&As) + **BreadcrumbList** |
| Location Pages | + LocalBusiness |
| Service Pages | + Service or MedicalProcedure |
| Location + Service | + LocalBusiness + Service |
| Blog/Articles | + Article |

---

## 10. Technical SEO Checklist

### Required Files
- [ ] `robots.txt` - Allow crawling, point to sitemap
- [ ] `sitemap.xml` - Auto-generated, submitted to Search Console
- [ ] `favicon.ico` + modern icon set

### Performance (Core Web Vitals)
- [ ] LCP (Largest Contentful Paint) < 2.5s
- [ ] FID (First Input Delay) < 100ms
- [ ] CLS (Cumulative Layout Shift) < 0.1
- [ ] Mobile PageSpeed score > 90
- [ ] Desktop PageSpeed score > 95

### Security & Protocol
- [ ] HTTPS everywhere (redirect HTTP → HTTPS)
- [ ] HSTS header enabled
- [ ] No mixed content warnings

### Mobile
- [ ] Responsive design (no separate mobile site)
- [ ] Viewport meta tag set correctly
- [ ] Tap targets at least 48px
- [ ] No horizontal scrolling
- [ ] Text readable without zooming (16px+ base)

### Indexing
- [ ] Canonical URLs on every page
- [ ] No duplicate content issues
- [ ] Proper use of noindex where needed (admin pages, thank you pages)
- [ ] Hreflang tags if multilingual

---

## 11. Content Guidelines

### Every Page Needs
- Clear H1 that matches search intent
- **Minimum 1000 words** of useful, original content
- **FAQ section with minimum 5 questions and answers**
- At least one internal link
- Minimum 3 external links to authority sites
- Clear call-to-action
- Contact information accessible
- Appropriate schema markup (including FAQPage)

### Service Pages
- Detailed explanation of the service (what, why, how)
- Who it's for (ideal patient/customer)
- What to expect (process, timeline)
- Benefits and outcomes
- FAQs section
- Related services (internal links)
- Credentials/qualifications

### Location Pages
- Location-specific content (not just city name swapped)
- Local address and contact info
- Directions/parking info
- Service area coverage
- Local testimonials if available
- Nearby landmarks or neighborhoods served
- Local schema markup

### Footer (Every Page)
- **Embedded Google Map** — required on all pages
- Business name, address, phone number (NAP consistency)
- Links to main service pages
- Copyright and legal links

### Location + Service Pages (e.g., `/washington/lynnwood/obesity-care`)
- Combine service details with location specifics
- Unique content — not duplicated from main service page
- Local keywords naturally integrated
- Location-specific CTAs ("Call our Lynnwood office")
- 1000+ words with genuine local value

### Avoid
- Duplicate content across pages
- Thin pages with < 1000 words
- City-swap pages (same content, different city name)
- Walls of text without structure
- Hidden text or links
- Keyword stuffing

---

## 12. Pre-Launch SEO Checklist

Before any site goes live:

- [ ] Keyword map documented (primary + secondary keywords per page)
- [ ] All pages have unique titles and meta descriptions
- [ ] H1 tags are set and contain target keywords
- [ ] Primary keyword appears in title, H1, URL, first 100 words
- [ ] Images have alt text and are optimized
- [ ] Internal linking structure is logical
- [ ] Minimum 3 external links to authority sites per page
- [ ] FAQ section with 5+ Q&As on every page
- [ ] Schema markup is implemented and validated (including FAQPage)
- [ ] robots.txt is configured correctly
- [ ] Sitemap is generated and accessible
- [ ] 404 page exists and is helpful
- [ ] Redirects are in place for any changed URLs
- [ ] Google Search Console is set up
- [ ] Google Analytics / tracking is installed
- [ ] Page speed scores meet targets
- [ ] Mobile usability passes Google's test
- [ ] SSL certificate is valid
- [ ] Canonical URLs are set
- [ ] Embedded Google Map in footer

---

## 13. Post-Launch

### Week 1
- Submit sitemap to Google Search Console
- Request indexing for key pages
- Verify no crawl errors

### Ongoing
- Monitor Search Console for issues weekly
- Check Core Web Vitals monthly
- Update content quarterly (freshness signal)
- Build internal links as new content is added

---

## Quick Reference

| Element | Target | Key Rule |
|---------|--------|----------|
| Primary Keyword | 1 per page | In title, H1, URL, first 100 words |
| Title | 50-60 chars | Unique, keyword-first |
| Meta Description | 150-160 chars | CTA included |
| URL | Descriptive | `/state/city/service` for locations |
| H1 | One per page | Contains primary keyword |
| Alt Text | < 125 chars | Descriptive, natural |
| Content | 1000+ words | Structured, unique, useful |
| External Links | 3+ per page | High-authority sites only |
| FAQ | 5+ Q&As per page | With FAQPage schema |

---

*Last updated: 2026-02-19*  
*Source: Consolidated from made-with-claw and seattle-nurse-delegation repositories*