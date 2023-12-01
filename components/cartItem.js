import { Card, Button } from "@mui/material";
import { Remove, Add } from "@mui/icons-material";
import Image from "next/image";
import { useEffect, useState } from "react";
function CartItem({ name, image, price, quantity, getCount, id }) {
  const [count, setCount] = useState(quantity);
  const reduce = () => {
    if (count === 0) return;
    setCount(Number(count) - 1);
  };
  const increase = () => {
    if (count === 99) return;
    setCount(Number(count) + 1);
  };

  useEffect(() => {
    getCount(id, count);
  }, [count]);
  return (
    <Card
      sx={{ padding: 2 }}
      variant="outlined"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Image
        src={image || "/no_image.jpg"}
        height={100}
        width={100}
        alt={name}
      />

      <div>
        <p style={{ textAlign: "center", fontWeight: 700, marginBottom: 5 }}>
          {name}
        </p>
        <p style={{ fontWeight: "bold" }}>${price}</p>
      </div>

      <div
        style={{
          display: "flex",
          gap: 5,
          flexDirection: "column",
          width: 40,
          alignItems: "center",
        }}
      >
        <Button onClick={increase}>
          <Add />
        </Button>
        <span>{count}</span>
        <Button onClick={reduce}>
          <Remove />
        </Button>
      </div>
    </Card>
  );
}

export default CartItem;
