import { Card, Button } from "@mui/material";
import { Remove, Add } from "@mui/icons-material";
import Image from "next/image";
import { useEffect, useState } from "react";
function CartItem({ name, image, price, quantity, getCount, id, getTotal }) {
  const [count, setCount] = useState(quantity);
  const [total, setTotal] = useState(price);
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
    setTotal(Number(price) * Number(count));
    if (getTotal) {
      getTotal(Number(price) * Number(count));
    }
  }, [count]);
  return (
    <Card
      sx={{ width: "100%", padding: 1 }}
      variant="outlined"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <div
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Image
          src={image || "/no_image.jpg"}
          height={80}
          width={80}
          alt={name}
        />

        <div style={{ padding: 5, maxWidth: 100 }}>
          <p style={{ textAlign: "center", fontWeight: 500, marginBottom: 5 }}>
            {name}
          </p>
          <p style={{ fontWeight: 500 }}>${price}</p>
        </div>

        <div
          style={{
            display: "flex",
            gap: 5,
            flexDirection: "column",
            maxWidth: 40,
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
      </div>
      <span style={{ fontWeight: 500, color: "grey" }}> total ${total}</span>
    </Card>
  );
}

export default CartItem;
