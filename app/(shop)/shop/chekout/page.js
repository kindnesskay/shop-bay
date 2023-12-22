"use client";
import Checkout from "@/components/checkout";
import { useEffect, useState } from "react";

function Page() {
  const [total, setTotal] = useState(0);
  useEffect(() => {
    const getTotal = sessionStorage.getItem("cartTotal");
    setTotal(Number(getTotal));
  }, []);
  return <Checkout subtotal={total} />;
}

export default Page;
