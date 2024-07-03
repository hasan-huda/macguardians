// bg-blue-950 border-blue-950
// bg-zinc-900 border-zinc-900
// bg-rose-950 border-rose-950

import { PRODUCT_PRICES } from "@/config/product";

export const COLORS = [
  { label: "Black", value: "black", tw: "zinc-900" },
  { label: "Blue", value: "blue", tw: "blue-950" },
  { label: "Rose", value: "rose", tw: "rose-950" },
] as const;

// export const MODELS = {
//   name: "models",
//   options: [
//     {
//       label:"iPhone X",
//       value: "iphonex",
//     },
//     {
//       label:"iPhone 11",
//       value: "iphone11",
//     },
//     {
//       label:"iPhone 12",
//       value: "iphone12",
//     },
//     {
//       label:"iPhone 13",
//       value: "iphone13",
//     },
//     {
//       label:"iPhone 14",
//       value: "iphone14",
//     },
//     {
//       label:"iPhone 15",
//       value: "iphone15",
//     },
//   ]
// } as const

export const MODELS = {
  name: "models",
  options: [
    {
      label: "Macbook Air",
      value: "macbookAir",
    },
    {
      label: "Macbook Pro 12-inch",
      value: "macbookPro12",
    },
    {
      label: "Macbook Pro 13-inch",
      value: "macbookPro13",
    },
    {
      label: "Macbook Pro 14-inch",
      value: "macbookPro14",
    },
    {
      label: "Macbook Pro 16-inch",
      value: "macbookPro16",
    },
  ],
} as const;

export const MATERIALS = {
  name: "material",
  options: [
    {
      label: "Silicone",
      value: "silicone",
      description: undefined,
      price: PRODUCT_PRICES.material.silicone,
    },
    {
      label: "Soft Polycarbonate",
      value: "polycarbonate",
      description: "Scratch-resistant coating",
      price: PRODUCT_PRICES.material.polycarbonate,
    },
    {
      label: "Aluminum",
      value: "aluminum",
      description: "Sleek, Premium, and Sturdy",
      price: PRODUCT_PRICES.material.aluminum,
    },
  ],
} as const;

export const FINISHES = {
  name: "finish",
  options: [
    {
      label: "Smooth Finish",
      value: "smooth",
      description: undefined,
      price: PRODUCT_PRICES.finish.smooth,
    },
    {
      label: "Matte",
      value: "matte",
      description: "Reduced glare and fingerprints",
      price: PRODUCT_PRICES.finish.matte,
    },
    {
      label: "Textured",
      value: "textured",
      description: "Soft grippy texture",
      price: PRODUCT_PRICES.finish.textured,
    },
    {
      label: "Glossy",
      value: "glossy",
      description: "Shiny, Reflective, and Premium look",
      price: PRODUCT_PRICES.finish.glossy,
    },
  ],
} as const;
