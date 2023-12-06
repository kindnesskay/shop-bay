import { HourglassEmpty } from "@mui/icons-material";
export default function Loading() {
  return (
    <div
      style={{
        height: "100%",
        display: "grid",
        placeItems: "center",
        width: "100%",
        position: "absolute",
      }}
    >
      <div
        className="loader"
        style={{
          backgroundColor: "blueviolet",
          width: 100,
          height: 100,
          display: "grid",
          placeItems: "center",
          borderRadius: "50%",
          color: "#fff",
        }}
      >
        <HourglassEmpty />
      </div>
    </div>
  );
}
