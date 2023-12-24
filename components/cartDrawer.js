"use client";
import { ShopContext } from "@/app/context/usercontext";
import { Close } from "@mui/icons-material";
import Drawer from "@mui/material/Drawer";
import { useContext } from "react";
import Cart from "./store/cart";
function CartDrawer() {
  const { cartState, setCartState } = useContext(ShopContext);
  return (
    <Drawer anchor="right" open={cartState} onClose={() => setCartState(false)}>
      <div className="w-screen max-w-sm  bg-white p-2">
        <button onClick={() => setCartState(false)}>
          <Close />
        </button>
        <div>
          <Cart />
        </div>
      </div>
    </Drawer>
  );
}

export default CartDrawer;
