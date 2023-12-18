"use client";
import { Search } from "@mui/icons-material";
import { useState } from "react";
import { db } from "@/config/firebase";
import { where, collection, getDocs, query } from "firebase/firestore";
export default function SearchField({ result, error }) {
  const [keyword, setKeyword] = useState("");

  async function searchForProducts() {
    let data = [];
    // Reference to the "products" collection in Firestore
    const productsCollection = collection(db, "fruits");
    // Use the where clause to filter products by name containing the keyword
    const searcQuery = query(productsCollection, where("name", "==", keyword));
    try {
      const querySnapshot = await getDocs(searcQuery);
      querySnapshot.forEach((doc) => {
        console.log(doc.id);
        data = [...data, { id: doc.id, ...doc.data() }];
      });

      result(data);
    } catch (err) {
      console.error(err);
      error("Error getting Item");
    }
  }

  return (
    <div className="w-full h-16  flex relative rounded-lg overflow-hidden pl-12 border-solid border border-gray-200">
      <span className="absolute text-gray-400 left-0 h-full w-8 flex items-center">
        <button onClick={searchForProducts} className="pl-2 h-full">
          <Search />
        </button>
      </span>
      <input
        className="h-full w-full pl-2"
        type="search"
        placeholder="search products , brands and categories"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
      />
    </div>
  );
}
