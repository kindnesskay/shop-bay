import "./globals.css";
import { ShopContextProvider } from "../context/usercontext";
import NavBar from "@/components/NavBar";
import CartDrawer from "@/components/cartDrawer";
import MenuDrawer from "@/components/menuDrawer";

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="w-full flex justify-center min-h-screen bg-white">
      <ShopContextProvider>
        <body className=" w-full max-w-screen-2xl min-h-full relative flex flex-col justify-between overflow-y-auto">
          <header>
            <title>shop bay</title>
            <NavBar />
          </header>
          <CartDrawer />
          <MenuDrawer />
          <main className="w-full  pt-16 ">
            <section className="w-full ">{children}</section>
          </main>
          <footer className="h-12 bg-sky-950 "> </footer>
        </body>
      </ShopContextProvider>
    </html>
  );
}
