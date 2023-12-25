import "./globals.css";
import { ShopContextProvider } from "./context/usercontext";
import NavBar from "@/components/NavBar";
import CartDrawer from "@/components/cartDrawer";
import MenuDrawer from "@/components/menuDrawer";

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="w-full flex justify-center min-h-screen">
      <ShopContextProvider>
        <body className=" w-full max-w-screen-2xl min-h-full relative overflow-x-hidden">
          <header>
            <title>shop bay</title>
            <NavBar />
          </header>
          <CartDrawer />
          <MenuDrawer />
          <main className="w-screen justify-between min-h-full pt-16 flex gap-4 ">
            <section className="w-full ">{children}</section>
          </main>
          <footer className="h-12 bg-sky-950 "> </footer>
        </body>
      </ShopContextProvider>
    </html>
  );
}
