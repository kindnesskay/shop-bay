"use client";
import Image from "next/image";
import Link from "next/link";
import Typography from "@mui/material/Typography";
import berris from "../public/berries.png";
export default function Page() {
  return (
    <>
      <div className="bg-purple-700 w-full h-full flex flex-col space-between">
        <div className="flex flex-col items-center">
          <Typography
            variant="h1"
            sx={{
              fontSize: "clamp(40px,60px,80px)",
              position: "relative",
              zIndex: 1,
              textAlign: "center",
              fontWeight: "bold",
              color: "#fff",
            }}
          >
            Fruits,The Fresh Ones
          </Typography>

          <Image
            style={{
              position: "absolute",
              top: 120,
              width: "auto",
              height: "auto",
              maxHeight: 485,
              maxWidth: 514,
            }}
            src={berris}
            alt="orange image"
            priority
          />
          <Link
            href={"/shop"}
            style={{ padding: 5, textDecoration: "none", marginTop: 70 }}
          >
            <button className="p-2  z-10 relative text-white font-bold border-solid border-2 border-slate-200">
              Shop Products
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
