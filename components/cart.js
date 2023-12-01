import { useEffect, useState } from "react";
import CartItem from "./cartItem";
import { getCartItems, editCart, deleteCartItem } from "@/tools/cartActions";
import { Button } from "@mui/material";
function Cart() {
  const db_name = "fruits_unique";
  const [cartArray, setCartArray] = useState([]);
  const [total, setTotal] = useState(null);
  const [change, setChange] = useState(false);
  const getTotal = (t, num) => {
    return t + num;
  };
  useEffect(() => {
    let items = getCartItems(db_name);
    setCartArray(items);
  }, []);
  const editQuantity = (id, count) => {
    setChange([id, count]);
    if (count == 0) {
      setCartArray(
        cartArray.filter((item) => {
          return item.id !== id;
        })
      );
      return deleteCartItem(db_name, id);
    }
    editCart(db_name, id, count);
  };

  useEffect(() => {
    if (!cartArray.length) return;
    let t = cartArray.map((item) => {
      return Number(item.price) * Number(item.quantity);
    });
    let tt = t.reduce(getTotal);
    setTotal(tt);
  }, [change]);
  return (
    <div
      style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: 5,
      }}
    >
      {!cartArray.length && <h4>No item in cart</h4>}
      {cartArray &&
        cartArray.map((item) => {
          return (
            <CartItem
              key={item.id}
              name={item.name}
              price={item.price}
              quantity={item.quantity}
              id={item.id}
              getCount={editQuantity}
            />
          );
        })}

      <Button variant="contained" color="secondary" sx={{ width: "100%" }}>
        Checkout
      </Button>
    </div>
  );
}

export default Cart;
