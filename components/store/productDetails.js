"use client";
import IconButton from "@mui/material/IconButton";
import { Cancel, ExpandLess, ExpandMore, Opacity } from "@mui/icons-material";
import { useContext, useEffect, useState } from "react";
import BlurImage from "../blurImage";
import { ShopContext } from "@/context/usercontext";
import Loading from "../loader";
import Image from "next/image";
export default function ProductDetails({ handleAdd, item }) {
  const [hidden, setHidden] = useState(false);
  const [visible, setVisible] = useState(false);
  const { isLoading, setIsLoading } = useContext(ShopContext);

  const [fullView, setFullView] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setVisible(true);
      setIsLoading(false);
    }, 1000);
  }, []);
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        visible && (
          <div className="h-full w-full p-4">
            <div className="w-full p-2 md:flex h-fit gap-2 justify-center">
              <div className="w-full flex md:w-1/2 md:h-full max-h-sm justify-center items-center h-60 overflow-hidden">
                <BlurImage
                  image={item.image}
                  onClick={() => setFullView(true)}
                />
              </div>

              {fullView && !isLoading && (
                <div className="absolute px-2 z-50 h-svh w-full backdrop-blur-sm  top-2 left-0 flex flex-col justify-center ">
                  <div className="w-full">
                    <button
                      onClick={() => setFullView(false)}
                      className=" text-gray-500"
                    >
                      <Cancel />
                    </button>
                  </div>
                  <div className="w-full h-3/4 flex justify-center">
                    <Image
                      alt="full image"
                      src={item.image}
                      height={500}
                      width={500}
                      className="h-auto  w-auto max-w-full max-h-full"
                    />
                  </div>
                </div>
              )}

              <div className="flex flex-col justify-center  p-2 md:w-1/2 md:max-w-sm">
                <p className="font-semibold text-xl">{item.name}</p>
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
                      {hidden ?  <ExpandLess /> :<ExpandMore/>}
                    </IconButton>
                  </div>

                  <p className="text-center">
                    {hidden ? item.description.split(".")[0] : item.description}
                  </p>
                </div>
                <div className="w-full flex flex-col sm:flex-row sm:ml-auto sm:mr-auto sm:max-w-sm items-center justify-center gap-3 mt-2">
                  <button
                    className="p-2 rounded-lg bg-sky-700 w-full max-w-xs h-12 text-white font-bold md:w-1/2"
                    onClick={() => handleAdd(item)}
                  >
                    Add To Cart
                  </button>
                  <button
                    className="p-2 rounded-lg bg-sky-900 w-full h-12  max-w-xs text-white font-bold md:w-1/2"
                    // onClick={() => handleAdd(item)}
                  >
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        )
      )}
    </>
  );
}
