import Link from "next/link";
import { FaUser, FaHeart, FaShoppingCart } from "react-icons/fa";


export default function NavBar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center justify-between mr-16">
			<Link href="/">
			          <span className="text-2xl font-bold select-none" >
            <span className="text-[#c7b6f7]">SR</span>
            <span className="text-[#7be3c6]">-</span>
            <span className="text-[#e6e97a]">Glowva</span>
          </span>
			</Link>
        </div>
        {/* Navigation */}
        <ul className="flex gap-8 items-center text-lg font-medium">
          <li className="text-black"><Link href="/">Home</Link></li>
          <li className="text-black"><Link href="/products">Products</Link></li>
          <li className="text-black"><Link href="/allCategories">Categories</Link></li>
          
        </ul>
        {/* Search Bar */}
        <div className="flex-1 flex justify-center mx-6">
          <input
            type="text"
            placeholder="Search products..."
            className="w-full max-w-xs px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#c7b6f7]"
          />
        </div>
        {/* Icons */}
        <div className="flex items-center gap-6 text-2xl text-gray-700">
                    <Link href="/cart" className="relative" aria-label="Cart">
            <FaShoppingCart />
            <span className="absolute -top-2 -right-2 bg-pink-300 text-xs text-white rounded-full px-1.5">0</span>
          </Link>
		  <Link href="favourite">
		  <button aria-label="Wishlist"><FaHeart /></button>
		  </Link>
          <Link href="/profile" aria-label="Profile"><FaUser /></Link>
        </div>
      </div>
    </nav>
  );
}