"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaUser, FaHeart, FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";


export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="bg-white shadow-md w-full z-20 top-0 left-0">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center justify-between mr-4 sm:mr-16 flex-shrink-0">
          <Link href="/">
            <Image src="/logos/srlogo.jpeg" alt="SR Glowva Logo" 
            width={200}
            height={200}
            className="h-12 w-12 sm:h-14 sm:w-14 object-cover rounded-full select-none bg-white border border-gray-200 shadow" />
          </Link>
        </div>
                  <div className="w-full sm:w-auto flex justify-center my-4 sm:my-0">
            <input
              type="text"
              placeholder="Search products..."
              className="w-full max-w-xs px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#c7b6f7]"
            />
          </div>
        {/* Navigation & Search (desktop) */}
        <div className={`flex-1 flex-col sm:flex-row sm:flex sm:items-center sm:justify-between w-full sm:w-auto ${menuOpen ? 'flex' : 'hidden'} sm:!flex bg-white sm:bg-transparent absolute sm:static left-0 top-16 sm:top-auto z-30 sm:z-auto p-6 sm:p-0 gap-6 sm:gap-0`}> 
          <ul className="flex flex-col sm:flex-row gap-6 sm:gap-8 items-start sm:items-center text-lg font-medium">
            <li className="text-black"><Link href="/products" onClick={() => setMenuOpen(false)}>Products</Link></li>
            <li className="text-black"><Link href="/allCategories" onClick={() => setMenuOpen(false)}>Categories</Link></li>
          </ul>
        </div>
        {/* Icons */}
        <div className="flex items-center gap-4 sm:gap-6 text-2xl text-gray-700 ml-2 sm:ml-0">
          <Link href="/cart" className="relative" aria-label="Cart">
            <FaShoppingCart />
            <span className="absolute -top-2 -right-2 bg-pink-300 text-xs text-white rounded-full px-1.5">0</span>
          </Link>
          <Link href="/favourite">
            <button aria-label="Wishlist"><FaHeart /></button>
          </Link>
          <Link href="/profile" aria-label="Profile"><FaUser /></Link>
                  {/* Hamburger for mobile */}
        <button
          className="sm:hidden flex items-center text-3xl text-gray-700 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
        </div>
      </div>
    </nav>
  );
}