"use client";
import { ShopContext } from "@/app/context/usercontext";
import { Close, Person, Shop2 } from "@mui/icons-material";
import Drawer from "@mui/material/Drawer";
import { useContext } from "react";
import { HomeButton, LinkButton } from "./buttonLinks";

function MenuDrawer() {
  const { menuState, setMenuState } = useContext(ShopContext);
  return (
    <Drawer anchor="left" open={menuState} onClose={() => setMenuState(false)}>
      <div className="w-screen max-w-sm flex flex-col gap-2 h-full bg-white p-2">
        <div className="w-full p-2 flex justify-between ">
          <HomeButton />
          <button onClick={() => setMenuState(false)} className="p-2">
            <Close />
          </button>
        </div>

        <div className="w-full flex flex-col gap-2 p-2">
          <LinkButton
            title={"Profile"}
            link={"/user/profile"}
            icon={<Person />}
          />
          <LinkButton title={"Shop"} link={"/shop"} icon={<Shop2 />} />
        </div>
      </div>
    </Drawer>
  );
}

export default MenuDrawer;
