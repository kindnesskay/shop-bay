import { Add } from "@mui/icons-material";
import Image from "next/image";
import { useState } from "react";
import { IconButton } from "@mui/material";
export default function NewImageBox({ getImage }) {
  const [imageUrl, setImageUrl] = useState("");

  return (
    <>
      <div
        className="border-grey"
        style={{
          height: 150,
          width: 120,
          display: "grid",
          placeItems: "center",
          position: "relative",
        }}
      >
        {imageUrl && (
          <Image
            height={120}
            width={120}
            src={imageUrl}
            alt="image from file"
            style={{
              position: "absolute",
              width: "auto",
              height: "auto",
              maxHeight: "100%",
              maxWidth: "100%",
            }}
          />
        )}
        <IconButton>
          <input
            style={{ opacity: 0, position: "absolute" }}
            type="file"
            name="image"
            accept="image/*"
            onChange={(e) => {
              getImage(e.target.files[0]);
              setImageUrl(URL.createObjectURL(e.target.files[0]));
            }}
          />
          <Add color="primary" />
        </IconButton>
      </div>
    </>
  );
}
