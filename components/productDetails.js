import Image from "next/image";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { useState } from "react";
import IconButton from "@mui/material/IconButton";
import { ArrowBack, ExpandLess, ExpandMore } from "@mui/icons-material";
import { useRouter } from "next/navigation";
export default function ProductDetails({ item }) {
  const { name, price, image } = item || { name: "", price: "", image: "" };
  const [hidden, setHidden] = useState(true);
  const router = useRouter();
  const Description =
    "In product descriptions, it’s easy to fall into the trap of only describing the features of your products. But when you just list the features, you’re not actually helping your buyer understand how your product will help them.";
  return (
    <div style={{ width: "100%", height: "100%", overflowY: "auto" }}>
      <div style={{ height: 50, width: "100%", position: "absolute" }}>
        <IconButton onClick={() => router.back()}>
          <ArrowBack />
        </IconButton>
      </div>
      <Card
        variant="outlined"
        style={{
          paddingBottom: 10,
        }}
      >
        <Image
          style={{
            width: "100%",
            height: "auto",
          }}
          src={image || "/no_image.jpg"}
          height={500}
          width={500}
          alt={name}
        />

        <div style={{ padding: 10 }}>
          <p style={{ fontWeight: "bold", fontSize: 20, padding: 5 }}>
            {name} text for full name
          </p>
          <p style={{ fontWeight: "bold", fontSize: 18 }}>
            ₦ {price} <del style={{ color: "grey", fontSize: 12 }}>₦ 1000</del>
          </p>
          <div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <p
                style={{
                  marginTop: 5,
                  fontSize: 14,
                  color: "grey",
                  fontWeight: "bold",
                }}
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
          <div
            style={{
              display: "flex",
              gap: 5,
              alignItems: "center",
              justifyContent: "center",
              padding: 10,
            }}
          >
            <Button
              variant="contained"
              color="secondary"

              // onClick={() => handleAdd(item)}
            >
              Add To Cart
            </Button>
            <Button
              variant="outlined"
              color="secondary"
              // onClick={() => handleAdd(item)}
            >
              Buy Now
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
}
