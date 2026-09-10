# Glenford Rocks Phase 1

Bolt-ready Vite and React implementation for `glenfordrock.com`.

The build contains two indexable pages:

- `/` - Glenford Rocks furniture, history, mission and contact information
- `/links/` - curated bluestone history, sculpture park and nature resources

## Run locally

```bash
npm install
npm run dev
```

Create a production build with `npm run build`.

## Bolt deployment

The project is connected to the `glenfordrock.com` custom domain. After each
approved release, sync the GitHub repository into Bolt, build, publish and
verify both `/` and `/links/` on the custom domain. Keep Bolt's SEO Boost
enabled so crawlers receive pre-rendered page HTML.

## Phase 1 scope

- Responsive two-page site
- Recovered Glenford Rocks copy and imagery
- Furniture collections, quarry story, commission process and FAQs
- Email-based inquiry path
- Organization, WebSite, ItemList and FAQ structured data
- Canonical metadata, social metadata, `robots.txt`, `sitemap.xml` and `llms.txt`
- No CMS, database, login, forms or WordPress runtime

## Remaining launch checks

- Add Search Console and Bing Webmaster verification values.
- Verify that an invented or previously hacked URL returns a true 404 response rather than the homepage with a 200 response.
- Connect privacy-friendly analytics only if the client requests ongoing reporting.

Paul's approved public contact details are `glenfordsales@hotmail.com` and
`845.679.7555`. The recovered historical quarry imagery is used on the site.

## Content policy

This build contains no prices, inventory promises, delivery guarantees or unverified claims. New project pages, a larger recovered gallery and deeper regional search content belong in Phase 2.
