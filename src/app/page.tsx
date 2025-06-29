// import Image from "next/image";
import Banner from "@/components/Banner/page";
// import Categories from "@/components/Categories/page";
// import TrendingProducts from "@/components/TrendingProducts/page";
import Categories from "./categories/page";
import TrendingProducts from "@/components/TrendingProducts/page";
export default function Home() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-[#f7cac9] via-[#92a8d1] to-[#f7786b] flex flex-col items-stretch">
      <div className="w-full relative z-10">
        <Banner />
      </div>
      <div className="w-full bg-gradient-to-tr from-[#fff5e1] via-[#f7cac9] to-[#355c7d] py-12 px-2 md:px-8 rounded-3xl shadow-xl">
        <TrendingProducts />
      </div>
      <div className="w-full bg-gradient-to-r from-[#b5ead7] via-[#ffdac1] to-[#c7ceea] py-16 px-2 md:px-8 rounded-3xl shadow-xl mt-8">
        <Categories />
      </div>
    </div>
  );
}
