export interface Product {
  id: number;
  name: string;
  price: number;
  original: number;
  discount: number;
  image: string;
  category: string;
  slug: string;
}

const PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Ganpati Frame Mold",
    price: 200,
    original: 350,
    discount: 43,
    image: "/images/ganapathi_frame_model.jpg",
    category: "Moulds",
    slug: "ganpati-frame-mold",
  },
  {
    id: 2,
    name: "Drop Pendent And Earrings Mold",
    price: 75,
    original: 105,
    discount: 29,
    image: "/images/earrings_mold.jpg",
    category: "Moulds",
    slug: "drop-pendent-earrings-mold",
  },
  {
    id: 3,
    name: "Ash Tray Mold",
    price: 120,
    original: 165,
    discount: 27,
    image: "/images/ash_mold.jpg",
    category: "Moulds",
    slug: "ash-tray-mold",
  },
  {
    id: 4,
    name: "Fish Tail Bookmark Mold",
    price: 30,
    original: 65,
    discount: 54,
    image: "/images/fish_tail_mold.jpg",
    category: "Moulds",
    slug: "fish-tail-bookmark-mold",
  },
  {
    id: 5,
    name: "Diamond Cut Mold (6.9cm)",
    price: 72,
    original: 105,
    discount: 31,
    image: "/images/diamond_cut_mold.jpg",
    category: "Moulds",
    slug: "diamond-cut-mold-6-9cm",
  },
  {
    id: 6,
    name: "Dry Pressed Flower",
    price: 220,
    original: 285,
    discount: 23,
    image: "/images/dry_pressed_flower.jpg",
    category: "Decorative Items",
    slug: "dry-pressed-flower",
  },
  {
    id: 7,
    name: "Resin Rakhi Mold",
    price: 82,
    original: 100,
    discount: 18,
    image: "/images/resin_rakhi_mold.jpg",
    category: "Moulds",
    slug: "resin-rakhi-mold",
  },
  {
    id: 8,
    name: "Resin Pigment Peacock Blue",
    price: 60,
    original: 80,
    discount: 25,
    image: "/images/resin_pigment.jpg",
    category: "Pigments",
    slug: "resin-pigment-peacock-blue",
  },
  {
    id: 9,
    name: "Resin Pigment Ice Blue",
    price: 60,
    original: 80,
    discount: 25,
    image: "/images/earring.jpg",
    category: "Pigments",
    slug: "resin-pigment-ice-blue",
  },
  {
    id: 10,
    name: "6\"9.5 Inches Rectangle Deep Mold",
    price: 500,
    original: 750,
    discount: 33,
    image: "/images/earring.jpg",
    category: "Moulds",
    slug: "rectangle-deep-mold-6-9-5-inches",
  },
  {
    id: 11,
    name: "Multi Press Hydrangea",
    price: 110,
    original: 200,
    discount: 45,
    image: "/images/earring.jpg",
    category: "Decorative Items",
    slug: "multi-press-hydrangea",
  },
  {
    id: 12,
    name: "Wall Hanging Name Plate Mold",
    price: 220,
    original: 350,
    discount: 37,
    image: "/images/earring.jpg",
    category: "Moulds",
    slug: "wall-hanging-name-plate-mold",
  },
  {
    id: 13,
    name: "Luggage Tags And Wax Sachet Mold",
    price: 155,
    original: 220,
    discount: 30,
    image: "/images/earring.jpg",
    category: "Moulds",
    slug: "luggage-tags-wax-sachet-mold",
  }
];

export default PRODUCTS;
