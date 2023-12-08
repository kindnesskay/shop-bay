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
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
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
          <td>Name</td>
          <td>Price</td>
          <td></td>
        </tr>

        {items &&
          items.map((fruit) => {
            return (
              <tr key={fruit.id}>
                <td>{fruit.name}</td>
                <td>{fruit.price}</td>
                <td>
                  <button
                    onClick={() => handleDelete(fruit.id)}
                    className="text-red-500"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
      </table>
      {!items.length && (
        <Typography sx={{ textAlign: "center", padding: 2 }}>
          No data to show
        </Typography>
      )}
      <Button
        onClick={() => setRelaod(true)}
        color="secondary"
        startIcon={<RotateRight />}
      >
        reload
      </Button>
    </div>
  );
}

export default Inventory;
