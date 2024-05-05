import babyProds from "@/assets/babyProducts.png";
import cookingessentials from "@/assets/cooking-essentials.png";
import frozen from "@/assets/frozen.png";
import stationary from "@/assets/stationeries.png";
import car from "@/assets/car.png";
import foodcupboard from "@/assets/food-cupboard.png";

import demo from "@/assets/cat.jpg";

export const api_url = "http://api.boroapi.com/";

export const categories = [
  {
    label: "pet care and accesories",
    image: babyProds,
    href: "",
    color: "lightgreen",
  },
  {
    label: "cooking essentials",
    image: cookingessentials,
    href: "",
    color: "lightblue",
  },
  {
    label: "frozen foods",
    image: frozen,
    href: "",
    color: "lightgrey",
  },
  {
    label: "mother & baby",
    image: babyProds,
    href: "",
    color: "orange",
  },
  {
    label: "stationaries",
    image: stationary,
    href: "",
    color: "skyblue",
  },
  {
    label: "cars & motorcycles",
    image: car,
    href: "",
    color: "#F0EBB6",
  },
  {
    label: "food cupboard",
    image: foodcupboard,
    href: "",
    color: "#B6C5F0",
  },
  {
    label: "mother & baby",
    image: babyProds,
    href: "",
    color: "orange",
  },
  {
    label: "stationaries",
    image: stationary,
    href: "",
    color: "skyblue",
  },
];

export const products = [
  {
    id: "(538) 551-8711",
    title: "Kenneth Swanson",
    price: 454,
    image: demo,
    discountedPrice: "85",
    weight: "946",
    stock: "33",
  },
  {
    id: "(267) 893-6603",
    title: "Bertie Daniels",
    price: 215,
    image: demo,
    discountedPrice: "58",
    weight: "892",
    stock: "46",
  },
  {
    id: "(758) 767-1935",
    title: "Bernice Wood",
    price: 107,
    image: demo,
    discountedPrice: "272",
    weight: "360",
    stock: "97",
  },
  {
    id: "(203) 303-5934",
    title: "Lola Ortega",
    price: 70,
    image: demo,
    discountedPrice: "251",
    weight: "959",
    stock: "47",
  },
  {
    id: "(775) 454-4397",
    title: "Sylvia Franklin",
    price: 248,
    image: demo,
    discountedPrice: "271",
    weight: "758",
    stock: "21",
  },
  {
    id: "(463) 998-3595",
    title: "Keith Weaver",
    price: 368,
    image: demo,
    discountedPrice: "81",
    weight: "795",
    stock: "",
  },
];
