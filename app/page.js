"use client";

import HorizontalComp from "@/components/horizontalComp";
import { Search } from "@mui/icons-material";
const data = [
  { id: 1, name: "product", price: 500 },
  { id: 2, name: "product", price: 500 },
  { id: 3, name: "product", price: 500 },
  { id: 4, name: "product", price: 500 },
  { id: 5, name: "product", price: 500 },
];
import ProductCard from "@/components/productCard";
const product = data.map((item) => {
  return <ProductCard item={item} />;
});
export default function Page() {
  return (
    <section className="w-full h-full flex items-center flex-col gap-4 space-between p-2">
      <div className="w-full h-8 flex relative rounded-lg overflow-hidden pl-8 border-solid border border-gray-200">
        <span className="absolute text-gray-400 left-0 h-full w-8 flex items-center">
          <Search />
        </span>
        <input
          className="h-full w-full"
          type="search"
          placeholder="search products , brands and categories"
        />
      </div>
      <div className="h-44 w-full bg-slate-300"></div>
      <>
        <HorizontalComp title={"New Arrivals"} array={product} />
      </>
    </section>
  );
}
