import { Auth, db } from "@/config/firebase";
import {
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import RotateRight from "@mui/icons-material/RotateRight";
import { deleteObject, getStorage, ref } from "firebase/storage";

function Inventory() {
  const [items, setItems] = useState([]);
  const fruitsRef = collection(db, "fruits");

  const [reload, setRelaod] = useState(true);
  const q = query(fruitsRef, where("userID", "==", Auth.currentUser.uid));
  useEffect(() => {
    if (!reload) return;
    async function getMyItems() {
      try {
        const QuerySnapshot = await getDocs(q);
        const itemsArray = QuerySnapshot.docs.map((doc) => {
          return { id: doc.id, name: doc.data().name, price: doc.data().price };
        });
        setItems(itemsArray);
      } catch (error) {
        console.error(error);
      }
      setRelaod(false);
    }
    getMyItems();
  }, [reload]);

  const handleDelete = async (id) => {
    const docRef = doc(db, "fruits", id);
    const item = await getDoc(docRef);
    const imageName = item.data().imageName;
    const storage = getStorage();
    const imageref = ref(storage, "images/" + imageName);

    deleteObject(imageref)
      .then(async () => {
        await deleteDoc(docRef);
        console.log("done");
      })
      .catch((error) => console.error(error));
  };
  return (
    <div style={{ width: "100%" }}>
      <h4 className="text-2xl font-semibold ">Inventory</h4>
      <table className="w-full max-w-sm">
        <tr>
          <th>Name</th>
          <th>Price</th>
          <th>Remove</th>
        </tr>

        {items &&
          items.map((fruit) => {
            return (
              <tr key={fruit.id} className="text-center">
                <td className="text-center">{fruit.name}</td>
                <td className="text-center">{fruit.price}</td>
                <td className="text-center">
                  <button
                    onClick={() => handleDelete(fruit.id)}
                    className="text-red-500 "
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
      </table>
      {!items.length && (
        <p className="text-center text-grey-600 font-semibold">
          No data to show
        </p>
      )}
      <button onClick={() => setRelaod(true)} className="mt-4 text-sky-900">
        <RotateRight />
        reload
      </button>
    </div>
  );
}

export default Inventory;
