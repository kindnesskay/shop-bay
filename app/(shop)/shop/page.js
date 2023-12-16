"use client";
import ProductCard from "@/components/productCard";
import { AddToCart } from "@/tools/cartActions";
import { useContext, useEffect, useState } from "react";
import { db } from "@/config/firebase";
import { getDocs, collection } from "firebase/firestore";
import { UserContext } from "@/app/context/usercontext";
import Loading from "@/components/loader";

const dataItems = [
  { id: 1, name: "product", price: 500 },
  { id: 2, name: "product", price: 500 },
  { id: 3, name: "product", price: 500 },
  { id: 4, name: "product", price: 500 },
  { id: 5, name: "product", price: 500 },
  { id: 6, name: "product", price: 500 },
  { id: 7, name: "product", price: 500 },
  { id: 8, name: "product", price: 500 },
  { id: 9, name: "product", price: 500 },
  { id: 10, name: "product", price: 500 },
];
function Page() {
  const { isLoading, setIsLoading } = useContext(UserContext);
  const [data, setData] = useState([]);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, [isLoading]);
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
      {isLoading ? (
        <Loading />
      ) : (
        <>
          {data.length === 0 || !data ? (
            <h4 className="text-center mt-8 text-gray-400 font-sans text-normal">
              Nothing to show here
            </h4>
          ) : (
            <div className="mx-auto max-w-2xl px-1.5 py-1.5 sm:px-1.5 sm:py-4 lg:max-w-7xl lg:px-8">
              <div className="grid grid-cols-1 xs:grid-cols-3 xxs:grid-cols-2 gap-x-2 gap-y-2.5  sm:grid-cols-4 md:grid-cols-4  md:gap-x-4 lg:gap-x-8">
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
            </div>
          )}
        </>
      )}
    </>
  );
}

export default Page;
