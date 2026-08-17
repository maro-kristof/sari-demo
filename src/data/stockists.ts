export type Stockist = {
  name: string;
  city: string;
  country: string;
  type: string;
  url?: string;
};

export const stockists: Stockist[] = [
  {
    name: "Tajna Vineyards & Winery",
    city: "Wine Shop Vráble\nLevická 743/59, 952 01 Vráble, Slovakia",
    country: "",
    type: "WINE SHOP",
    url: "https://share.google/vFWGC29GImv3e5Q3i",
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
