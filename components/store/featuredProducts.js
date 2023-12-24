"use client";

import { collection, getDocs, query, where } from "firebase/firestore";
import HorizontalComp from "../horizontalComp";
import { db } from "@/config/firebase";
import { useEffect, useState } from "react";
import ProductCard from "./productCard";
function FeaturedProducts() {
  const dataRef = collection(db, "fruits");
  const [data, setData] = useState([]);
  async function featuredProducts() {
    let items = [];
    try {
      const queryData = query(dataRef, where("featured", "==", true));
      const querySnapshot = await getDocs(queryData);
      querySnapshot.forEach((doc) => {
        items = [...items, { id: doc.id, ...doc.data() }];
      });
      setData(items);
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    featuredProducts();
  }, []);

  const items = data.map((item) => {
    return <ProductCard item={item} linkRef={"#"} />;
  });
  return (
    <>
      {data.length > 0 && <HorizontalComp title={"Featured"} array={items} />}
    </>
  );
}

export default FeaturedProducts;
