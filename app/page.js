"use client";
import Image from "next/image";
import Link from "next/link";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
export default function Page() {
  return (
    <>
      <Box
        sx={{
          bgcolor: "rebeccapurple",
          position: "relative",
          width: "100%",
          height: "100%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            height: "70%",
            paddingTop: 5,
          }}
        >
          <Typography
            variant="h1"
            sx={{
              fontSize: "clamp(40px,60px,80px)",
              position: "relative",
              zIndex: 1,
              textAlign: "center",
              fontWeight: "bold",
              color: "#fff",
            }}
          >
            Fruits,The Fresh Ones
          </Typography>

          <Image
            style={{
              position: "absolute",
              top: 120,
              width: "auto",
              height: "auto",
              maxHeight: 485,
              maxWidth: 514,
            }}
            src={"/berries.png"}
            alt="orange image"
            width={300}
            height={300}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            height: "30%",
            bgcolor: "#000",
          }}
        >
          <Link
            href={"/shop"}
            style={{ padding: 5, textDecoration: "none", marginTop: 70 }}
          >
            <Button
              variant="contained"
              color="secondary"
              sx={{ fontWeight: "bold" }}
            >
              Shop Products
            </Button>
          </Link>
        </Box>
      </Box>
    </>
  );
}
