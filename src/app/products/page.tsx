"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import PRODUCTS from "./productsData";

export default function ProductsPage() {
	const [searchTerm, setSearchTerm] = useState("");
	const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
	const [showFilters, setShowFilters] = useState(false);

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
		<div className="flex flex-col md:flex-row w-full min-h-screen bg-white">
			{/* Mobile filter button */}
			<div className="md:hidden flex justify-between items-center px-4 py-3 border-b">
				<h2 className="text-lg font-bold">Trending Products</h2>
				<button
					className="text-orange-500 font-semibold border border-orange-400 rounded px-3 py-1 text-sm"
					onClick={() => setShowFilters(true)}
				>
					Filters
				</button>
			</div>

			{/* Sidebar for desktop, drawer for mobile */}
			<aside
				className={`z-20 bg-white w-72 border-r px-4 py-6 shrink-0 md:static md:translate-x-0 md:block fixed top-0 left-0 h-full transition-transform duration-300 ${showFilters ? "translate-x-0" : "-translate-x-full"} md:relative md:h-auto md:w-72`}
				style={{ maxWidth: "100vw" }}
			>
				{/* Close button for mobile */}
				<div className="md:hidden flex justify-end mb-2">
					<button
						className="text-gray-500 text-2xl px-2"
						onClick={() => setShowFilters(false)}
						aria-label="Close filters"
					>
						&times;
					</button>
				</div>
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

			{/* Overlay for mobile drawer */}
			{showFilters && (
				<div
					className="fixed inset-0 bg-black bg-opacity-30 z-10 md:hidden"
					onClick={() => setShowFilters(false)}
				/>
			)}

			<main className="flex-1 p-3 sm:p-4 md:p-6 overflow-y-auto">
				{/* Hide heading on mobile, shown in filter bar */}
				<h2 className="hidden md:block text-2xl font-bold mb-6">
					Products
				</h2>

				<div className="grid grid-cols-2 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
					{visibleProducts.map((product) => (
						<article
							key={product.id}
							className="bg-white rounded-xl shadow-md border hover:shadow-lg transition flex flex-col"
						>
							<figure className="relative p-2 sm:p-4 pb-0">
								<Link href={`/products/${product.slug}`}>
									<Image
										src={product.image}
										alt={product.name}
										width={400}
										height={400}
										className="w-full h-40 sm:h-48 object-contain mx-auto"
									/>
								</Link>
								<span className="absolute top-2 right-2 sm:top-3 sm:right-3 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded">
									{product.discount}% off
								</span>
							</figure>

							<div className="flex-1 flex flex-col justify-between p-2 sm:p-4 pt-1 sm:pt-2">
								<div>
									<h3 className="text-xs sm:text-sm font-semibold text-gray-900 line-clamp-2">
										{product.name}
									</h3>
									<div className="flex items-center gap-2 mt-1">
										<span className="text-orange-500 font-bold text-sm sm:text-base">
											₹{product.price}
										</span>
										<span className="line-through text-xs sm:text-sm text-gray-400">
											₹{product.original}
										</span>
									</div>
								</div>

								<div className="flex items-center gap-2 mt-3 sm:mt-4">
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
									<button className="flex-1 border border-orange-400 text-orange-500 font-semibold rounded-full py-2 hover:bg-orange-50 text-xs sm:text-sm">
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
