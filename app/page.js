"use client";
import HorizontalComp from "@/components/horizontalComp";
import { Search } from "@mui/icons-material";
import clothes from "../assets/icons/clothes.png";
import dress from "../assets/icons/dress.png";
import hoddie from "../assets/icons/hoddie.png";
import plane from "../assets/icons/plane.png";
import food from "../assets/icons/food.png";
const data = [
  { id: 1, name: "Clothe", price: 500, image: clothes },
  { id: 2, name: "Dress", price: 1500, image: dress },
  { id: 3, name: "Hoddie", price: 2500, image: hoddie },
  { id: 4, name: "Plane", price: 3500, image: plane },
  { id: 5, name: "Food", price: 5300, image: food },
];

import ProductCard from "@/components/productCard";
import Hero from "@/components/hero";
import Category from "@/components/category";
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
        <HorizontalComp title={"New Arrivals"} array={product} />
        <HorizontalComp title={"Featured Products"} array={product} />
        <HorizontalComp title={"Categories"} array={CategoryItem} />
      </>
    </section>
  );
}
