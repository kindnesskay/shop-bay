"use client";
import Image from "next/image";
import IconButton from "@mui/material/IconButton";
import { ArrowBack, ExpandLess, ExpandMore } from "@mui/icons-material";
import { useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "@/app/context/usercontext";
import Loading from "./loader";
export default function ProductDetails({ item }) {
  const [hidden, setHidden] = useState(true);
  const router = useRouter();
  const { isLoading, setIsLoading } = useContext(UserContext);
  useEffect(() => {
    if (item) {
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    }
  }, [isLoading]);
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="h-full w-full p-4 relative ">
          <div className="w-full  h-8">
            <IconButton onClick={() => router.back()}>
              <ArrowBack />
            </IconButton>
          </div>
          <div className="w-full p-2 md:flex  gap-2">
            <div className="w-full flex  h-48 justify-center items-center">
              <Image
                className="w-auto max-w-full h-auto max-h-full"
                src={item.image || "/no_image.jpg"}
                height={200}
                width={200}
                alt={item.name}
              />
            </div>

            <div className="flex flex-col justify-center p-2">
              <p className="font-semibold text-xl">{name}</p>
              <p className="text-lg font-bold">
                ₦ {item.price}{" "}
                <del className="text-gray-400 text-sm">₦ 1000</del>
              </p>
              <div>
                <div className="flex justify-between items-center">
                  <p
                    className="text-gray-600 font-semibold text-sm"
                    onClick={() => setHidden(!hidden)}
                  >
                    Description
                  </p>
                  <IconButton onClick={() => setHidden(!hidden)}>
                    {hidden ? <ExpandMore /> : <ExpandLess />}
                  </IconButton>
                </div>

                <p className="text-center">
                  {hidden ? item.description.split(".")[0] : item.description}
                </p>
              </div>
              <div className="w-full flex flex-wrap justify-center gap-3 mt-2">
                <button
                  className="p-2 rounded-lg bg-sky-700 w-full max-w-xs h-12 text-white font-bold "
                  // onClick={() => handleAdd(item)}
                >
                  Add To Cart
                </button>
                <button
                  className="p-2 rounded-lg bg-sky-900 w-full h-12  max-w-xs text-white font-bold "
                  // onClick={() => handleAdd(item)}
                >
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
