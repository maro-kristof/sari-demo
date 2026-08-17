/**
 * Single source of truth for product data.
 * Pages render from this file — never hardcode product copy in components.
 */

import bottleWhite from "@/assets/bottle-white.png.asset.json";
import bottleRose from "@/assets/bottle-rose.png.asset.json";
import bottleRed from "@/assets/bottle-red.png.asset.json";
import flatRose from "@/assets/flat-rose.jpg.asset.json";
import flatRed from "@/assets/flat-red.jpg.asset.json";
import sariRedFlat from "@/assets/sari-red-flat.jpg.asset.json";
import whiteTray from "@/assets/white-tray.jpg.asset.json";
import whiteBottleHands from "@/assets/white-bottle-hands.jpg.asset.json";
import trayGlasses from "@/assets/tray-glasses.jpg.asset.json";
import vineyardGlass from "@/assets/vineyard-glass.jpg.asset.json";
import tableDinner from "@/assets/table-dinner.jpg.asset.json";
import pourRed from "@/assets/pour-red.jpg.asset.json";
import flatRedScene from "@/assets/flat-red.jpg.asset.json";

export type ProductSlug = "white" | "rose" | "red";

export type Product = {
  slug: ProductSlug;
  name: string;
  shortName: string;
  accentVar: string;
  tagline: string;
  descriptors: string[];
  descriptorLine: string;
  tastingNote: string;
  spec: { label: string; value: string }[];
  ingredients: string;
  pairing: string[];
  occasion: string[];
  serving: string;
  storage: string;
  wineListName: string;
  bottleImage: string;
  bottleAlt: string;
  sceneImage: string;
  sceneAlt: string;
  /** Secondary and tertiary photos shown in the product gallery. */
  gallery: { src: string; alt: string }[];
  metaDescription: string;
};

const SHARED_TAGLINE =
  "Premium non-alcoholic wine alternative, made by winemakers from botanicals and fruits.";

export const products: Product[] = [
  {
    slug: "white",
    name: "Sari White",
    shortName: "White",
    accentVar: "var(--sari-white)",
    tagline: SHARED_TAGLINE,
    descriptors: ["Fresh", "Herbal", "Gently spiced"],
    descriptorLine: "Fresh · herbal · gently spiced",
    tastingNote:
      "Fresh, lively apple and grape with a pronounced accent of ginger and lemongrass. Verjuice brings clean acidity, complemented by delicate herbal and floral notes of chamomile, wild thyme, yarrow and hops, finishing slightly salty and dry ",
    spec: [
      { label: "Energy / 100 ml", value: "23 kcal" },
      { label: "Residual sugar", value: "5.4 g · dry" },
      { label: "Bubbles", value: "Fine" },
      { label: "Serving temperature", value: "6 – 8 °C" },
      { label: "Alcohol", value: "0 %" },
      { label: "Volume", value: "0.75 l" },
      { label: "Bottles per case", value: "6" },
    ],
    ingredients:
      "Water, apple, grape, ginger, verjuice from unripe grapes, salt, chamomile, yarrow, thyme, hops, lemongrass.",
    pairing: [
      "Pike perch",
      "Young courgette",
      "Fennel",
      "Goat cheese",
      "Green herbs",
      "Mussels",
    ],
    occasion: ["Aperitif", "Welcome drink", "Tasting dinner", "Garden party"],
    serving:
      "Serve well chilled in a white or sparkling wine glass, neat or over ice.",
    storage:
      "Store away from frost and direct sunlight. Refrigerate after opening and consume within 2 days.",
    wineListName:
      "Sari White, non alcoholic sparkling wine alternative, Tajna Vineyards & Winery",
    bottleImage: bottleWhite.url,
    bottleAlt:
      "Bottle of Sari White with a sage green label and gold script, on a dark background",
    sceneImage: flatRed.url,
    sceneAlt:
      "Bottle of Sari Red laid on a plate with sour cherries, figs and dark fruit",
    gallery: [
      { src: whiteTray.url, alt: "Bottle of Sari White on a silver tray with grapes, apple, ginger and dried flowers" },
      { src: whiteBottleHands.url, alt: "Hands holding a bottle of Sari White against a tiled wall" },
    ],
    metaDescription:
      "Sari White: fresh, herbal and gently spiced non alcoholic sparkling alternative to wine. 23 kcal per 100 ml, dry, 0% alcohol.",
  },
  {
    slug: "rose",
    name: "Sari Rosé",
    shortName: "Rosé",
    accentVar: "var(--sari-rose)",
    tagline: SHARED_TAGLINE,
    descriptors: ["Fruity", "Fresh", "Floral", "Herbal"],
    descriptorLine: "Fruity · fresh · floral · herbal",
    tastingNote:
      "A juicy apple and grape base joined by raspberry and fresh, gently tart rhubarb. Hibiscus and rosehip lift the fruit, while lemon balm, basil and rosemary bring herbal complexity and, together with the verjuice, a fresh and elegant finish.",
    spec: [
      { label: "Energy / 100 ml", value: "34 kcal" },
      { label: "Residual sugar", value: "8.3 g · off dry" },
      { label: "Bubbles", value: "Fine" },
      { label: "Serving temperature", value: "6 – 8 °C" },
      { label: "Alcohol", value: "0 %" },
      { label: "Volume", value: "0.75 l" },
      { label: "Bottles per case", value: "6" },
    ],
    ingredients:
      "Water, apple, grape, raspberry, rhubarb, verjuice from unripe grapes, salt, hibiscus, rosehip, lemon balm, basil, rosemary.",
    pairing: [
      "Poultry",
      "Salmon",
      "Caprese",
      "Rhubarb",
      "Parmesan",
      "Pizza and focaccia",
    ],
    occasion: [
      "Aperitif",
      "Welcome drink",
      "Tasting dinner",
      "Long lunch or brunch",
    ],
    serving:
      "Serve well chilled in a white or sparkling wine glass, neat or over ice.",
    storage:
      "Store away from frost and direct sunlight. Refrigerate after opening and consume within 2 days.",
    wineListName:
      "Sari Rosé, non alcoholic sparkling wine alternative, Tajna Vineyards & Winery",
    bottleImage: bottleRose.url,
    bottleAlt:
      "Bottle of Sari Rosé with a dusty pink label and gold script, on a dark background",
    sceneImage: flatRose.url,
    sceneAlt:
      "Bottle of Sari Rosé laid on a plate with raspberries, rhubarb and fresh herbs",
    gallery: [
      { src: vineyardGlass.url, alt: "A glass of Sari Rosé held in the vineyard" },
      { src: tableDinner.url, alt: "Sari poured at a long table set for dinner" },
    ],
    metaDescription:
      "Sari Rosé: fruity, floral and herbal non alcoholic sparkling alternative to wine. 34 kcal per 100 ml, off dry, 0% alcohol.",
  },
  {
    slug: "red",
    name: "Sari Red",
    shortName: "Red",
    accentVar: "var(--sari-red)",
    tagline: SHARED_TAGLINE,
    descriptors: ["Dark fruit", "Structured", "Gently tannic"],
    descriptorLine: "Dark fruit · structured · gently tannic",
    tastingNote:
      "A bold sour cherry and red grape character meets aronia, blackcurrant and fig for depth and concentrated fruit. Beetroot adds an earthy tone, thyme a herbal spice, and tannin from toasted oak builds structure and a longer, drier finish.",
    spec: [
      { label: "Energy / 100 ml", value: "24 kcal" },
      { label: "Residual sugar", value: "5.4 g · dry" },
      { label: "Bubbles", value: "Very fine" },
      { label: "Serving temperature", value: "10 – 12 °C" },
      { label: "Alcohol", value: "0 %" },
      { label: "Volume", value: "0.75 l" },
      { label: "Bottles per case", value: "6" },
    ],
    ingredients:
      "Water, red grape, sour cherry, aronia, fig, blackcurrant, beetroot, verjuice from unripe grapes, salt, thyme, oak barrel tannin.",
    pairing: [
      "Beef tenderloin",
      "Duck",
      "Mushrooms",
      "Aged cheese",
      "Pasta with ragù",
    ],
    occasion: ["Tasting dinner", "Tasting", "Tapas", "Long conversations"],
    serving:
      "Serve lightly chilled in a universal or red wine glass, without ice.",
    storage:
      "Store away from frost and direct sunlight. Refrigerate after opening and consume within 2 days.",
    wineListName:
      "Sari Red, non alcoholic sparkling wine alternative, Tajna Vineyards & Winery",
    bottleImage: bottleRed.url,
    bottleAlt:
      "Bottle of Sari Red with a crimson label and gold script, on a dark background",
    sceneImage: sariRedFlat.url,
    sceneAlt:
      "Bottle of Sari Red with a crimson label on a plate with grapes, beetroot, plums and dark fruit",
    gallery: [
      { src: flatRedScene.url, alt: "Bottle of Sari Red laid on a plate with sour cherries, figs and dark fruit" },
      { src: pourRed.url, alt: "Sari Red being poured into a wine glass" },
    ],
    metaDescription:
      "Sari Red: dark fruit, structured and gently tannic non alcoholic sparkling alternative to wine. 24 kcal per 100 ml, dry, 0% alcohol.",
  },
];

export const PASTEURISED_NOTE = "Pasteurised, no preservatives.";

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductNeighbours(slug: string) {
  const i = products.findIndex((p) => p.slug === slug);
  if (i === -1) return { prev: undefined, next: undefined };
  return {
    prev: products[(i - 1 + products.length) % products.length],
    next: products[(i + 1) % products.length],
  };
}
