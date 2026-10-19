# Sari Sparkling Experience

# Sari, Website Brief for Lovable

**Project:** sarisparkling.com
**Brand:** Sari by Tajna Vineyards & Winery (TAJNA s.r.o., Levická 743, 952 01 Vráble, Slovakia)
**Instagram:** @sari_sparkling
**Deliverable:** Marketing website (brand + product + B2B lead generation). No online checkout in v1.

---

## 1. What Sari is

Sari is a premium, lightly sparkling non alcoholic alternative to wine, made by winemakers from fruit juices and botanicals. It is **not** a dealcoholised wine. It is built on acidity, gentle bitterness and structure, so it delivers the complex gastronomic experience people expect from wine.

Three products, all 0% alcohol, 0.75 l, 6 bottles per case:

| | Sari White | Sari Rosé | Sari Red |
|---|---|---|---|
| Character | Fresh, herbal, gently spiced | Fruity, fresh, floral, herbal | Dark fruit, structured, gently tannic |
| Energy / 100 ml | 23 kcal | 34 kcal | 24 kcal |
| Residual sugar | 5.4 g, dry | 8.3 g, off dry | 5.4 g, dry |
| Bubbles | Fine | Fine | Very fine |
| Serving temp. | 6 to 8 °C | 6 to 8 °C | 10 to 12 °C |

## 2. Goal of the site

Primary: convince restaurants, wine bars, hotels and premium retail to list Sari, and capture their inquiry.
Secondary: build the consumer brand and the "new generation of wine culture" story, collect newsletter signups, point consumers to where they can buy.

Success looks like: a sommelier or F&B manager lands on the site, understands in 15 seconds that this is a winemaker made gastronomic drink and not another soft drink, and submits a wholesale inquiry.

## 3. Experience principles

1. **Wine codes, not soft drink codes.** Everything about the layout, photography and language should read like a serious wine brand. Never like a lemonade or a wellness supplement.
2. **Editorial over promotional.** Large images, generous whitespace, restrained type, minimal buttons. Let the product photography carry the page.
3. **Specificity over claims.** Tasting notes, pairings, serving temperature and ingredients do the persuading. No "the best", no exclamation marks.

## 4. Aesthetic direction

- **Philosophy:** Modern editorial minimalism with a handmade, artisanal accent. Think a natural wine label crossed with a fashion lookbook.
- **Tone:** Calm, confident, warm, a little playful in the handwritten details.
- **Reference points:** noughty-aperitifs.com, ghia.com, seedlip-drinks.com, gik-live-style editorial wine sites, Aesop for whitespace and typographic restraint.
- **Anti references:** supermarket juice brands, "0%" fitness or detox aesthetics, heavy gradients, stock photos of clinking glasses, generic SaaS landing page layout with 3 feature cards and a purple gradient hero.

### Colour tokens

```
--ink:        #0A0A0A   /* near black, hero and product sections */
--cream:      #FAF5EF   /* warm off white, main content background */
--paper:      #F3ECE3   /* subtle section alternate */
--gold:       #B08D57   /* accent, label gold, links and small caps */
--white-sari: #7C8A5A   /* sage olive, Sari White */
--rose-sari:  #DE9A97   /* dusty pink, Sari Rosé */
--red-sari:   #B4142A   /* crimson, Sari Red */
--muted:      #6B6560   /* secondary text */
```

Rule: sections alternate between full black and cream. Each product page takes its own accent colour for small details only (rules, hover states, tasting note tags), never as a background fill.

### Typography

- Headings and body: a light geometric sans. Use **Jost** (Google Fonts), weights 300 and 500. Headings in 300, generous line height, no bold shouting.
- Accent and pull quotes: a handwritten font, **Caveat** (Google Fonts). Used for taglines, product names in hero contexts, and the six benefit labels. Never for paragraphs.
- The Sari wordmark is a script logo supplied as SVG. Do not try to recreate it with a font.
- Body copy 17 to 18 px, max line length 68 characters.

### Motion

Subtle only: fade and 20 px rise on scroll into view, 400 ms ease out. Image zoom of 3% on hover for product cards. No parallax, no auto playing carousels, no bouncing.

## 5. Sitemap

```
/                     Home
/products             All three products
/products/white       Sari White
/products/rose        Sari Rosé
/products/red         Sari Red
/story                Our story (Tajna, philosophy of taste, the wine ritual)
/for-business         For restaurants, hotels and retail (B2B)
/where-to-buy         Stockists (v1 can be a short list plus "ask us")
/contact              Contact
/legal/privacy, /legal/terms, /legal/cookies
```

Language: English only in v1. Build the copy layer so a Slovak version can be added later (keep all strings in a single content file or i18n structure, do not hardcode text inside components).

## 6. Page by page

### Home

1. **Hero.** Full bleed image or looping muted video of bottles on ice. Sari script wordmark centred. Below it, in handwriting: *Wine culture without the alcohol.* One quiet scroll cue. No buttons over the image except a small ghost CTA "Discover Sari".
2. **Intro statement.** Black section, centred, large light type:
   *A non alcoholic alternative to wine, made by winemakers from botanicals and fruit.*
3. **The three products.** Three tall portrait images side by side on desktop, stacked on mobile. Handwritten product name above each, one line of character descriptors below, link to the product page. Black background.
4. **The shift.** Cream section, two columns, image right. Headline: *The world is not moving toward abstinence. It is moving toward a more conscious way of drinking.* Three short blocks: Less but better / Sober curious, not sober / Wine culture stays.
5. **New generation of wine culture.** Image left, text right, cream. The "we do not want to replace wine, we want to bring it a partner" message.
6. **Six benefits row.** Black section, six items in a 3x2 grid, thin line icons plus handwritten labels: 0% alcohol, Low calorie, Gastronomic profile, No added sugar or preservatives, Premium image, Made by winemakers.
7. **The ritual.** Cream, text left, image right (red pour in a wine glass). Handwritten list: The right glass and serving temperature / Food pairing / Modern hosting / Elegant dining / Conscious social drinking.
8. **Who Sari is for.** Four columns: Lifestyle segment, No wine consumers, Gastro and hospitality, Athletes and longevity enthusiasts. Closing line: *And everyone who finds their own way to it.*
9. **B2B strip.** Full width black band: *New category. New occasion.* with a CTA to /for-business.
10. **Newsletter and footer.** Email capture, one field plus arrow button, GDPR consent checkbox. Footer with logo lockup "Sari by Tajna Vineyards and Winery", Instagram, contact, legal links.

### Product page template (used 3x)

Layout: sticky bottle image on the left half at desktop, scrolling content on the right. On mobile the bottle sits at the top, then content.

Sections in order:
1. Product name in handwriting + one line: *Premium non alcoholic alternative to wine, made by winemakers from botanicals and fruit.*
2. Character descriptors as small pill tags.
3. Tasting note paragraph.
4. Spec table: energy per 100 ml, residual sugar, bubbles, serving temperature, alcohol, volume, bottles per case.
5. Ingredients, plus the line "Pasteurised, no preservatives".
6. Food pairing, as a horizontal list with dot separators.
7. Recommended occasion.
8. Serving and storage.
9. Suggested wine list naming, in a bordered box, useful for restaurants:
   `Sari White, non alcoholic sparkling wine alternative, Tajna Vineyards & Winery`
10. Next and previous product navigation at the bottom.

Product data must live in a single typed data file (`src/data/products.ts`), one object per product, so pages render from data rather than hardcoded markup.

### Story

The Tajna angle: we are winemakers, and innovation and flexibility are part of our philosophy. Non and low alcohol is a natural extension, not a detour. Includes the philosophy of taste section: fruit juices as the backbone, verjuice acidity as the frame, botanicals, flowers and spices as the second layer that gives each Sari its character. Pull quote in handwriting: *Sari is a gastronomic drink that deserves the same place at the table as wine.*

### For business

The conversion page. Contents:
- Headline: *A new category. A new occasion.*
- Five reasons to list Sari: new premium non alcoholic category, extends wine occasions, upsell over water and soft drinks, works in gastronomy, distinctive packaging.
- Format and logistics block: 0.75 l bottle, 6 per case, one year minimum shelf life from production, store away from frost and direct sunlight, refrigerate after opening and consume within 2 days.
- Downloadable one page product sheets (PDF, three files, link out to static assets).
- **Inquiry form:** name, company, role, email, phone, country, business type (restaurant / wine bar / hotel / retail / distributor / event or wedding / other), message, GDPR consent. On submit, show an inline success state, do not navigate away.

### Where to buy

Simple v1: short intro, a grid of stockist cards (name, city, type, link), and a fallback block "Not near you? Write to us and we will find a way." Data from a single data file so it can grow.

### Contact

Email, address, Instagram, plus the same form component in a shorter variant. Embed a small map only if it does not slow the page.

## 7. Components

| Component | Notes |
|---|---|
| Nav | Transparent over the hero, turns cream with a hairline border on scroll. Logo left, links right, hamburger under 900 px. |
| HandwrittenText | Wrapper applying the Caveat face with a slight rotation option. |
| SectionBlack / SectionCream | Layout wrappers enforcing the alternating rhythm and vertical spacing scale. |
| ProductCard | Portrait image, handwritten name, descriptor line, hover zoom. |
| SpecTable | Two column label and value table with hairline rules. |
| BenefitIcon | Thin line icon plus handwritten caption. |
| PullQuote | Large handwritten quote, centred, generous margins. |
| InquiryForm | Validated, accessible, inline success and error states. |
| NewsletterSignup | Single field plus consent. |
| Footer | Logo lockup, links, legal, IG. |

## 8. Responsive

Breakpoints 480, 768, 1024, 1440. Mobile first. The sticky bottle on product pages becomes a static image above the content below 1024 px. The four column "who is Sari for" becomes two columns at 768 and one at 480. Hero uses a portrait crop on mobile so the bottles stay in frame. Type scale drops one step per breakpoint, headings never below 28 px.

## 9. Accessibility

- Text on black must hit 4.5:1. Cream on ink and gold on cream both need checking, gold text goes on cream only at 18 px and above, never small.
- All images need real alt text describing the bottle or scene.
- Keyboard navigable nav, forms and product navigation, visible focus ring in gold.
- Respect `prefers-reduced-motion` and disable all scroll animation when set.
- Form fields need real labels, not placeholder only.

## 10. Technical notes

- React plus Tailwind, React Router for the routes above.
- All content strings in one place, ready for a Slovak translation later.
- Images: use placeholder images from the brand photo set, lazy load everything below the fold, serve WebP.
- SEO: unique title and meta description per page, Open Graph image per product, JSON LD `Product` schema on product pages and `Organization` on the home page.
- Analytics and cookie consent are out of scope for the build, leave a clearly marked slot in the head for a script tag.
- Form submissions can post to a placeholder endpoint or Supabase table, keep the handler isolated in one file so it can be swapped.

## 11. Out of scope for v1

E commerce and checkout, user accounts, multi language switcher, blog, age gate (not needed, 0% alcohol), live stock levels, distributor portal.

---

## Appendix: exact product copy

### Sari White
Fresh · herbal · gently spiced
Fresh, lively apple and grape with a pronounced accent of ginger and lemongrass. Verjuice brings clean acidity, complemented by delicate herbal and floral notes of chamomile, wild thyme, yarrow and hops, finishing slightly bitter and dry.
**Ingredients:** water, apple, grape, ginger, verjuice from unripe grapes, tartaric acid, salt, chamomile, yarrow, thyme, hops, lemongrass. Pasteurised, no preservatives.
**Pairing:** pike perch · young courgette · fennel · goat cheese · green herbs · mussels
**Occasion:** aperitif · welcome drink · tasting dinner · garden party
**Serving:** serve well chilled in a white or sparkling wine glass, neat or over ice.

### Sari Rosé
Fruity · fresh · floral · herbal
A juicy apple and grape base joined by raspberry and fresh, gently tart rhubarb. Hibiscus and rosehip lift the fruit, while lemon balm, basil and rosemary bring herbal complexity and, together with the verjuice, a fresh and elegant finish.
**Ingredients:** water, apple, grape, raspberry, rhubarb, verjuice from unripe grapes, tartaric acid, salt, hibiscus, rosehip, lemon balm, basil, rosemary. Pasteurised, no preservatives.
**Pairing:** poultry · salmon · caprese · rhubarb · parmesan · pizza and focaccia
**Occasion:** aperitif · welcome drink · tasting dinner · long lunch or brunch
**Serving:** serve well chilled in a white or sparkling wine glass, neat or over ice.

### Sari Red
Dark fruit · structured · gently tannic
A bold sour cherry and red grape character meets aronia, blackcurrant and fig for depth and concentrated fruit. Beetroot adds an earthy tone, thyme a herbal spice, and tannin from toasted oak builds structure and a longer, drier finish.
**Ingredients:** water, red grape, sour cherry, aronia, fig, blackcurrant, beetroot, verjuice from unripe grapes, salt, thyme, oak barrel tannin. Pasteurised, no preservatives.
**Pairing:** beef tenderloin · duck · mushrooms · aged cheese · pasta with ragù
**Occasion:** tasting dinner · tasting · tapas · long conversations
**Serving:** serve lightly chilled in a universal or red wine glass, without ice.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://sari-demo.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/8634ccc8-1c1d-42d5-888e-e885d77da01a).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
