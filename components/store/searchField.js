"use client";
import { Search } from "@mui/icons-material";
import { useEffect, useState } from "react";
import { db } from "@/config/firebase";
import Link from "next/link";
import { where, collection, getDocs, query } from "firebase/firestore";
export default function SearchField() {
  const [keyword, setKeyword] = useState("");
  const [result, setResult] = useState([]);
  useEffect(() => {
    if (!keyword) setResult([]);
  }, [keyword]);
  async function searchForProducts() {
    let data = [];
    // Reference to the "products" collection in Firestore
    const productsCollection = collection(db, "fruits");
    // Use the where clause to filter products by name containing the keyword
    const searcQuery = query(productsCollection, where("name", "==", keyword));
    try {
      const querySnapshot = await getDocs(searcQuery);
      querySnapshot.forEach((doc) => {
        data = [...data, { id: doc.id, ...doc.data() }];
      });

      setResult(data);
    } catch (err) {
      console.error(err);
      // error("Error getting Item");
    }
  }

  return (
    <div className="w-full bg-white rounded-lg overflow-hidden">
      <div className="w-full h-16 flex overflow-hidden">
        <span className="text-white bg-sky-800 h-full w-1/4 ">
          <button
            onClick={searchForProducts}
            className="w-full h-full flex items-center justify-center"
          >
            <Search />
          </button>
        </span>
        <input
          className="h-full w-3/4 pl-2 pr-2"
          type="search"
          placeholder="search products,brands and categories"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />
      </div>

      {result.length > 0 && (
        <div className="w-full min-h-20 bg-white p-2 flex flex-col gap-2">
          {result.map((item, index) => {
            return (
              <Link
                href={`/shop/product/${item.id}`}
                key={index}
                className="font-semibold"
              >
                {item.name}
                <span className="text-gray-500"> in {item.category}</span>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}
