"use client";
import "../globals.css";

import { ShopContextProvider } from "@/context/usercontext";

export default function Rootlayout({ children }) {
  return (
    <html>
      <body>
        <header>
          <title>Shop bay</title>
        </header>
        <ShopContextProvider>
          <main>{children}</main>
        </ShopContextProvider>
      </body>
    </html>
  );
}
