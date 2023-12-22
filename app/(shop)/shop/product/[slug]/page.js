"use client";
import ProductDetails from "@/components/productDetails";
import { db } from "@/config/firebase";
import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState, useContext } from "react";
import { ShopContext } from "@/app/context/usercontext";
function Page({ params }) {
  const [product, setProduct] = useState([]);
  const { setNewCartItem } = useContext(ShopContext);
  const docRef = doc(db, "fruits", params.slug);
  async function getData() {
    try {
      const docSnap = await getDoc(docRef);
      setProduct({ id: docSnap.id, ...docSnap.data() });
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      {product && <ProductDetails handleAdd={setNewCartItem} item={product} />}
    </>
  );
}

export default Page;
