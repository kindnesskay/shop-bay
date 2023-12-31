"use client";
import { useContext, useEffect, useState } from "react";
import Link from "next/link";
import { Auth } from "@/config/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/navigation";
import Loading from "../loader";
import { ShopContext } from "@/context/usercontext";
function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [verifyPwd, setVerfyPwd] = useState("");
  const [pwd_error, setPwdError] = useState("");
  const { user, setUser, isLoading, setIsLoading } = useContext(ShopContext);
  const [visible, setVisible] = useState(true);
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
      setVisible(true);
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
      {visible && (
        <section className="p-2 flex justify-center h-screen items-center ">
          <form className="flex flex-col w-full p-2 max-w-sm gap-2">
            <h4 className="text-center text-2xl mb-2">Welcome to Shop Bay</h4>
            <p className="text-center text-xs font-thin">
              Sign up with your email and create a strong password to continue
            </p>

            <label htmlFor="email" className="text-md flex flex-col">
              Email
              <input
                name="email"
                placeholder="Email"
                className=" text-gray-700  h-12 text-lg rounded-md border border-solid border-sky-700 p-2 mb-2"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
            <label htmlFor="password" className="text-md flex flex-col ">
              Password
              <input
                className=" text-gray-700 text-lg h-12 rounded-md border border-solid border-sky-700 p-2 mb-2"
                name="password"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
            <label htmlFor="verifypassword" className="text-md flex flex-col">
              Verify password
              <input
                className=" text-gray-700 text-lg h-12  rounded-md border border-solid border-sky-700 p-2 mb-2"
                name="verifypassword"
                type="Password"
                placeholder="verify passoword"
                value={verifyPwd}
                onChange={(e) => setVerfyPwd(e.target.value)}
              />
            </label>
            <span>{pwd_error}</span>

            <button
              onClick={handleSignUp}
              className="text-white w-full p-2 text-2xl   bg-sky-800 rounded-lg"
            >
              Sign up
            </button>
            <p className="text-center  text-lg text-gray-800">
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
