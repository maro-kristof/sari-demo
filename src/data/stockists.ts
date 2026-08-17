export type Stockist = {
  name: string;
  city: string;
  country: string;
  type: string;
  url?: string;
};

export const stockists: Stockist[] = [
  {
    name: "Wine Shop Vráble - Tajna Vineyards & Winery",
    city: "Levická 743/59, 952 01 Vráble, Slovakia",
    country: "",
    type: "WINE SHOP",
    url: "https://share.google/vFWGC29GImv3e5Q3i",
  },
  {
    name: "Sari Online",
    city: "Ships across Europe",
    country: "",
    type: "Online",
    url: "https://www.vinotajna.sk/product-category/sari/",
  },
  {
    name: "Selected restaurant, wine bars & hotels",
    city: "Europe",
    country: "",
    type: "Wine bar",
  },
];
