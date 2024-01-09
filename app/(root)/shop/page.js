"use client";
import ProductCard from "@/components/store/productCard";
import { useContext, useEffect, useState } from "react";
import { db } from "@/config/firebase";
import { getDocs, collection } from "firebase/firestore";
import { ShopContext } from "@/context/usercontext";
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
  const [data, setData] = useState([]);
  const { setNewCartItem, isLoading, setIsLoading } = useContext(ShopContext);
  const [visible, setVisible] = useState(false);
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
        setTimeout(() => {
          setVisible(true);
          setIsLoading(false);
        }, 1000);
      } catch (error) {
        console.error(error);
      }
    }
    getData();
  }, []);
  return (
    <>
      <div className="pt-2 w-full flex justify-center">
        {isLoading ? (
          <Loading />
        ) : (
          visible && (
            <div className="grid grid-cols-1 xl:grid-cols-4 gap-2 px-2 xxs:grid-cols-2 sm:grid-cols-3 gap-y-2.5 w-fit ">
              {data?.map((item) => {
                return (
                  <ProductCard
                    key={item.id}
                    item={item}
                    handleAdd={setNewCartItem}
                    linkRef={`/shop/product/${item.id}`}
                  />
                );
              })}
            </div>
          )
        )}
      </div>
    </>
  );
}

export default Page;
