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
  const [visible,setVisible]=useState(true)
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
      {
    
    
        visible &&
        <section className="flex justify-center items-center w-full p-2">
          <form className="flex flex-col w-full max-w-sm gap-1">
            <h4 className="text-center text-4xl font-semibold">Welcome Back</h4>
            <label htmlFor="email" className="text-lg hidden">
              Email
            </label>
            <input
              name="email"
              placeholder="Email"
              className="h-12 text-2xl text-gray-700 text-md rounded-sm border-2 border-solid border-sky-700 p-2 mb-2"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <span>{emailError}</span>
            <label htmlFor="password" className="text-lg hidden">
              
              Password
            </label>
            <input
              className="text-gray-700 h-12  text-2xl text-md rounded-sm border-2 border-solid border-sky-700 p-2 mb-2"
              type="password"
              name="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <span>{passwordError}</span>
            <button
              onClick={handleSignIn}
              className="bg-sky-950 text-white h-12 p-2 w-full rounded-sm font-semibold text-lg"
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
      }
    </>
  );
}

export default Login;
