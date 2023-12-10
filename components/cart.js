import { useEffect, useState } from "react";
import CartItem from "./cartItem";
import { getCartItems, editCart, deleteCartItem } from "@/tools/cartActions";
function Cart() {
  const db_name = "fruits_unique";
  const [cartArray, setCartArray] = useState([]);
  const [total, setTotal] = useState([]);

  useEffect(() => {
    let items = getCartItems(db_name);
    setCartArray(items);
  }, []);
  const editQuantity = (id, count) => {
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

  const handleTotal = (id, amount) => {
    if (!total.length) return setTotal([...total, { id: id, total: amount }]);
    let newArray = total;
    let item = newArray.map((product) => {
      if (product.id == id) {
        product = { id: id, total: amount };
        newArray = item;
        return true;
      }
      return false;
    });
    if (!item) {
      newArray = [...newArray, { id: id, total: amount }];
    }

    console.log(newArray);
  };
  return (
    <>
      {!cartArray || !cartArray.length > 1 ? (
        <h1>No Item in cart</h1>
      ) : (
        <div
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            gap: 5,
            alignItems: "center",
            paddingTop: 20,
          }}
        >
          {cartArray.map((item) => {
            return (
              <CartItem
                key={item.id}
                name={item.name}
                price={item.price}
                quantity={item.quantity}
                id={item.id}
                getCount={editQuantity}
                image={item.image}
                getTotal={handleTotal}
              />
            );
          })}
          {/* <Checkout total={total} /> */}
        </div>
      )}
    </>
  );
}

function Checkout({ total }) {
  return (
    <>
      <h4>{total}</h4>
    </>
  );
}

export default Cart;
