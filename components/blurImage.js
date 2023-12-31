"use client";
import { useState } from "react";
import Image from "next/image";
export default function BlurImage({ image, height, width, alt,onClick }) {
  const [isLoading, setLoading] = useState(true);
  
 
  return (
    <div className="w-full flex justify-center overflow-hidden rounded-lg">
      <Image
      onClick={onClick}
        alt={alt || "image"}
        src={image || "/blur.png"}
        height={height || 200}
        width={width || 200}
        loading="lazy"
        className={`
              duration-700 ease-in-out group-hover:opacity-75 h-auto w-auto max-h-full
              ${
                isLoading
                  ? "scale-110 blur-2xl grayscale"
                  : "scale-100 blur-0 grayscale-0"
              })`}
        onLoad={() => setLoading(false)}
      />

    </div>
  );
}
