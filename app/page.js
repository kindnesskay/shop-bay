"use client";
import Image from "next/image";
import Link from "next/link";
export default function Page() {
  return (
    <>
      <div className="container" style={{ gap: 2 }}>
        <Image
          src={"/orange.jpg"}
          width={300}
          alt="orange image"
          height={300}
        />
        <h1>Fruits the fresh ones</h1>
        <Link href={"/shop"} style={{ padding: 5, textDecoration: "none" }}>
          Shop Products
        </Link>
      </div>
    </>
  );
}
