"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  FaUser,
  FaHeart,
  FaShoppingCart,
  FaBars,
  FaTimes,
} from "react-icons/fa";

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md border-b border-gray-200 w-full z-20 top-0 left-0">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center gap-4">
        {/* ── Left : logo + name ───────────────────────────── */}
        <Link href="/" className="flex items-center gap-3 flex-shrink-0">
          <Image
            src="/logos/srlogo.jpeg"
            alt="SR Glowva Logo"
            width={200}
            height={200}
            className="h-12 w-12 sm:h-14 sm:w-14 object-cover rounded-full select-none border border-gray-200 shadow"
            priority
          />
          <span className="text-xl sm:text-2xl font-semibold tracking-wide text-black">
            Sr Glowva
          </span>
        </Link>

        {/* ── Middle : search bar (always visible) ─────────── */}
        <div className="flex-1">
          <input
            type="text"
            placeholder="Search products..."
            className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#c7b6f7]"
          />
        </div>

        {/* ── Links + icons inside right-side drawer (mobile) ── */}
        <div
          className={`${
            menuOpen ? "flex" : "hidden"
          } absolute sm:static top-16 right-0 w-2/3 max-w-xs sm:w-auto sm:flex sm:flex-row flex-col items-start gap-6 p-6 sm:p-0 bg-white z-50 shadow-lg h-auto`}
        >
          <Link
            href="/products"
            onClick={() => setMenuOpen(false)}
            className="text-black font-medium"
          >
            Products
          </Link>
          <Link
            href="/allCategories"
            onClick={() => setMenuOpen(false)}
            className="text-black font-medium"
          >
            Categories
          </Link>

          {/* Mobile-only icons */}
          <div className="flex sm:hidden flex-col gap-4 mt-2">
            <Link href="/cart" onClick={() => setMenuOpen(false)} className="flex items-center gap-2">
              <FaShoppingCart /> Cart
            </Link>
            <Link href="/favourite" onClick={() => setMenuOpen(false)} className="flex items-center gap-2">
              <FaHeart /> Wishlist
            </Link>
            <Link href="/profile" onClick={() => setMenuOpen(false)} className="flex items-center gap-2">
              <FaUser /> Profile
            </Link>
          </div>
        </div>


        {/* ── Right : icons row (desktop only) ─────────────── */}
        <div className="hidden sm:flex items-center gap-4 sm:gap-6 text-2xl text-gray-700">
          <Link href="/cart" aria-label="Cart" className="relative">
            <FaShoppingCart />
            <span className="absolute -top-2 -right-2 bg-pink-300 text-xs text-white rounded-full px-1.5">
              0
            </span>
          </Link>
          <Link href="/favourite" aria-label="Wishlist">
            <FaHeart />
          </Link>
          <Link href="/profile" aria-label="Profile">
            <FaUser />
          </Link>
        </div>

        {/* ── Hamburger button ─────────────────────────────── */}
        <button
          className="sm:hidden text-3xl focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
    </nav>
  );
}
