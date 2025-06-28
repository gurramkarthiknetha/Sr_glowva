"use client";

import { useState, useMemo } from "react";
import Link from "next/link";

const PRODUCTS = [
  {
    id: 1,
    name: "Plain Resin Rectangle Tray Mold",
    price: 360,
    original: 420,
    discount: 14,
    image:
      "https://shoopy.b-cdn.net/112396/SKU-0228_0-1733924101147.jpg?format=webp&width=600",
    category: "Moulds",
  },
  {
    id: 2,
    name: "9 in1 Cavity 2\" Inch Agate Round Mold",
    price: 210,
    original: 350,
    discount: 40,
    image:
      "https://shoopy.b-cdn.net/112396/SKU-1827_0-1700142623560.jpg?format=webp&width=600",
    category: "Moulds",
  },
  {
    id: 3,
    name: "Small Bubble Candle Mold 5.5*3Cm",
    price: 50,
    original: 100,
    discount: 50,
    image:
      "https://shoopy.b-cdn.net/112396/SKU-1678_0-1696415824238.jpg?format=webp&width=600",
    category: "Moulds",
  },
  {
    id: 4,
    name: "10\" Inches Round Agate Mold",
    price: 280,
    original: 450,
    discount: 38,
    image:
      "https://shoopy.b-cdn.net/112396/SKU-1127_0-1700142826838.jpg?format=webp&width=600",
    category: "Moulds",
  },
  {
    id: 5,
    name: "16\" INCH ROUND WOOD MDF 1PC PACK 4MM",
    price: 125,
    original: 150,
    discount: 17,
    image:
      "https://shoopy.b-cdn.net/112396/SKU-1684_0-1696417114471.jpg?format=webp&width=600",
    category: "MDF Cut Outs",
  },
  {
    id: 6,
    name: "20\"INCH ROUND WOOD MDF 1PC PACK 4MM",
    price: 180,
    original: 250,
    discount: 28,
    image:
      "https://shoopy.b-cdn.net/112396/SKU-1686_0-1700142950657.jpg?format=webp&width=600",
    category: "MDF Cut Outs",
  },
  {
    id: 7,
    name: "18\" INCH ROUND WOOD MDF 1PC PACK 4MM",
    price: 150,
    original: 300,
    discount: 50,
    image:
      "https://shoopy.b-cdn.net/112396/SKU-1685_0-1696417199710.jpg?format=webp&width=600",
    category: "MDF Cut Outs",
  },
  {
    id: 8,
    name: "Paper Grass (20 Packs multi Colours)",
    price: 850,
    original: 1000,
    discount: 15,
    image:
      "https://shoopy.b-cdn.net/112396/SKU-1937_0-1700143124697.jpg?format=webp&width=600",
    category: "Packing Fillers / Grass / Shredd",
  },
  {
    id: 9,
    name: "Large Size Jump Rings Silver (20 Grms) Double Ring",
    price: 45,
    original: 65,
    discount: 31,
    image:
      "https://shoopy.b-cdn.net/112396/SKU-2051_0-1700143234985.jpg?format=webp&width=600",
    category: "Csc Accessories Point",
  },
  {
    id: 10,
    name: "7\" Inches Wood Easel Stand Without Screw",
    price: 35,
    original: 55,
    discount: 36,
    image:
      "https://shoopy.b-cdn.net/112396/SKU-1378_0-1696417500195.jpg?format=webp&width=600",
    category: "Tools",
  },
  {
    id: 11,
    name: "curve Agate Square Mold (10.5×10cm )",
    price: 70,
    original: 85,
    discount: 18,
    image:
      "https://shoopy.b-cdn.net/112396/SKU-10510cm_0-1700143345264.jpg?format=webp&width=600",
    category: "Moulds",
  },
  {
    id: 12,
    name: "3 Inches SQUARE MDF 2MM BASE 5PC",
    price: 60,
    original: 100,
    discount: 40,
    image:
      "https://shoopy.b-cdn.net/112396/SKU-0837_0-1700143391146.jpg?format=webp&width=600",
    category: "MDF Cut Outs",
  },
];

export default function ProductsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories = useMemo(() => {
    const map = new Map<string, number>();
    PRODUCTS.forEach((p) => {
      map.set(p.category, (map.get(p.category) || 0) + 1);
    });
    return Array.from(map.entries()).map(([name, count]) => ({ name, count }));
  }, []);

  const searchResults = useMemo(() => {
    if (!searchTerm.trim()) return [];
    return categories.filter((c) =>
      c.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [categories, searchTerm]);

  const visibleProducts = useMemo(() => {
    return selectedCategory
      ? PRODUCTS.filter((p) => p.category === selectedCategory)
      : PRODUCTS;
  }, [selectedCategory]);

  return (
    <div className="flex w-full min-h-screen bg-white">
      <aside className="w-72 border-r px-4 py-6 shrink-0">
        <header className="flex justify-between items-center mb-4">
          <h3 className="font-bold text-lg">Filters</h3>
          <button
            className="text-sm text-orange-500"
            onClick={() => setSelectedCategory(null)}
          >
            Clear All
          </button>
        </header>

        <input
          type="text"
          placeholder="Search categories..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-3 py-2 border rounded-md text-sm mb-2"
        />

        {searchTerm && (
          <div className="mb-4 border rounded-md p-2 max-h-40 overflow-y-auto">
            {searchResults.length ? (
              <ul className="space-y-1 text-sm">
                {searchResults.map((cat) => (
                  <li key={cat.name} className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={selectedCategory === cat.name}
                      onChange={() =>
                        setSelectedCategory(
                          selectedCategory === cat.name ? null : cat.name
                        )
                      }
                      className="accent-orange-500 w-4 h-4"
                    />
                    <span className="text-gray-700">
                      {cat.name}
                      <span className="text-gray-400"> ({cat.count})</span>
                    </span>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-xs text-gray-500">No category found</p>
            )}
          </div>
        )}

        <h4 className="font-semibold mb-2">Category</h4>
        <ul className="space-y-2 max-h-[60vh] overflow-y-auto pr-1 text-sm">
          {categories.map((cat) => (
            <li key={cat.name} className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={selectedCategory === cat.name}
                onChange={() =>
                  setSelectedCategory(
                    selectedCategory === cat.name ? null : cat.name
                  )
                }
                className="accent-orange-500 w-4 h-4"
              />
              <span className="text-gray-700">
                {cat.name}
                <span className="text-gray-400"> ({cat.count})</span>
              </span>
            </li>
          ))}
        </ul>

        <Link href="#" className="text-sm text-orange-500 inline-block mt-4">
          See More +
        </Link>
      </aside>

      <main className="flex-1 p-6 overflow-y-auto">
        <h2 className="text-2xl font-bold mb-6">Trending Products</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
          {visibleProducts.map((product) => (
            <article
              key={product.id}
              className="bg-white rounded-xl shadow-md border hover:shadow-lg transition flex flex-col"
            >
              <figure className="relative p-4 pb-0">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-contain mx-auto"
                />
                <span className="absolute top-3 right-3 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded">
                  {product.discount}% off
                </span>
              </figure>

              <div className="flex-1 flex flex-col justify-between p-4 pt-2">
                <div>
                  <h3 className="text-sm font-semibold text-gray-900 line-clamp-2">
                    {product.name}
                  </h3>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-orange-500 font-bold text-base">
                      ₹{product.price}
                    </span>
                    <span className="line-through text-sm text-gray-400">
                      ₹{product.original}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2 mt-4">
                  <button
                    className="border border-orange-400 rounded-full p-2 text-orange-500 hover:bg-orange-50"
                    aria-label="WhatsApp"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      className="w-4 h-4"
                    >
                      <path d="M20.52 3.48A12.07 12.07 0 0 0 12 0C5.37 0 0 5.37 0 12c0 2.11.55 4.17 1.6 6.01L0 24l6.18-1.62A11.94 11.94 0 0 0 12 24c6.63 0 12-5.37 12-12 0-3.19-1.24-6.19-3.48-8.52z" />
                    </svg>
                  </button>
                  <button className="flex-1 border border-orange-400 text-orange-500 font-semibold rounded-full py-2 hover:bg-orange-50 text-sm">
                    + Add
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
}
