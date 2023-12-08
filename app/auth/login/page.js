"use client";
import { UserContext } from "@/app/context/usercontext";
import Login from "@/components/form/login";
import { useRouter } from "next/navigation";
import { useContext, useEffect } from "react";
function Page() {
  const { user, setUser } = useContext(UserContext);
  const router = useRouter();
  useEffect(() => {
    if (user !== null) {
      router.push("/profile");
    }
  }, [user]);
  return (
    <>
      <Login getUser={setUser} />
    </>
  );
}

export default Page;
