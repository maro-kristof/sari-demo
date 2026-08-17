/**
 * Every user-facing string lives here so a Slovak translation can be added
 * later by duplicating this object behind an i18n lookup.
 */

import heroIce from "@/assets/hero-ice.jpg.asset.json";
import trayGlasses from "@/assets/tray-glasses.jpg.asset.json";
import portraitGlasses from "@/assets/portrait-glasses.jpg.asset.json";
import vineyardGlass from "@/assets/vineyard-glass.jpg.asset.json";
import cases from "@/assets/sari-table-cover.webp.asset.json";
import pourRed from "@/assets/pour-red.jpg.asset.json";
import wordmark from "@/assets/wordmark.png.asset.json";

export const images = {
  wordmark: wordmark.url,
  hero: heroIce.url,
  tableDinner: trayGlasses.url,
  portraitGlasses: portraitGlasses.url,
  vineyardGlass: vineyardGlass.url,
  cases: cases.url,
  pourRed: pourRed.url,
};

export const brand = {
  name: "Sari",
  legalName: "TAJNA s.r.o.",
  lockup: "Sari by Tajna Vineyards & Winery",
  address: "Levická 743, 952 01 Vráble, Slovakia",
  email: "info@sarisparkling.com",
  phone: "+421 903 000 000",
  instagram: "https://www.instagram.com/sari_sparkling/",
  instagramHandle: "@sari_sparkling",
  wordmarkAlt: "Sari script wordmark",
};

export const nav = {
  links: [
    { to: "/products", label: "Products" },
    { to: "/story", label: "Story" },
    { to: "/for-business", label: "For business" },
    { to: "/where-to-buy", label: "Where to buy" },
    { to: "/contact", label: "Contact" },
  ],
  menuOpen: "Open menu",
  menuClose: "Close menu",
  home: "Sari, home",
};

export const home = {
  hero: {
    imageAlt:
      "Bottles of Sari chilling in a tub of ice with fresh fruit and herbs",
    tagline: "Wine culture without the alcohol.",
    cta: "Discover Sari",
    scrollCue: "Scroll",
  },
  intro:
    "A non-alcoholic wine alternative, made by winemakers from botanicals and fruits.",
  productsSection: {
    eyebrow: "Three expressions",
    cta: "View product",
  },
  shift: {
    eyebrow: "The shift",
    headline:
      "The world is not moving toward abstinence. It is moving toward a more conscious way of drinking.",
    imageAlt:
      "Hands carrying a silver tray with glasses of Sari White, Rosé and Red and a bottle",
    blocks: [
      {
        title: "Less but better",
        body: "Younger generations drink less often, more selectively and more by occasion — premium over volume.",
      },
      {
        title: "Sober curious, not sober",
        body: "Consumers look for a pause rather than abstinence. They want the ritual without the alcohol.",
      },
      {
        title: "Wine culture stays",
        body: "The values of hosting and the table do not disappear. Only what is in the glass changes.",
      },
    ],
  },
  generation: {
    eyebrow: "New generation of wine culture",
    headline: "We do not want to replace wine. We want to bring it a partner.",
    body: [
      "Sari is a product rooted in winemaking DNA: complexity, structure, a gastronomic character and clean balance.",
      "It carries the ritual of wine into the non alcoholic world — so nothing of the moment is lost, only the alcohol.",
    ],
    imageAlt:
      "A woman holding two glasses of Sari in front of a white tiled wall",
  },
  benefits: {
    eyebrow: "Why Sari",
    items: [
      "0% alcohol",
      "Low calorie",
      "Gastronomic profile",
      "No added sugar or preservatives",
      "Premium flavour",
      "Made by winemakers",
    ],
  },
  ritual: {
    eyebrow: "The ritual",
    headline: "The ritual of wine, without the alcohol.",
    body: "Sari carries over everything that sits around the glass: the right glass, the right temperature, the food, the conversation.",
    items: [
      "The right glass and serving temperature",
      "Food pairing",
      "Modern hosting",
      "Elegant dining",
      "Conscious social drinking",
    ],
    imageAlt: "Sari Red being poured into a wine glass at a table",
  },
  audience: {
    eyebrow: "When Sari fits",
    columns: [
      {
        title: "The long evening",
        body: "When the table is set, the conversation is flowing and you want to stay present until the end.",
      },
      {
        title: "The mindful pause",
        body: "For nights when alcohol is not the right choice, but water feels too thin for the occasion.",
      },
      {
        title: "The pairing",
        body: "When the food deserves something structured, complex and grown-up in the glass.",
      },
      {
        title: "The generous host",
        body: "So guests who are not drinking still have something worth raising a glass to.",
      },
    ],
    closing: "Sari is for the curious and those not willing to compromise.",
    closingAttribution: "Sarah, co-author of Sari",
  },
  b2bStrip: {
    headline: "New category. New occasion.",
    body: "A premium non alcoholic listing that lifts the whole wine list.",
    cta: "For restaurants, hotels and retail",
  },
};

export const newsletter = {
  eyebrow: "Newsletter",
  headline: "Stay close to Sari.",
  body: "Occasional notes on new releases, pairings and where to find us.",
  label: "Email address",
  placeholder: "you@restaurant.com",
  consent:
    "I agree that my email may be used to send me the Sari newsletter, in line with the privacy policy.",
  submit: "Subscribe",
  success: "Thank you. Please check your inbox to confirm.",
  error: "Something went wrong. Please try again or write to us directly.",
};

export const productsIndex = {
  eyebrow: "The range",
  title: "Three expressions, one idea",
  intro:
    "Each Sari is built on fruit juice, verjuice acidity and a second layer of botanicals, flowers and spices. All 0% alcohol, 0.75 l, six bottles per case.",
  metaTitle: "Products — Sari non alcoholic sparkling",
  metaDescription:
    "Sari White, Rosé and Red: three premium non alcoholic sparkling alternatives to wine, made by winemakers from botanicals and fruit.",
};

export const productPage = {
  characterLabel: "Character",
  tastingLabel: "Tasting note",
  specLabel: "Specification",
  ingredientsLabel: "Ingredients",
  pairingLabel: "Food pairing",
  occasionLabel: "Recommended occasion",
  servingLabel: "Serving and storage",
  benefitsLabel: "Why Sari",
  benefits: [
    "0% alcohol",
    "Low calorie",
    "Gastronomic profile",
    "No added sugar or preservatives",
    "Premium flavour",
    "Made by winemakers",
  ],
  buyCta: "Buy Sari",
  buyUrl: "https://www.vinotajna.sk/product-category/nealko/",
  prev: "Previous",
  next: "Next",
};

export const story = {
  metaTitle: "Our story — Sari by Tajna Vineyards & Winery",
  metaDescription:
    "Tajna Vineyards & Winery on why winemakers made a non alcoholic alternative to wine: the philosophy of taste behind Sari.",
  eyebrow: "Our story",
  title: "Winemakers, by trade and by instinct",
  lead: "Tajna Vineyards & Winery has always treated innovation and flexibility as part of its craft. Non and low alcohol is a natural extension of that, not a detour.",
  sections: [
    {
      title: "A winery that reads the table",
      body: [
        "We are winemakers. Our philosophy has always included innovation and flexibility, so following how people actually drink today was never a compromise.",
        "The low and no alcohol category grows at double digits while the premium non alcoholic segment is still barely served. That gap is where Sari sits: a drink for a guest who wants everything wine offers, minus the alcohol.",
      ],
    },
    {
      title: "Philosophy of taste",
      body: [
        "Fruit juices are the backbone: apple, grape, raspberry, sour cherry, aronia. They carry body and a natural sweetness that never tips into syrup.",
        "Verjuice from unripe grapes is the frame. It gives the acidity, tension and dryness that a soft drink can never fake, and it is the reason Sari reads as gastronomic.",
        "Botanicals, flowers and spices are the second layer. Chamomile, thyme, hops, hibiscus, rosemary, oak tannin — this is where each Sari finds its own character.",
      ],
    },
  ],
  quote: "Sari is a gastronomic drink that deserves the same place at the table as wine.",
  imageAlt: "A glass of Sari Red held up against the vineyard",
  secondaryImageAlt: "Cases of Sari being stacked at the winery",
};

export const forBusiness = {
  metaTitle: "For restaurants, hotels and retail — Sari",
  metaDescription:
    "List Sari: a premium non alcoholic sparkling alternative to wine. Format, logistics, product sheets and a wholesale inquiry form.",
  eyebrow: "For business",
  title: "A new category. A new occasion.",
  lead: "Sari gives restaurants, wine bars, hotels and premium retail a non alcoholic listing with the margin, the story and the presence of a wine.",
  reasonsLabel: "Five reasons to list Sari",
  reasons: [
    {
      title: "A new premium non alcoholic category",
      body: "Not a soft drink and not a dealcoholised wine. A category of its own, with little competitors on the shelf.",
    },
    {
      title: "It extends wine occasions",
      body: "The guest who is not drinking stays in the same ritual: same glass, same course, same conversation.",
    },
    {
      title: "Upsell over water and soft drinks",
      body: "A bottle sold by the glass or by the bottle instead of a mineral water — with a wine-like ticket.",
    },
    {
      title: "It works in gastronomy",
      body: "Acidity, gentle bitterness and structure make it pairable across the whole menu, from mussels to ragù.",
    },
    {
      title: "Distinctive packaging",
      body: "A 0.75 l bottle with a hand drawn label that reads as wine on the table and in retail.",
    },
  ],
  logisticsLabel: "Format and logistics",
  logistics: [
    { label: "Format", value: "0.75 l glass bottle" },
    { label: "Case", value: "6 bottles" },
    { label: "Shelf life", value: "Minimum two years from production" },
    { label: "Storage", value: "Away from frost and direct sunlight" },
    { label: "After opening", value: "Refrigerate and consume within 2 days" },
    { label: "Range", value: "White · Rosé · Red" },
  ],
  sheetsLabel: "Product sheets",
  sheetsBody:
    "Tasting notes, specification and suggested wine list naming for each expression. Download\u00a0the print ready PDF sheets below.",
  sheetCta: "Download sheet",
  formLabel: "Wholesale inquiry",
  formIntro:
    "Tell us about your venue and we will come back with pricing, samples and delivery options.",
};

export const whereToBuy = {
  metaTitle: "Where to buy — Sari",
  metaDescription:
    "Find Sari in restaurants, wine bars, hotels and premium retail, or write to us and we will find a way to get it to you.",
  eyebrow: "Where to buy",
  title: "Find a bottle",
  intro:
    "Sari is arriving in restaurants, wine bars, hotels and premium retail. The list grows every month.",
  fallbackTitle: "Not near you?",
  fallbackBody:
    "Write to us and we will find a way — direct delivery, a partner nearby, or a venue that should be listing Sari.",
  fallbackCta: "Ask us",
};

export const contact = {
  metaTitle: "Contact — Sari by Tajna Vineyards & Winery",
  metaDescription:
    "Contact Sari by Tajna Vineyards & Winery in Vráble, Slovakia: email, address, Instagram and a direct inquiry form.",
  eyebrow: "Contact",
  title: "Write to us",
  lead: "For listings, samples, press or anything else — we read everything.",
  detailsLabel: "Details",
};

export const form = {
  fields: {
    name: "Full name",
    company: "Company",
    role: "Role",
    email: "Email",
    phone: "Phone",
    country: "Country",
    businessType: "Business type",
    message: "Message",
  },
  businessTypes: [
    "Restaurant",
    "Wine bar",
    "Hotel",
    "Retail",
    "Distributor",
    "Event or wedding",
    "Other",
  ],
  optional: "optional",
  consent:
    "I agree to Sari processing the details above in order to answer my inquiry, in line with the privacy policy.",
  submit: "Send inquiry",
  submitting: "Sending…",
  successTitle: "Thank you.",
  successBody:
    "Your inquiry is with us. We usually reply within two working days.",
  errorTitle: "That did not go through.",
  errorBody: "Please try again, or write to us at",
  required: "This field is required.",
  invalidEmail: "Please enter a valid email address.",
  consentRequired: "Please confirm the consent to continue.",
};

export const footer = {
  tagline: "Wine culture without the alcohol.",
  columnsLabel: {
    explore: "Explore",
    contact: "Contact",
    legal: "Legal",
  },
  legalLinks: [
    { to: "/legal/privacy", label: "Privacy" },
    { to: "/legal/terms", label: "Terms" },
    { to: "/legal/cookies", label: "Cookies" },
  ],
  rights: "All rights reserved.",
};

export const legal = {
  privacy: {
    title: "Privacy policy",
    updated: "Last updated: August 2026",
    sections: [
      {
        heading: "Who we are",
        body: "This website is operated by TAJNA s.r.o., Levická 743, 952 01 Vráble, Slovakia, the producer of Sari.",
      },
      {
        heading: "What we collect",
        body: "We process the details you send through our inquiry and newsletter forms: name, company, role, email, phone, country, business type and your message. We use them only to answer you or to send the newsletter you asked for.",
      },
      {
        heading: "Legal basis and retention",
        body: "We process inquiry data on the basis of our legitimate interest in responding to you, and newsletter data on the basis of your consent. We keep inquiries for as long as our business relationship requires and delete newsletter data as soon as you unsubscribe.",
      },
      {
        heading: "Your rights",
        body: "You can ask for access, correction, deletion or portability of your data, and you can withdraw consent at any time. Write to info@sarisparkling.com.",
      },
    ],
  },
  terms: {
    title: "Terms of use",
    updated: "Last updated: August 2026",
    sections: [
      {
        heading: "Use of this site",
        body: "This website presents the Sari range and lets you contact us. It does not sell products online. Content is provided for information and may change without notice.",
      },
      {
        heading: "Intellectual property",
        body: "The Sari name, wordmark, label artwork, photography and texts belong to TAJNA s.r.o. and may not be reproduced without written permission.",
      },
      {
        heading: "Product information",
        body: "Nutritional values, ingredients and serving guidance are given in good faith. The label on the bottle is always the binding source.",
      },
      {
        heading: "Liability",
        body: "We do our best to keep this site accurate and available, but we cannot guarantee uninterrupted access or that every detail is free of error.",
      },
    ],
  },
  cookies: {
    title: "Cookie policy",
    updated: "Last updated: August 2026",
    sections: [
      {
        heading: "What we use",
        body: "This site runs with the minimum necessary to work. We do not set advertising cookies.",
      },
      {
        heading: "Analytics",
        body: "If analytics are introduced, they will be loaded only after you agree, and this page will be updated to list them.",
      },
      {
        heading: "Managing cookies",
        body: "You can clear or block cookies in your browser settings at any time. Doing so does not affect your ability to browse this site.",
      },
    ],
  },
};
