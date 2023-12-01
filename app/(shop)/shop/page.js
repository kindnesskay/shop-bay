"use client";
import ProductCard from "@/components/productCard";
import { AddToCart } from "@/tools/cartActions";
import { useEffect, useState } from "react";
import { db } from "@/config/firebase";
import { getDocs, collection } from "firebase/firestore";
import Loading from "@/components/loader";
function Page() {
  const [data, setData] = useState([]);
  const db_name = "fruits_unique";
  const addToCart = (item) => {
    item.quantity = 1;
    AddToCart(db_name, item);
  };
  const docRef = collection(db, "fruits");
  useEffect(() => {
    async function getData() {
      try {
        const fetch_data = await getDocs(docRef);
        const filtered_data = fetch_data.docs.map((doc) => {
          return {
            id: doc.id,
            name: doc.data().name,
            price: doc.data().price,
            image: doc.data().image,
          };
        });
        setData(filtered_data);
      } catch (error) {
        console.error(error);
      }
    }
    getData();
  }, []);
  return (
    <>
      {!data.length && <Loading />}
      <div className="product_grid">
        {data?.map((item) => {
          return (
            <ProductCard
              key={item.id}
              item={item}
              handleAdd={addToCart}
              linkRef={`/shop/product/${item.id}`}
            />
          );
        })}
      </div>
    </>
  );
}

export default Page;
