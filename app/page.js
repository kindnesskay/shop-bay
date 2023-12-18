"use client";
import HorizontalComp from "@/components/horizontalComp";
import { Search } from "@mui/icons-material";

const data = [
  { id: 1, name: "Clothes", price: 500, image: "/assets/icons/clothes.png" },
  { id: 2, name: "Dress", price: 1500, image: "/assets/icons/dress.png" },
  { id: 3, name: "Hoddie", price: 2500, image: "/assets/icons/hoddie.png" },
  { id: 4, name: "Plane", price: 3500, image: "/assets/icons/plane.png" },
  { id: 5, name: "Food", price: 5300, image: "/assets/icons/food.png" },
  { id: 5, name: "Kids", price: 5300, image: "/assets/icons/plane.png" },
];

import ProductCard from "@/components/productCard";
import Hero from "@/components/hero";
import Category from "@/components/category";
import FeaturedProducts from "@/components/store/featuredProducts";
import NewArrivals from "@/components/store/NewArrivals";
import { UserContext } from "./context/usercontext";
import { useContext, useEffect } from "react";
import Loading from "@/components/loader";
import Categories from "@/components/store/Categories";
import SearchResult from "@/components/store/SearchResult";
const product = data.map((item) => {
  return <ProductCard item={item} />;
});

export default function Page() {
  const { isLoading, setIsLoading } = useContext(UserContext);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, [isLoading]);
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <section className="w-full flex items-center flex-col gap-4 space-between p-2">
          <SearchResult />
          <Hero />
          <Categories data={data} />
        </section>
      )}
    </>
  );
}
