"use client";

import { useState } from "react";
import Link from "next/link";
import { AppBar, Toolbar, IconButton, Drawer } from "@mui/material";
import {
  Close,
  Home,
  Login,
  Menu,
  PersonAdd,
  Shop,
  Shop2,
} from "@mui/icons-material";
import Cart from "@/components/cart";
import MenuContents from "@/components/menuContents";
export default function RootLayout({ children }) {
  const [menuState, setMenuState] = useState(false);
  const [cartState, setCartState] = useState(false);

  return (
    <>
      <AppBar color="secondary" position="static">
        <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>
          <IconButton sx={{ color: "#fff" }} onClick={() => setMenuState(true)}>
            <Menu />
          </IconButton>

          <IconButton sx={{ color: "#fff" }} onClick={() => setCartState(true)}>
            <Shop2 />
          </IconButton>
        </Toolbar>
      </AppBar>
      {/* menu drawer */}
      <Drawer
        open={menuState}
        anchor="left"
        onClose={() => setMenuState(false)}
      >
        <IconButton sx={{ width: 50 }} onClick={() => setMenuState(false)}>
          <Close />
        </IconButton>
        <div style={{ width: 300 }}>
          <div>
            <MenuContents title={"Navigation"} />
            <Link href="/shop">
              <IconButton>
                <Shop />
              </IconButton>
            </Link>
            <Link href="/">
              <IconButton>
                <Home />
              </IconButton>
            </Link>
          </div>
          <div>
            <MenuContents title={"Account"} />
            <Link href="/auth/login">
              <IconButton>
                <Login />
              </IconButton>
            </Link>
            <Link href="/auth/signup">
              <IconButton>
                <PersonAdd />
              </IconButton>
            </Link>
          </div>
          <MenuContents
            title={"category"}
            array={["sweets", "bitter", "juice"]}
          />
          <MenuContents
            title={"Product"}
            array={["food", "tea", "fragrance"]}
          />
        </div>
      </Drawer>
      {/* cart drawer */}
      <Drawer
        onClose={() => setCartState(false)}
        open={cartState}
        anchor="right"
      >
        <IconButton sx={{ width: 50 }} onClick={() => setCartState(false)}>
          <Close />
        </IconButton>
        <div style={{ width: 300, padding: 10 }}>
          <Cart />
        </div>
      </Drawer>
      <>{children}</>
    </>
  );
}
