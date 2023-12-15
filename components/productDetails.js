"use client";
import Image from "next/image";
import IconButton from "@mui/material/IconButton";
import { ArrowBack, ExpandLess, ExpandMore } from "@mui/icons-material";
import { useRouter } from "next/navigation";
import { useState } from "react";
export default function ProductDetails({ item }) {
  const { name, price, image } = item || { name: "", price: "", image: "" };
  const [hidden, setHidden] = useState(true);
  const router = useRouter();
  const Description =
    "In product descriptions, it’s easy to fall into the trap of only describing the features of your products. But when you just list the features, you’re not actually helping your buyer understand how your product will help them.";
  return (
    <div className="h-full w-full p-4 relative ">
      <div className="w-full absolute h-8">
        <IconButton onClick={() => router.back()}>
          <ArrowBack />
        </IconButton>
      </div>
      <div className="w-full p-2 md:flex  gap-2">
        <div className="w-full flex justify-center">
          <Image
            className="w-auto max-w-sm h-auto max-h-sm"
            src={image || "/no_image.jpg"}
            height={500}
            width={500}
            alt={name}
          />
        </div>

        <div className="flex flex-col justify-center p-2">
          <p className="font-semibold text-xl">{name} text for full name</p>
          <p className="text-lg font-bold">
            ₦ {price} <del className="text-gray-400 text-sm">₦ 1000</del>
          </p>
          <div>
            <div className="flex justify-between items-center">
              <p
                className="text-gray-600 font-semibold text-md"
                onClick={() => setHidden(!hidden)}
              >
                Description
              </p>
              <IconButton onClick={() => setHidden(!hidden)}>
                {hidden ? <ExpandMore /> : <ExpandLess />}
              </IconButton>
            </div>

            <p>{hidden ? Description.split(".")[0] : Description}</p>
          </div>
          <div className="w-full flex flex-wrap justify-center gap-3 mt-2">
            <button
              className="p-2 rounded-lg bg-sky-700 w-44 h-12 text-white font-bold "
              // onClick={() => handleAdd(item)}
            >
              Add To Cart
            </button>
            <button
              className="p-2 rounded-lg bg-sky-900 w-44 h-12 text-white font-bold "
              // onClick={() => handleAdd(item)}
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
