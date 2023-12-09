"use client";
import { useContext, useEffect, useState } from "react";
import Link from "next/link";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Auth } from "@/config/firebase";
import { UserContext } from "@/app/context/usercontext";
import { useRouter } from "next/navigation";
import Loading from "../loader";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const { user, setUser } = useContext(UserContext);
  const { isLoading, setIsLoading } = useContext(UserContext);
  const router = useRouter();
  useEffect(() => {
    setIsLoading(false);
    if (user !== null) {
      router.push("/profile");
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
        <section className="h-full flex justify-center items-center p-2">
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
                onClick={() => setIsLoading(true)}
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
