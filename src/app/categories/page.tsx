import { FaFlask, FaShapes, FaTools, FaPalette, FaStar } from "react-icons/fa";

const categories = [
	{
		icon: <FaFlask className="text-4xl mx-auto mb-2" />,
		title: "Resin",
		desc: "High-quality epoxy resins",
	},
	{
		icon: <FaShapes className="text-4xl mx-auto mb-2" />,
		title: "Moulds",
		desc: "Silicone & plastic moulds",
	},
	{
		icon: <FaTools className="text-4xl mx-auto mb-2" />,
		title: "Tools",
		desc: "Essential crafting tools",
	},
	{
		icon: <FaPalette className="text-4xl mx-auto mb-2" />,
		title: "Pigments",
		desc: "Vibrant colors & effects",
	},
	{
		icon: <FaStar className="text-4xl mx-auto mb-2" />,
		title: "Accessories",
		desc: "Finishing touches",
	},
];

export default function Categories() {
	return (
		<section className="w-full py-16 bg-white">
			<div className="max-w-5xl mx-auto px-4">
				<h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 text-center mb-10">
					Shop by Category
				</h2>
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
					{categories.map((cat, idx) => (
						<div
							key={idx}
							className="bg-white rounded-2xl shadow p-6 flex flex-col items-center text-center transition hover:shadow-lg"
						>
							{cat.icon}
							<div className="font-bold text-lg mt-2 mb-1 text-gray-800">
								{cat.title}
							</div>
							<div className="text-gray-500 text-sm">{cat.desc}</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}