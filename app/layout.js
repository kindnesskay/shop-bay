"use client";
import "./globals.css";
import Link from "next/link";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import { Menu, ShoppingCart } from "@mui/icons-material";
import { useState } from "react";
import Cart from "@/components/cart";
import { UserContextProvider } from "./context/usercontext";
import Profilenav from "@/components/profilenav";
import MenuContents from "@/components/menuContents";
import {
  LoginButton,
  ProfileButton,
  ShopButton,
  SignOut,
  SignUpButton,
} from "@/components/buttonLinks";

export default function RootLayout({ children }) {
  const [menuState, setMenuState] = useState(false);
  const [cartState, setCartState] = useState(false);
  return (
    <html lang="en">
      <UserContextProvider>
        <body className=" w-full h-screen relative overflow-hidden pb-28">
          <header>
            <title>Fruits website</title>
            <nav className="w-full flex gap-3 justify-between items-center h-14 bg-purple-700">
              <IconButton
                sx={{ color: "#fff" }}
                onClick={() => setMenuState(true)}
              >
                <Menu />
              </IconButton>
              <Link href="/" className="text-white font-bold text-lg">
                Fruits
              </Link>

              <div className="flex gap-2 items-center p-3">
                <IconButton
                  className="text-white"
                  onClick={() => setCartState(true)}
                >
                  <ShoppingCart />
                </IconButton>
              </div>
              <Profilenav />
            </nav>
          </header>
          <Drawer
            anchor="left"
            open={menuState}
            onClose={() => setMenuState(false)}
          >
            <div style={{ width: 250 }} className="pb-4 relative h-full ">
              <MenuContents
                title={"Account"}
                array={[<ProfileButton />, <LoginButton />, <SignUpButton />]}
              />
              <MenuContents title={"Navigations"} array={[<ShopButton />]} />
              <div className="absolute bottom-0 w-full mb-4">
                <SignOut />
              </div>
            </div>
          </Drawer>
          <Drawer
            anchor="right"
            open={cartState}
            onClose={() => setCartState(false)}
          >
            <div style={{ width: 250 }}>
              <Cart />
            </div>
          </Drawer>

          <main className=" h-full overflow-auto">{children}</main>

          <footer className="h-14 w-full bg-purple-700 absolute bottom-0"></footer>
        </body>
      </UserContextProvider>
    </html>
  );
}
