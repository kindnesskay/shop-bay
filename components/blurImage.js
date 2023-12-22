"use client";
import { useState } from "react";
import Image from "next/image";
export default function BlurImage({ image, height, width, alt }) {
  const [isLoading, setLoading] = useState(true);
  return (
    <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg">
      <Image
        alt={alt || "image"}
        src={image || "/blur.png"}
        height={height || 200}
        width={width || 200}
        loading="lazy"
        className={`
              duration-700 ease-in-out group-hover:opacity-75 h-full h-full
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
