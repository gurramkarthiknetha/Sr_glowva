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
		image: "/images/tools.jpg",
	},
	{
		title: "Only Hardner",
		image: "/images/earring.jpg",
	},
	{
		title: "Bulk Purchasing",
		image: "/images/tools.jpg",
	},
	{
		title: "Moulds",
		image: "/images/earring.jpg",
	},
	{
		title: "Pigments",
		image: "/images/earring.jpg",
	},
	{
		title: "Tools",
		image: "/images/tools.jpg",
	},
	{
		title: "Resin",
		image: "/images/earring.jpg",
	},
	{
		title: "MDF Cut Outs",
		image: "/images/tools.jpg",
	},
];

export default function AllCategories() {
	return (
		<section className="w-full py-12 px-4 bg-white text-gray-800">
			<h1 className="text-3xl font-bold text-center mb-8">
				All Categories
			</h1>
			<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
				{categories.map((cat, idx) => {
					const slug = cat.title.toLowerCase().replace(/\s+/g, "-");
					const defaultImage =
						idx % 2 === 0
							? "/images/earring.jpg"
							: "/images/tools.jpg";
					const imageSrc =
						cat.image && cat.image.trim() !== ""
							? cat.image
							: defaultImage;

					return (
						<Link
							key={idx}
							href={`/category/${slug}`}
							className="block border rounded-lg overflow-hidden hover:shadow-lg transition text-center bg-white"
						>
							<img
								src={imageSrc}
								alt={cat.title}
								className="w-full h-40 object-cover"
								onError={(e) => {
									const target = e.target as HTMLImageElement;
									if (!target.dataset.fallback) {
										target.src = defaultImage;
										target.dataset.fallback = "true";
									} else {
										target.src =
											"data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";
									}
								}}
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
