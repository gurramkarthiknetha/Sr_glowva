// src/components/Categories/index.tsx
import Link from "next/link";

const categories = [
  { image: "/images/earring.jpg", title: "Earrings" },
  { image: "/images/tools.jpg",   title: "Jewellery Tools" },
  { image: "/images/earring.jpg", title: "Bridal Sets" },
  { image: "/images/tools.jpg",   title: "Hand Tools" },
  { image: "/images/earring.jpg", title: "Studs" },
  { image: "/images/tools.jpg",   title: "Cutters" },
  { image: "/images/earring.jpg", title: "Hoops" },
  { image: "/images/tools.jpg",   title: "Pliers" },
  { image: "/images/earring.jpg", title: "Drops & Dangles" },
  // the tenth slot will be the “View more” card below
];

export default function Categories() {
  return (
    <section className="w-full py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 text-center mb-10">
          Shop by Category
        </h2>

        {/* horizontal scroll row */}
        <div className="flex gap-4 overflow-x-auto no-scrollbar">
          {categories.map((cat, idx) => (
            <div
              key={idx}
              className="min-w-[140px] bg-white rounded-xl shadow border border-gray-100 flex-shrink-0 p-4 text-center hover:shadow-lg transition-shadow"
            >
              <img
                src={cat.image}
                alt={cat.title}
                className="w-full h-28 object-cover rounded-md mb-3"
              />
              <div className="font-semibold text-sm text-gray-800">
                {cat.title}
              </div>
            </div>
          ))}

          {/* view‑more card */}
          <Link
            href="/categoriesPage"
            className="min-w-[140px] bg-gray-50 rounded-xl shadow-inner border border-dashed border-gray-300 flex-shrink-0 p-4 flex flex-col items-center justify-center hover:bg-gray-100 transition-colors"
          >
            <span className="text-xl font-bold text-gray-600">+4</span>
            <span className="mt-1 text-sm font-medium text-gray-500">
              View&nbsp;more
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
