"use client";
import SignUp from "@/components/form/siginUp";
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
      <SignUp getUser={setUser} />
    </>
  );
}

export default Page;
