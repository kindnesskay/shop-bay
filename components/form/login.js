"use client";
import { useContext, useEffect, useState } from "react";
import Link from "next/link";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Auth } from "@/config/firebase";
import { useRouter } from "next/navigation";
import { ShopContext } from "@/context/usercontext";
import Loading from "../loader";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const { user, setUser, isLoading, setIsLoading } = useContext(ShopContext);
  const [visible,setVisible]=useState(false)
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
      setVisible(true)
    }, 1000);
    if (user !== null) {
      router.push("/user/profile");
    }
  }, [user]);
  const handleSignIn = async (e) => {
    e.preventDefault();
    if (user) return;
    if (!email) return setEmailError("Please Enter Email");
    setEmailError("");
    if (!password) return setPasswordError("Please Enter Password");
    setPasswordError("");
    setIsLoading(true);
    await signInWithEmailAndPassword(Auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        setUser(user);
      })
      .catch((error) => console.log(error.code, error.message));
  };
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        visible &&
        <section className="flex justify-center items-center w-full p-2">
          <form className="flex flex-col gap-4 w-full max-w-sm">
            <h4 className="text-center text-4xl font-semibold">Welcome Back</h4>
            <label htmlFor="email" className="text-2xl font-semibold ">
              Email
            </label>
            <input
              name="email"
              className="text-center h-16 text-2xl text-gray-700 text-md rounded-xl ring-1 ring-inset ring-gray-400 p-2"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <span>{emailError}</span>
            <label htmlFor="password" className="text-2xl font-semibold">
              {" "}
              Password
            </label>
            <input
              className="text-center text-gray-700 h-16  text-2xl text-md rounded-xl ring-1 ring-inset ring-gray-400 p-2"
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <span>{passwordError}</span>
            <button
              onClick={handleSignIn}
              className="bg-sky-950 text-white h-16 p-2 w-full rounded-xl font-semibold text-2xl"
            >
              LogIn
            </button>

            <p className="text-center text-lg text-gray-800">
              Dont have an account?{" "}
              <Link
                href="/auth/signup"
                className="underline underline-offset-4"
              >
                sign up
              </Link>
            </p>
          </form>
        </section>
      )}
    </>
  );
}

export default Login;
