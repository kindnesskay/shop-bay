"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
export default function BlurImage({ image, height, width, alt, onClick }) {
  const [isLoading, setLoading] = useState(true);

  return (
    <div className="w-full flex justify-center overflow-hidden rounded-lg">
      <Image
        onClick={onClick}
        alt={alt || "image"}
        src={image || "/blur.png"}
        height={height || 200}
        width={width || 200}
        priority
        className={`h-auto w-auto max-h-full`}
      />
    </div>
  );
}
