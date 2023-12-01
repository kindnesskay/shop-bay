import Image from "next/image";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import { Add } from "@mui/icons-material";
import Link from "next/link";
function ProductCard({ item, handleAdd, linkRef }) {
  const { name, price, image } = item;
  return (
    <>
      <Card
        sx={{ paddingX: 5 }}
        variant="outlined"
        style={{
          maxWidth: 200,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Link href={linkRef}>
          <Image
            src={image || "/no_image.jpg"}
            height={150}
            width={150}
            alt={name}
          />
        </Link>
        <p style={{ textAlign: "center", fontWeight: 700, marginBottom: 5 }}>
          {name}
        </p>
        <div
          style={{
            display: "flex",
            gap: 5,
            alignItems: "center",
            paddingBottom: 5,
          }}
        >
          <Button
            variant="contained"
            color="secondary"
            onClick={() => handleAdd(item)}
          >
            <Add />
          </Button>
          <p style={{ fontWeight: "bold" }}>${price}</p>
        </div>
      </Card>
    </>
  );
}

export default ProductCard;
