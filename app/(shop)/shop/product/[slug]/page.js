"use client";
import ProductDetails from "@/components/productDetails";
import { db } from "@/config/firebase";
import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
function Page({ params }) {
  const [product, setProduct] = useState(null);

  const docRef = doc(db, "fruits", params.slug);
  async function getData() {
    try {
      const docSnap = await getDoc(docRef);
      setProduct(docSnap.data());
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    getData();
  }, []);
  return <>{product && <ProductDetails item={product} />}</>;
}

export default Page;
