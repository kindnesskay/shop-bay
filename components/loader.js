import { HourglassEmpty } from "@mui/icons-material";
export default function Loading() {
  return (
    <div className="backdrop-blur-sm bg-white/30 flex justify-center h-screen w-screen absolute left-0 top-0 items-center">
      <div
        className="loader text-white bg-sky-800 w-16 h-16 rounded-full "
        style={{
          display: "grid",
          placeItems: "center",
        }}
      >
        <HourglassEmpty />
      </div>
    </div>
  );
}
