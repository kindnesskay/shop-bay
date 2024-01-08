"use client";
import { ShopContext } from "@/context/usercontext";
import { useContext } from "react";
import { Menu, ShoppingCart } from "@mui/icons-material";
import Link from "next/link";

import { Person } from "@mui/icons-material";
function NavBar() {
  const { itemsInCart, setMenuState, setCartState } = useContext(ShopContext);
  return (
    <nav className="w-full flex z-40 px-8 justify-between fixed max-w-8xl bg-sky-800 items-center h-16 pl-4">
      <button
        className="text-white lg:hidden"
        onClick={() => setMenuState(true)}
      >
        <Menu />
      </button>
      <Link className="font-bold text-xl text-white" href={"/"}>
        Shop Bay
      </Link>
      <div className="flex gap-2">
        <button
          className="text-white w-fit p-2 "
          onClick={() => setCartState(true)}
        >
          <ShoppingCart />
          <span>{itemsInCart}</span>
        </button>
        <Link href={"/user/profile"} className="text-white w-fit p-2">
          <Person />
        </Link>
      </div>
    </nav>
  );
}

export default NavBar;
