// import Image from "next/image";
import Banner from "@/components/Banner/page";
// import Categories from "@/components/Categories/page";
// import TrendingProducts from "@/components/TrendingProducts/page";
import Categories from "./categories/page";
import TrendingProducts from "@/components/TrendingProducts/page";
export default function Home() {
  return (
    <div>
      <Banner />
      {/* TrendingProducts section can be styled or removed if not in screenshot */}
      <TrendingProducts />
      <Categories />
    </div>
  );
}
