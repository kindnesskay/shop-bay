import Inventory from "@/components/user/inventory";
import { Auth, db } from "@/config/firebase";
import { getAuth } from "firebase/auth";
import {
  collection,
  getDocs,
  getDoc,
  query,
  where,
  doc,
} from "firebase/firestore";

import { Suspense } from "react";
async function getData() {
  const fruitsRef = collection(db, "fruits");

  try {
    const q = query(fruitsRef, where("userID", "==", 12));

    const QuerySnapshot = await getDocs(q);

    const itemsArray = QuerySnapshot.docs.map((doc) => {
      return {
        id: doc.id,
        name: doc.data().name,
        price: doc.data().price,
        description: doc.data().description,
      };
    });
    return itemsArray;
  } catch (error) {
    console.log(error);
  }
}
async function page() {
  const data = await getData();
  console.log(data);
  return (
    <>
      <Suspense fallback={<p>Loading...</p>}>
        <Inventory data={data} />
      </Suspense>
    </>
  );
}

export default page;
