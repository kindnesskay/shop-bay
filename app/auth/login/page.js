"use client";
import Login from "@/components/form/login";
import { Auth } from "@/config/firebase";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
function Page() {
  const [user, setUser] = useState(null);
  const router = useRouter();
  useEffect(() => {
    if (user) {
      router.push("/admin");
    }
  }, [user]);
  return (
    <>
      <Login getUser={setUser} />
    </>
  );
}

export default Page;
