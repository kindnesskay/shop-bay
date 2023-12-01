"use client";
import "../../globals.css";
import { useState } from "react";
import Link from "next/link";
import { AppBar, Toolbar, IconButton, Drawer, Button } from "@mui/material";
import { Close, Login, Menu, PersonAdd } from "@mui/icons-material";
import MenuContents from "@/components/menuContents";
import { signOut } from "firebase/auth";
import { Auth } from "@/config/firebase";
import { useRouter } from "next/navigation";

export default function RootLayout({ children }) {
  const [menuState, setMenuState] = useState(false);
  const router = useRouter();
  const handleLogout = async () => {
    await signOut(Auth);
    router.push("/");
  };
  return (
    <>
      <AppBar color="secondary" position="static">
        <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>
          <IconButton sx={{ color: "#fff" }} onClick={() => setMenuState(true)}>
            <Menu />
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
          <Button onClick={handleLogout}>Logout</Button>
        </div>
      </Drawer>

      <>{children}</>
    </>
  );
}
