"use client";
import HorizontalComp from "@/components/horizontalComp";
import { Search } from "@mui/icons-material";

const data = [
  { id: 1, name: "Clothe", price: 500, image: "/assets/icons/clothes.png" },
  { id: 2, name: "Dress", price: 1500, image: "/assets/icons/dress.png" },
  { id: 3, name: "Hoddie", price: 2500, image: "/assets/icons/hoddie.png" },
  { id: 4, name: "Plane", price: 3500, image: "/assets/icons/plane.png" },
  { id: 5, name: "Food", price: 5300, image: "/assets/icons/food.png" },
];

import ProductCard from "@/components/productCard";
import Hero from "@/components/hero";
import Category from "@/components/category";
import FeaturedProducts from "@/components/store/featuredProducts";
import NewArrivals from "@/components/store/NewArrivals";
const product = data.map((item) => {
  return <ProductCard item={item} />;
});
const CategoryItem = data.map((item) => {
  return <Category location={"#"} image={item.image} name={item.name} />;
});
export default function Page() {
  return (
    <section className="w-full h-full flex items-center flex-col gap-4 space-between p-2">
      <div className="w-full h-16  flex relative rounded-lg overflow-hidden pl-8 border-solid border border-gray-200">
        <span className="absolute text-gray-400 left-0 h-full w-8 flex items-center">
          <Search />
        </span>
        <input
          className="h-full w-full"
          type="search"
          placeholder="search products , brands and categories"
        />
      </div>
      <Hero />

      <>
        <NewArrivals />
        <FeaturedProducts />
        <HorizontalComp title={"Categories"} array={CategoryItem} />
      </>
    </section>
  );
}
