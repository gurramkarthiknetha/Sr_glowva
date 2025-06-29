"use client";

// src/components/Categories/index.tsx
import Link from "next/link";

const categories = [
	{ image: "/images/earring.jpg", title: "Earrings" },
	{ image: "/images/tools.jpg", title: "Jewellery Tools" },
	{ image: "/images/earring.jpg", title: "Bridal Sets" },
	{ image: "/images/tools.jpg", title: "Hand Tools" },
	{ image: "/images/earring.jpg", title: "Studs" },
	{ image: "/images/tools.jpg", title: "Cutters" },
	{ image: "/images/earring.jpg", title: "Hoops" },
	{ image: "/images/tools.jpg", title: "Pliers" },
	{ image: "/images/earring.jpg", title: "Drops & Dangles" },
	// the tenth slot will be the “View more” card below
];

export default function Categories() {
	return (
		<section className="w-full py-16 bg-gradient-to-l from-[#b5ead7] via-[#f7cac9] to-[#355c7d] rounded-3xl shadow-2xl border-4 border-double border-[#355c7d] mx-auto mt-8">
			<div className="max-w-7xl mx-auto px-4">
				<h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#355c7d] via-[#f7786b] to-[#b5ead7] text-center mb-10 drop-shadow-xl tracking-widest font-serif animate-pulse">
					Shop by Category
				</h2>

				{/* horizontal scroll row */}
  				<div className="flex gap-4 overflow-x-auto no-scrollbar max-w-full pb-2" style={{scrollbarWidth:'thin', maxWidth:'100vw'}}>
					{categories.map((cat, idx) => {
						// Use fallback if image is missing or empty
						const defaultImage =
							idx % 2 === 0 ? "/images/earring.jpg" : "/images/tools.jpg";
						const imageSrc =
							cat.image && cat.image.trim() !== ""
								? cat.image
								: defaultImage;
						return (
							<div
								key={idx}
								className="min-w-[140px] bg-white/80 rounded-2xl shadow-xl border-2 border-dotted border-[#f7786b] flex-shrink-0 p-4 text-center hover:shadow-2xl hover:scale-105 transition-all duration-200 backdrop-blur-md"
							>
								<img
									src={imageSrc}
									alt={cat.title}
									className="w-full h-28 object-cover rounded-md mb-3 border-b-4 border-double border-[#b5ead7]"
									onError={(e) => {
										const target = e.target as HTMLImageElement;
										// Only try fallback once, then use transparent pixel
										if (!target.dataset.fallback) {
											target.src = defaultImage;
											target.dataset.fallback = "true";
										} else {
											target.src =
												"data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";
										}
									}}
								/>
								<div className="font-bold text-base text-[#355c7d] font-mono">
									{cat.title}
								</div>
							</div>
						);
					})}

					{/* view‑more card */}
					<Link
						href="/categoriesPage"
						className="min-w-[140px] bg-[#ffdac1]/80 rounded-2xl shadow-inner border-2 border-dashed border-[#355c7d] flex-shrink-0 p-4 flex flex-col items-center justify-center hover:bg-[#b5ead7]/60 transition-colors font-mono font-bold text-[#355c7d]"
					>
						<span className="text-xl font-bold text-[#f7786b]">+4</span>
						<span className="mt-1 text-sm font-medium text-[#355c7d]">
							View&nbsp;more
						</span>
					</Link>
				</div>
			</div>
		</section>
	);
}
