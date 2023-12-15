import { useEffect, useState } from "react";
import CartItem from "./cartItem";
import { getCartItems, editCart, deleteCartItem } from "@/tools/cartActions";
import { useRouter } from "next/navigation";
function Cart() {
  const db_name = "fruits_unique";
  const [cartArray, setCartArray] = useState([]);
  const [total, setTotal] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);
  const currency = "₦";
  const router = useRouter();
  useEffect(() => {
    let items = getCartItems(db_name);
    if (!items) return;
    setCartArray(items);
    let totalProducts = [];
    items.map((item) => {
      totalProducts = [
        ...totalProducts,
        { id: item.id, total: item.quantity * Number(item.price) },
      ];
    });
    setTotal(totalProducts);
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

  useEffect(() => {
    const totalAmountPrice = total.reduce((accumulator, currentObject) => {
      return accumulator + Number(currentObject.total);
    }, 0);
    setTotalAmount(totalAmountPrice);
  }, [total]);

  const handleChekout = () => {
    sessionStorage.setItem("cartTotal", totalAmount);
    router.push("/shop/chekout");
  };
  const handleTotal = (id, amount) => {
    if (!total.length) {
      setTotal([...total, { id: id, total: amount }]);
      return;
    }

    let items = total.filter((item) => {
      return id != item.id;
    });

    if (items) {
      setTotal([...items, { id: id, total: amount }]);
    }

    if (!items.length) {
      setTotal([...total, { id: id, total: amount }]);
    }
  };

  return (
    <>
      {!cartArray || cartArray.length < 1 ? (
        <h4 className="text-center mt-8 font-semibold">No Item in cart</h4>
      ) : (
        <div className="flex flex-col relative gap-3 items-center pt-8 w-full p-2">
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

          <h4 className="flex  p-2 justify-between text-gray-600 font-bold w-full">
            Total{" "}
            <span className="text-black">
              {currency}
              {totalAmount}
            </span>
          </h4>
          <button
            onClick={handleChekout}
            className="font-bold p-4 w-full rounded-lg bg-black text-white"
          >
            Continue to checkout
          </button>
        </div>
      )}
    </>
  );
}

export default Cart;
