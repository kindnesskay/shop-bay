"use client";
import { useContext } from "react";
import { UserContext } from "../context/usercontext";
import Profile from "@/components/user/profile";

import Link from "next/link";
function Page() {
  const { user } = useContext(UserContext);

  return (
    <div className="h-full w-full">
      {user ? (
        <>
          <Profile />
        </>
      ) : (
        <div className="w-full flex gap-3 flex-col h-full items-center justify-center">
          <p className="w-full text-center">you are not logged in</p>
          <Link href={"/auth/login"}>
            <button className="w-16 text-center p-2 border-grey">Login</button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default Page;
