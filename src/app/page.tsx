// import Image from "next/image";
import Banner from "@/components/Banner/page";
import Categories from "./categories/page";
import TrendingProducts from "@/components/TrendingProducts/page";
export default function Home() {
  return (
    <div className="min-h-screen w-full bg-white flex flex-col items-stretch">
      <div className="w-full relative z-10">
        <Banner />
      </div>
      <div className="w-full bg-white py-12 px-2 md:px-8 rounded-3xl">
        <TrendingProducts />
      </div>
      <div className="w-full bg-white py-16 px-2 md:px-8 rounded-3x">
        <Categories />
      </div>
    </div>
  );
}
