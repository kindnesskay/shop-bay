"use client";
import { useRouter } from "next/navigation";
import { ArrowBack } from "@mui/icons-material";

function Layout({ children }) {
  const router = useRouter();
  return (
    <div className="w-screen">
      <div className="w-full  p-2">
        <button onClick={() => router.back()}>
          <ArrowBack />
        </button>
      </div>
      <div className="w-full">{children}</div>
    </div>
  );
}

export default Layout;
