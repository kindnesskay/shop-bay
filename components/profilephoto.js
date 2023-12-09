import Image from "next/image";
import { useState } from "react";
export default function Profilephoto() {
  const [imageUrl, setImageUrl] = useState(null);
  return (
    <div className="h-48 w-48 overflow-hidden relative border-grey rounded-full ">
      <Image
        height={100}
        priority
        width={100}
        className="h-full w-full rounded-full"
        src={imageUrl || "/no_image.jpg"}
        alt="profile photo"
      />

      <input
        className="h-full w-full  absolute top-0 opacity-0"
        type="file"
        name="image"
        accept="image/*"
        onChange={(e) => {
          setImageUrl(URL.createObjectURL(e.target.files[0]));
        }}
      />
    </div>
  );
}
