"use client";
import { Auth } from "@/config/firebase";
import { useContext, useEffect } from "react";
import { UserContext } from "../context/usercontext";
import Button from "@mui/material/Button";
import { useRouter } from "next/navigation";
import Profile from "@/components/user/profile";

import Link from "next/link";
function Page() {
  const { user } = useContext(UserContext);

  return (
    <div className="h-full w-full flex flex-col items-center">
      {user ? (
        <>
          <Profile />
        </>
      ) : (
        <div>
          <p>you are not logged in</p>
          <Link href={"/auth/login"}>
            <button className="bg-purple-600">Login</button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default Page;
