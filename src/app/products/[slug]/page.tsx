import { notFound } from "next/navigation";
import PRODUCTS from "../productsData";

export default function ProductDetail({ params }: { params: { slug: string } }) {
  const product = PRODUCTS.find((p) => p.slug === params.slug);
  if (!product) return notFound();

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-gray-100 to-gray-200 flex flex-col lg:flex-row">
      <div className="flex-1 flex items-center justify-center bg-transparent p-0">
        <img
          src={product.image}
          alt={product.name}
          className="w-full max-w-lg h-[60vh] object-contain bg-white"
        />
      </div>
      <div className="flex-1 flex flex-col justify-center px-6 py-10">
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">
          {product.name}
        </h1>
        <div className="flex items-center gap-4 mb-4">
          <span className="text-orange-500 font-bold text-2xl md:text-3xl">₹{product.price}</span>
          <span className="line-through text-gray-400 text-lg md:text-xl">₹{product.original}</span>
          <span className="bg-red-500 text-white text-xs font-semibold px-3 py-1 rounded-full shadow">
            {product.discount}% off
          </span>
        </div>
        <div className="mb-6 text-base text-gray-600 font-medium">
          <span className="bg-gray-100 px-3 py-1 rounded-full text-gray-700">Category: {product.category}</span>
        </div>
        <div className="mb-8 text-gray-700 text-base leading-relaxed">
          This is a premium quality product, perfect for your needs. Add more details about the product here to help customers make informed decisions.
        </div>
        <button className="w-full max-w-xs bg-gradient-to-r from-orange-500 to-orange-400 text-white font-semibold py-2 rounded-md shadow hover:from-orange-600 hover:to-orange-500 transition text-base mx-auto">
          + Add to Cart
        </button>
      </div>
    </div>
  );
}
