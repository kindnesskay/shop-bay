"use client";
import "../globals.css";

import { ShopContextProvider } from "@/context/usercontext";

export default function Rootlayout({ children }) {
  return (
    <ShopContextProvider>
      <main>{children}</main>
    </ShopContextProvider>
  );
}
