"use client";
import "./globals.css";
import Link from "next/link";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import { Close, Menu } from "@mui/icons-material";
import { useEffect, useState } from "react";
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
import { usePathname } from "next/navigation";
export default function RootLayout({ children }) {
  const [menuState, setMenuState] = useState(false);
  const [cartState, setCartState] = useState(false);
  const pathname = usePathname();
  useEffect(() => {
    setCartState(false);
    setMenuState(false);
  }, [pathname]);

  return (
    <html lang="en" className="w-full flex min-h-screen justify-center">
      <UserContextProvider>
        <body className=" w-full max-w-7xl min-h-screen  relative overflow-x-hidden">
          <header>
            <title>Fruits website</title>

            <nav className="w-full flex gap-3 lg:justify-center justify-between items-center h-16 pl-4 ">
              <div className="flex gap-4 lg:hidden">
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

              <div className="flex gap-2 items-center lg:hidden p-3">
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
            <div className="w-[90vw]  lg:w-[40vw] max-w-lg">
              <Cart />
            </div>
          </Drawer>

          <main className="h-full justify-between flex h-full">
            <aside className="h-full hidden w-1/5 lg:block">
              <div className="relative h-full w-full">
                <div className="flex gap-3">
                  <div>
                    <Link href={"/"}>
                      <Image alt="logo" height={48} width={48} src={logo} />
                    </Link>
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
            </aside>
            <section className="h-full w-full lg:w-4/5">{children}</section>
            <aside className="h-full w-1/5 hidden lg:block">
              <div className="flex flex-col gap-2 red-borders p-3">
                <ShoppingCartButton onClick={() => setCartState(true)} />
                <Profilenav />
              </div>
            </aside>
          </main>
          <footer className="w-full"></footer>
        </body>
      </UserContextProvider>
    </html>
  );
}
