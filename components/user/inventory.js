import { Auth, db } from "@/config/firebase";
import { collection, getDoc, getDocs, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import RotateRight from "@mui/icons-material/RotateRight";

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
  return (
    <div style={{ width: "100%" }}>
      <Typography component="h2" variant="h5" color="secondary" gutterBottom>
        Inventory
      </Typography>
      <Table>
        <TableHead>
          <TableCell>Name</TableCell>
          <TableCell>Price</TableCell>
        </TableHead>
        <TableBody>
          {items &&
            items.map((fruit) => {
              return (
                <TableRow key={fruit.id}>
                  <TableCell>{fruit.name}</TableCell>
                  <TableCell>{fruit.price}</TableCell>
                </TableRow>
              );
            })}
        </TableBody>
      </Table>
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
