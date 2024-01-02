import "./globals.css";
import { ShopContextProvider } from "../context/usercontext";
import NavBar from "@/components/NavBar";
import CartDrawer from "@/components/cartDrawer";
import MenuDrawer from "@/components/menuDrawer";
import { LinkButton } from "@/components/buttonLinks";
import { Person, Shop2 } from "@mui/icons-material";
import Promotions from "@/components/cards/Promotions";

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className="w-full flex justify-center bg-white"
    >
      <ShopContextProvider>
        <body className=" w-full max-w-6xl  flex flex-col  justify-between overflow-auto">
          <header>
            <title>shop bay</title>
            <NavBar />
          </header>
          <CartDrawer />
          <MenuDrawer />
          <main className="w-full pt-16 flex">
            <section className="w-3/12  flex max-lg:hidden">
              <div className="w-full flex flex-col gap-2 p-2">
                <LinkButton
                  title={"Profile"}
                  link={"/user/profile"}
                  icon={<Person />}
                />
                <LinkButton title={"Shop"} link={"/shop"} icon={<Shop2 />} />
              </div>
            </section>
            <section className="w-full pb-4 min-h-screen">{children}</section>
            <section className="w-3/12 h-full  flex flex-col justify-around gap-2 p-2 max-xl:hidden">

              <Promotions/>
              <Promotions/>
              <Promotions/>
            </section>
          </main>
          <footer className="h-48 bg-sky-950 "> </footer>
        </body>
      </ShopContextProvider>
    </html>
  );
}
