import { UserContext } from "@/app/context/usercontext";
import { Auth } from "@/config/firebase";
import { signOut } from "firebase/auth";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useContext } from "react";
import { ShoppingCart } from "@mui/icons-material";
import IconButton from "@mui/material/IconButton";
export const LoginButton = () => {
  return (
    <>
      <Link href={"/auth/login"} className="w-full text-center">
        Login
      </Link>
    </>
  );
};
export const SignUpButton = () => {
  return (
    <>
      <Link href={"/auth/signup"} className="w-full text-center">
        Create Account
      </Link>
    </>
  );
};
export const ProfileButton = () => {
  return (
    <>
      <Link href={"/profile"} className="w-full text-center">
        profile
      </Link>
    </>
  );
};

export const SignOut = () => {
  const { user } = useContext(UserContext);
  const router = useRouter();
  const handleClick = () => {
    signOut(Auth);
    router.push("/");
  };
  return (
    <>
      {user && (
        <button
          onClick={handleClick}
          className="p-2  w-full text-center  font-semibold"
        >
          Signout
        </button>
      )}
    </>
  );
};

export const ShopButton = () => {
  return (
    <Link href={"/shop"} className="hover:none">
      <button className="w-full h-full p-1 text-left">Shop</button>
    </Link>
  );
};

export function ShoppingCartButton({ onClick }) {
  return (
    <IconButton onClick={onClick} className="w-fit flex text-sky-900">
      <ShoppingCart />
      <p className="text-lg font-semibold hidden lg:block">cart</p>
    </IconButton>
  );
}
