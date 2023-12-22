"use client";
import { useContext, useEffect, useState } from "react";
import Link from "next/link";
import { Auth } from "@/config/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

import { useRouter } from "next/navigation";
import Loading from "../loader";
import { ShopContext } from "@/app/context/usercontext";
function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [verifyPwd, setVerfyPwd] = useState("");
  const [pwd_error, setPwdError] = useState("");
  const { user, setUser, isLoading, setIsLoading } = useContext(ShopContext);

  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    if (user !== null) {
      router.push("/user/profile");
    }
  }, [user]);
  const handleSignUp = async (e) => {
    e.preventDefault();
    if (user) return;
    if (!email) return;
    if (!password) return setPwdError("Create a password");
    if (password !== verifyPwd) {
      setPwdError("Password do no match ");
      return;
    }
    setPwdError("");
    setIsLoading(true);
    await createUserWithEmailAndPassword(Auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        setUser(user);
      })
      .catch((error) => {
        console.log(error.code);
      });
  };
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <section className="w-full flex justify-center h-full items-center p-2">
          <form className="flex flex-col gap-4 w-full max-w-sm">
            <h4 className="text-center text-4xl font-semibold">Hi,There</h4>

            <label htmlFor="email" className="text-2xl font-semibold ">
              Email
            </label>
            <input
              name="email"
              className="text-center text-gray-700 text-2xl h-16 text-lg rounded-xl ring-1 ring-inset ring-gray-400 p-2"
              placeholder="EMAIL"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="password" className="text-2xl font-semibold ">
              Password
            </label>
            <input
              className="text-center text-gray-700 text-2xl h-16 text-gl rounded-xl ring-1 ring-inset ring-gray-400 p-2"
              name="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <label htmlFor="verifypassword" className="text-2xl font-semibold ">
              Verify password
            </label>
            <input
              className="text-center text-gray-700 text-2xl h-16 text-2xl rounded-xl ring-1 ring-inset ring-gray-400 p-2"
              name="verifypassword"
              type="password"
              value={verifyPwd}
              onChange={(e) => setVerfyPwd(e.target.value)}
            />
            <span>{pwd_error}</span>

            <button
              onClick={handleSignUp}
              className="text-white w-full p-2 text-2xl h-16 font-semibold bg-sky-950 rounded-xl"
            >
              Sign up
            </button>
            <p className="text-center text-xl text-sm text-gray-800">
              Already have an Account?{" "}
              <Link href="/auth/login" className="underline underline-offset-4">
                Login
              </Link>
            </p>
          </form>
        </section>
      )}
    </>
  );
}

export default SignUp;
