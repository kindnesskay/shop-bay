"use client";
import "./globals.css";
import Link from "next/link";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import { Close, Menu } from "@mui/icons-material";
import { Suspense, useState } from "react";
import Cart from "@/components/cart";
import { UserContextProvider } from "./context/usercontext";
import Profilenav from "@/components/profilenav";
import Image from "next/image";
import MenuContents from "@/components/menuContents";
import {
  LoginButton,
  ProfileButton,
  ShopButton,
  SignOut,
  SignUpButton,
  ShoppingCartButton,
} from "../components/buttonLinks";
import logo from "../assets/logo.svg";
import Loading from "@/components/loader";
export default function RootLayout({ children }) {
  const [menuState, setMenuState] = useState(false);
  const [cartState, setCartState] = useState(false);
  return (
    <html lang="en">
      <UserContextProvider>
        <body className=" w-full h-screen relative overflow-x-hidden">
          <header>
            <title>Fruits website</title>
            <nav className="w-full flex gap-3 justify-between items-center h-16 pl-4 ">
              <div className="flex gap-4">
                <IconButton
                  onClick={() => setMenuState(true)}
                  className="text-sky-900"
                >
                  <Menu />
                </IconButton>
              </div>
              <Link href="/">
                <Image alt="logo" height={48} width={48} src={logo} />
              </Link>

              <div className="flex gap-2 items-center p-3">
                <ShoppingCartButton onClick={() => setCartState(true)} />
                <Profilenav />
              </div>
            </nav>
          </header>
          <Drawer
            anchor="left"
            open={menuState}
            onClose={() => setMenuState(false)}
          >
            <div className="relative h-full w-64">
              <div className="flex gap-3">
                <IconButton
                  className="text-black"
                  onClick={() => setMenuState(false)}
                >
                  <Close />
                </IconButton>
                <div>
                  <Image alt="logo" height={48} width={48} src={logo} />
                </div>
              </div>
              <MenuContents
                title={"Account"}
                array={[<ProfileButton />, <LoginButton />, <SignUpButton />]}
              />
              <MenuContents title={"Navigations"} array={[<ShopButton />]} />
              <MenuContents
                title={"categories"}
                array={["Clothing", "Shoes", "Accessories"]}
              />
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
          <Suspense fallback={<Loading />}>
            <main className="flex-1 h-full">{children}</main>
          </Suspense>

          <footer className="h-16 w-full"></footer>
        </body>
      </UserContextProvider>
    </html>
  );
}
