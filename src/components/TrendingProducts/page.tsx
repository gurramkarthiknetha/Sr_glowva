import Image from 'next/image';
import Link from 'next/link';

export default function TrendingProducts() {
	const products = [
  {
    id: 1,
    title: "Ganpati Frame Mold",
    price: 200,
    originalPrice: 350,
    discountPercentage: 43,
    thumbnail: "/images/ganapathi_frame_model.jpg",
    buttonText: "+ Add"
  },
  {
    id: 2,
    title: "Drop Pendent And Earrings Mold",
    price: 75,
    originalPrice: 105,
    discountPercentage: 29,
    thumbnail: "/images/earrings_mold.jpg",
    buttonText: "+ Add"
  },
  {
    id: 3,
    title: "Ash Tray Mold",
    price: 120,
    originalPrice: 165,
    discountPercentage: 27,
    thumbnail: "/images/ash_mold.jpg",
    buttonText: "+ Add"
  },
  {
    id: 4,
    title: "Fish Tail Bookmark Mold",
    price: 30,
    originalPrice: 65,
    discountPercentage: 54,
    thumbnail: "/images/fish_tail_mold.jpg",
    buttonText: "+ Add"
  },
  {
    id: 6,
    title: "Diamond Cut Mold (6.9cm)",
    price: 72,
    originalPrice: 105,
    discountPercentage: 31,
    thumbnail: "/images/diamond_cut_mold.jpg",
    buttonText: "+ Add"
  },
  {
    id: 7,
    title: "Dry Pressed Flower",
    price: 220,
    originalPrice: 285,
    discountPercentage: 23,
    thumbnail: "/images/dry_pressed_flower.jpg",
    buttonText: "+ Add"
  },
  {
    id: 9,
    title: "Resin Rakhi Mold",
    price: 82,
    originalPrice: 100,
    discountPercentage: 18,
    thumbnail: "/images/resin_rakhi_mold.jpg",
    buttonText: "+ Add"
  },
  {
    id: 11,
    title: "Resin Pigment PeacockBlue",
    price: 60,
    originalPrice: 80,
    discountPercentage: 25,
    thumbnail: "/images/resin_pigment.jpg",
    buttonText: "+ Add"
  },
  {
    id: 12,
    title: "Resin Pigment Ice Blue",
    price: 60,
    originalPrice: 80,
    discountPercentage: 25,
    thumbnail: "/images/earring.jpg",
    buttonText: "+ Add"
  },
  {
    id: 13,
    title: "6\"9.5 Inches Recattnagle Deep...",
    price: 500,
    originalPrice: 750,
    discountPercentage: 33,
    thumbnail: "/images/earring.jpg",
    buttonText: "+ Add"
  },
  {
    id: 14,
    title: "Multi Press Hydrangea",
    price: 110,
    originalPrice: 200,
    discountPercentage: 45,
    thumbnail: "/images/earring.jpg",
    buttonText: "+ Add"
  },
  {
    id: 15,
    title: "Wall Hanging Name Plate Mold",
    price: 220,
    originalPrice: 350,
    discountPercentage: 37,
    thumbnail: "/images/earring.jpg",
    buttonText: "+ Add"
  },
  {
    id: 16,
    title: "Luggage Tags And Wax Sachet Mold",
    price: 155,
    originalPrice: 220,
    discountPercentage: 30,
    thumbnail: "/images/earring.jpg",
    buttonText: "+ Add"
  }
];

	return(
    <div>
      <div className="max-w-7xl mx-auto px-4 py-8 bg-white rounded-3xl border-4 border-[#e0f7fa] relative overflow-hidden">
        <h1 className="text-4xl sm:text-sm font-extrabold mb-6 text-center text-transparent bg-clip-text bg-gradient-to-r from-[#7c3aed] via-[#000000] to-[#f20081] tracking-widest mix-blend-multiply animate-pulse">Trending Products</h1>
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.slice(0, 8).map((product) => (
            <div
              key={product.id}
              className="bg-white/90 rounded-2xl border-2 border-[#e0f7fa] relative flex flex-col hover:shadow-md transition-shadow duration-200 hover:scale-105 hover:border-[#7c3aed] hover:bg-[#e0f7fa]/80 backdrop-blur-md"
            >
              <div className="relative">
                <Image
                  src={product.thumbnail}
                  alt={product.title}
                  width={400}
                  height={224}
                  className="w-full h-56 object-cover rounded-t-2xl"
                />
                <span className="absolute top-3 right-3 bg-gradient-to-r from-[#7c3aed] to-[#5eead4] text-white text-xs font-bold px-3 py-1 rounded-full z-10 border-2 border-white animate-bounce">
                  {product.discountPercentage}% off
                </span>
                <button className="absolute bottom-3 right-3 bg-white/80 rounded-full p-2 border-2 border-[#7c3aed] hover:bg-[#e0f7fa]/60 transition-colors" aria-label="Wishlist">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-[#7c3aed]">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.54 0-2.94.792-3.687 2.008A4.125 4.125 0 0 0 3 8.25c0 7.22 8.25 11.25 8.25 11.25s8.25-4.03 8.25-11.25z" />
                  </svg>
                </button>
              </div>
              <div className="flex-1 flex flex-col justify-between p-4">
                <div>
                  <h2 className="text-base sm:text-lg font-bold mb-1 text-[#7c3aed] font-serif">{product.title}</h2>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-lg sm:text-xl text-[#7c3aed] font-extrabold">₹{Math.round(product.price)}</span>
                    <span className="text-sm sm:text-base text-gray-400 line-through">₹{Math.round(product.originalPrice)}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 mt-4">
                  <button className="border-2 border-[#5eead4] rounded-full p-2 text-[#7c3aed] hover:bg-[#5eead4]/40 transition-colors" aria-label="WhatsApp">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
                      <path d="M20.52 3.48A12.07 12.07 0 0 0 12 0C5.37 0 0 5.37 0 12c0 2.11.55 4.17 1.6 6.01L0 24l6.18-1.62A11.94 11.94 0 0 0 12 24c6.63 0 12-5.37 12-12 0-3.19-1.24-6.19-3.48-8.52zM12 22c-1.77 0-3.5-.46-5.01-1.33l-.36-.21-3.67.96.98-3.58-.23-.37A9.94 9.94 0 0 1 2 12c0-5.52 4.48-10 10-10s10 4.48 10 10-4.48 10-10 10zm5.2-7.8c-.28-.14-1.65-.81-1.9-.9-.25-.09-.43-.14-.61.14-.18.28-.7.9-.86 1.08-.16.18-.32.2-.6.07-.28-.14-1.18-.44-2.25-1.4-.83-.74-1.39-1.65-1.55-1.93-.16-.28-.02-.43.12-.57.13-.13.28-.34.42-.51.14-.17.18-.29.28-.48.09-.19.05-.36-.02-.5-.07-.14-.61-1.47-.84-2.01-.22-.53-.45-.46-.62-.47-.16-.01-.36-.01-.56-.01-.19 0-.5.07-.76.34-.26.27-1 1-.98 2.43.02 1.43 1.03 2.81 1.18 3.01.15.2 2.03 3.1 5.01 4.23.7.24 1.25.38 1.68.48.71.15 1.36.13 1.87.08.57-.06 1.65-.67 1.88-1.32.23-.65.23-1.2.16-1.32-.07-.12-.25-.19-.53-.33z" />
                    </svg>
                  </button>
                  <button className="flex-1 border-2 border-[#7c3aed] text-[#7c3aed] font-bold rounded-full py-2 transition-colors hover:bg-[#f3e8ff]/40 text-base font-mono">
                    {product.buttonText}
                  </button>
                </div>
              </div>
            </div>
          ))}
        {/* <div className="flex justify-center mt-8">
          <Link href="/products" className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r from-[#7c3aed] via-[#5eead4] to-[#f472b6] text-white shadow hover:scale-110 transition-transform">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 32 32" className="w-10 h-10">
              <path stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" d="M8 16h16m0 0l-6-6m6 6l-6 6" />
            </svg>
          </Link>
        </div> */}
        </div>
      </div>
      <div className="flex justify-center mt-8">
        <Link
          href="/products"
          className="inline-flex items-center justify-center w-40 h-12 rounded-full bg-gradient-to-r from-[#7c3aed] via-[#5eead4] to-[#f472b6] text-white text-lg font-medium shadow hover:scale-105 transition-transform"
        >
          View More
        </Link>
      </div>
		</div>
	)
}