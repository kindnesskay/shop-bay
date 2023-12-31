"use client";
import { ShopContext } from "@/context/usercontext";
import { useContext } from "react";
import { Menu, ShoppingCart } from "@mui/icons-material";
import Link from "next/link";
function NavBar() {
  const { itemsInCart, setMenuState, setCartState } = useContext(ShopContext);
  return (
    <nav className="w-full max-w-3xl flex z-40 px-8 justify-between fixed bg-sky-800 items-center h-16 pl-4 ">
      <button className="text-white" onClick={() => setMenuState(true)}>
        <Menu />
      </button>
      <Link className="font-bold text-xl text-white" href={"/"}>
        Shop Bay
      </Link>
      <button
        className="text-white w-fit p-2"
        onClick={() => setCartState(true)}
      >
        <ShoppingCart />
        <span>{itemsInCart}</span>
      </button>
    </nav>
  );
}

export default NavBar;
