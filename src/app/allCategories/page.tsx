// src/app/allCategories/page.tsx

"use client";

import Link from "next/link";

const categories = [
  {
    title: "Latkan / Hangings / Tessels",
    image: "/images/tools.jpg",
  },
  {
    title: "Csc Accessories Point",
    image: "/images/earring.jpg",
  },
  {
    title: "Packing Fillers / Grass / Shredd",
    image: "/images/packing.jpg",
  },
  {
    title: "Only Hardner",
    image: "/images/hardner.jpg",
  },
  {
    title: "Bulk Purchasing",
    image: "/images/bulk.jpg",
  },
  {
    title: "Moulds",
    image: "/images/mould.jpg",
  },
  {
    title: "Pigments",
    image: "/images/pigment.jpg",
  },
  {
    title: "Tools",
    image: "/images/tools.jpg",
  },
  {
    title: "Resin",
    image: "/images/resin.jpg",
  },
  {
    title: "MDF Cut Outs",
    image: "/images/mdf.jpg",
  },
];

export default function AllCategories() {
  return (
    <section className="w-full py-12 px-4 bg-white text-gray-800">
      <h1 className="text-3xl font-bold text-center mb-8">All Categories</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
        {categories.map((cat, idx) => {
          const slug = cat.title.toLowerCase().replace(/\s+/g, "-");

          return (
            <Link
              key={idx}
              href={`/category/${slug}`}
              className="block border rounded-lg overflow-hidden hover:shadow-lg transition text-center bg-white"
            >
              <img
                src={cat.image}
                alt={cat.title}
                className="w-full h-40 object-cover"
              />
              <div className="px-3 py-2 text-sm font-semibold">
                {cat.title}
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
