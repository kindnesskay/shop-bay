import { useState } from "react";
import { Button, TextField } from "@mui/material";
import Link from "next/link";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Auth } from "@/config/firebase";
function Login({ getUser }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const handleSignIn = async () => {
    if (!email) return setEmailError("Please Enter Email");
    setEmailError("");
    if (!password) return setPasswordError("Please Enter Password");
    setPasswordError("");
    signInWithEmailAndPassword(Auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        getUser(user);
      })
      .catch((error) => console.log(error.code, error.message));
  };
  return (
    <form
      className="container"
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 5,
        alignItems: "center",
      }}
    >
      <TextField
        sx={{ width: "100%", maxWidth: 300 }}
        placeholder="EMAIL"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <span style={{ fontSize: 14, color: "red" }}>{emailError}</span>
      <TextField
        sx={{ width: "100%", maxWidth: 300 }}
        placeholder="PASSWORD"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <span style={{ fontSize: 14, color: "red" }}>{passwordError}</span>
      <Button
        onClick={handleSignIn}
        sx={{ width: "100%", maxWidth: 300, height: 50 }}
        variant="contained"
        color="secondary"
      >
        LogIn
      </Button>
      <p style={{ fontSize: 12 }}>Dont have an account?</p>
      <Link
        href="/auth/signup"
        style={{ width: "100%", maxWidth: 300, height: 50 }}
      >
        <Button
          variant="outlined"
          color="secondary"
          sx={{ width: "100%", maxWidth: 300, height: 50 }}
        >
          create accout
        </Button>
      </Link>
    </form>
  );
}

export default Login;
