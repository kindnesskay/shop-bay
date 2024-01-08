"use client";
import { db } from "@/config/firebase";
import { collection, query, where, getDocs } from "firebase/firestore";
import { useEffect, useState, useContext } from "react";
import { ShopContext } from "@/context/usercontext";
import ProductCard from "@/components/store/productCard";
import Loading from "@/components/loader";
function Page({ params }) {
  const dataRef = collection(db, "fruits");
  const [productArray, setProductArray] = useState([]);
  const { setNewCartItem, isLoading, setIsLoading } = useContext(ShopContext);

  async function getData() {
    let items = [];
    try {
      const queryData = query(dataRef, where("category", "==", params.slug));
      const querySnapshot = await getDocs(queryData);
      querySnapshot.forEach((doc) => {
        items = [...items, { id: doc.id, ...doc.data() }];
      });
      setProductArray(items);
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="w-screen  mt-2 px-1.5 py-1.5 sm:px-1.5 sm:py-4 lg:max-w-7xl lg:px-8">
          <div className="grid grid-cols-1 xs:grid-cols-3 xxs:grid-cols-2  gap-x-2 gap-y-2.5  sm:grid-cols-4 md:grid-cols-4  md:gap-x-4 lg:gap-x-8">
            {productArray?.map((item) => {
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
        </div>
      )}
    </>
  );
}

export default Page;
