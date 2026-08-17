export type Stockist = {
  name: string;
  city: string;
  country: string;
  type: "Restaurant" | "Wine bar" | "Hotel" | "Retail" | "Online";
  url?: string;
};

export const stockists: Stockist[] = [
  {
    name: "Tajna Vineyards & Winery",
    city: "Vráble",
    country: "Slovakia",
    type: "Retail",
    url: "https://www.vinotajna.sk/product-category/sari/",
  },
  {
    name: "Sari Online",
    city: "Ships across Slovakia",
    country: "Slovakia",
    type: "Online",
  },
  {
    name: "Selected restaurants & wine bars",
    city: "Bratislava",
    country: "Slovakia",
    type: "Wine bar",
  },
  {
    name: "Selected hotels",
    city: "Nitra region",
    country: "Slovakia",
    type: "Hotel",
  },
];
