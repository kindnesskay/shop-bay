"use client";
import Dashboard from "@/components/dashboard";
import Inventory from "@/components/user/inventory";
import { Auth } from "@/config/firebase";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

function Page() {
  const router = useRouter();
  const [user, setUser] = useState(null);

  useEffect(() => {
    async function getUser() {
      if (!Auth.currentUser || Auth.currentUser === null) {
        router.push("/auth/login");
        return;
      }
      setUser(Auth.currentUser);
    }
    getUser();
  }, [user]);
  return <>{user && <Dashboard getuser={setUser} />}</>;
}

export default Page;
