"use client";

// src/components/Categories/index.tsx
import Link from "next/link";
import Image from "next/image";

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
		<section className="w-full py-8 sm:py-12 md:py-16 bg-white rounded-2xl md:rounded-3xl border-2 md:border-4 border-[#e0f7fa] mx-auto mt-4 md:mt-8">
			<div className="max-w-7xl mx-auto px-2 sm:px-4">
				<h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#7c3aed] via-[#5eead4] to-[#f472b6] text-center mb-6 md:mb-10 tracking-widest font-serif animate-pulse">
					Shop by Category
				</h2>

				{/* horizontal scroll row */}
  				<div className="flex gap-3 sm:gap-4 overflow-x-auto no-scrollbar pb-1 sm:pb-2">
					{categories.map((cat, idx) => {
						const defaultImage =
							idx % 2 === 0 ? "/images/earring.jpg" : "/images/tools.jpg";
						const imageSrc =
							cat.image && cat.image.trim() !== ""
								? cat.image
								: defaultImage;
						return (
							<div
								key={idx}
								className="min-w-[110px] sm:min-w-[140px] bg-white/90 rounded-xl sm:rounded-2xl border border-[#e0f7fa] sm:border-2 flex-shrink-0 p-2 sm:p-4 text-center hover:shadow-md hover:scale-105 transition-all duration-200 backdrop-blur-md"
							>
								<Image
									src={imageSrc}
									alt={cat.title}
									width={120}
									height={80}
									className="w-full h-20 sm:h-28 object-cover rounded-md mb-2 sm:mb-3 "
								/>
								<div className="font-bold text-xs sm:text-base text-[#7c3aed] font-mono">
									{cat.title}
								</div>
							</div>
						);
					})}

					{/* view‑more card */}
					<Link
						href="/allCategories"
						className="min-w-[110px] sm:min-w-[140px] bg-[#f3e8ff]/80 rounded-xl sm:rounded-2xl shadow-inner border border-[#e0f7fa] sm:border-2 flex-shrink-0 p-2 sm:p-4 flex flex-col items-center justify-center hover:bg-[#e0f7fa]/60 transition-colors font-mono font-bold text-[#7c3aed]"
					>
						<span className="text-lg sm:text-xl font-bold text-[#7c3aed]">+4</span>
						<span className="mt-0.5 sm:mt-1 text-xs sm:text-sm font-medium text-[#7c3aed]">
							View&nbsp;more
						</span>
					</Link>
				</div>
			</div>
			<style jsx global>{`
        .no-scrollbar {
          -ms-overflow-style: none; /* IE and Edge */
          scrollbar-width: none; /* Firefox */
        }
        .no-scrollbar::-webkit-scrollbar {
          display: none; /* Chrome, Safari, Opera */
        }
      `}</style>
		</section>
	);
}
