"use client";
import { Auth, db } from "@/config/firebase";
import {
  collection,
  getDocs,
  getDoc,
  query,
  where,
  doc,
  deleteDoc,
} from "firebase/firestore";
import { getStorage, deleteObject, ref } from "firebase/storage";
import { useEffect, useState } from "react";

const Test_data = [
  {
    id: 1,
    name: "truck",
    price: 1200,
    description: "this is a description text",
    category: "cars",
    image: "/no_image.jpg",
  },
  {
    id: 2,
    name: "apple",
    price: 1200,
    description: "this is a description text",
    category: "food",
    image: "/no_image.jpg",
  },
  {
    id: 3,
    name: "orange",
    price: 1200,
    description: "this is a description text",
    category: "food",
    image: "/no_image.jpg",
  },
  {
    id: 4,
    name: "t-shirt",
    price: 1400,
    description: "this is a description text",
    category: "clothng",
    image: "/no_image.jpg",
  },
  {
    id: 5,
    name: "shorts",
    price: 1600,
    description: "this is a description text",
    category: "clothing",
    image: "/no_image.jpg",
  },
  {
    id: 6,
    name: "shirt",
    price: 1500,
    description: "this is a description text",
    category: "clothing",
    image: "/no_image.jpg",
  },
  {
    id: 7,
    name: "shirt",
    price: 1800,
    description: "this is a description text",
    category: "clothing",
    image: "/no_image.jpg",
  },
  {
    id: 8,
    name: "shirt",
    price: 1800,
    description: "this is a description text",
    category: "clothing",
    image: "/no_image.jpg",
  },
  {
    id: 9,
    name: "truck",
    price: 1200,
    description: "this is a description text",
    category: "cars",
    image: "/no_image.jpg",
  },
  {
    id: 10,
    name: "truck",
    price: 1200,
    description: "this is a description text",
    category: "cars",
    image: "/no_image.jpg",
  },
  {
    id: 11,
    name: "truck",
    price: 1200,
    description: "this is a description text",
    category: "cars",
    image: "/no_image.jpg",
  },
  {
    id: 12,
    name: "truck",
    price: 1200,
    description: "this is a description text",
    category: "cars",
    image: "/no_image.jpg",
  },
];
export default function Inventory() {
  const [data, setData] = useState([]);
  const fruitsRef = collection(db, "fruits");
  const [reload, setRelaod] = useState(true);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (!reload) return;
    async function getMyItems() {
      setLoading(true);
      try {
        const q = query(
          fruitsRef,
          where("userID", "==", Auth?.currentUser?.uid)
        );
        const QuerySnapshot = await getDocs(q);
        const itemsArray = QuerySnapshot.docs.map((doc) => {
          return {
            id: doc.id,
            name: doc.data().name,
            price: doc.data().price,
            description: doc.data().description,
          };
        });
        setData(itemsArray);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
      setRelaod(false);
    }
    getMyItems();
  }, [reload]);

  const handleDelete = async (id) => {
    setLoading(true);
    const docRef = doc(db, "fruits", id);
    const item = await getDoc(docRef);
    const imageName = item.data().imageName;
    const storage = getStorage();
    const imageref = ref(storage, "images/" + imageName);

    deleteObject(imageref)
      .then(async () => {
        await deleteDoc(docRef);
        setLoading(false);
      })
      .catch((error) => console.error(error));

    const newArray = data.filter((item) => {
      return item.id != id;
    });
    setData(newArray);
  };
  return (
    <>
      {loading ? (
        <p>loading....</p>
      ) : !data.length > 0 ? (
        <p>Nothing to show here</p>
      ) : (
        <div className="w-full overflow-x-auto p-2 ">
          <table className="w-full">
            <thead className="font-semibold red-border">
              <tr>
                <td>Name</td>
                <td>Description</td>
                <td>Category</td>
                <td>Price</td>
                <td>Delete</td>
              </tr>
            </thead>
            <tbody>
              {data &&
                data.map((prodcut) => {
                  return (
                    <tr key={prodcut.id}>
                      <td>{prodcut.name || "name"}</td>
                      <td>{prodcut.description || "description"}</td>
                      <td>{prodcut.category || "category"}</td>
                      <td>{prodcut.price || "price"}</td>
                      <td>
                        <button
                          onClick={() => handleDelete(prodcut.id)}
                          className="text-red-500"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
}
