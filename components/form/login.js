import { useState } from "react";
import { Button, TextField } from "@mui/material";
import Link from "next/link";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Auth } from "@/config/firebase";
import TYpography from "@mui/material/Typography";
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
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 5,

        backgroundColor: "rebeccapurple",
        height: "100%",
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <TYpography
        variant="h4"
        style={{ color: "#fff", fontWeight: "bold", marginBottom: 10 }}
      >
        Welcome Back
      </TYpography>
      <TextField
        style={{
          width: "100%",
          maxWidth: 300,
          fontSize: 24,
          backgroundColor: "#fff",
          border: "none",
        }}
        placeholder="EMAIL"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <span style={{ fontSize: 14, color: "red" }}>{emailError}</span>
      <TextField
        sx={{
          width: "100%",
          maxWidth: 300,
          fontSize: 24,
          backgroundColor: "#fff",
          border: "none",
        }}
        placeholder="PASSWORD"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <span style={{ fontSize: 14, color: "red" }}>{passwordError}</span>
      <Button
        onClick={handleSignIn}
        sx={{ width: "100%", maxWidth: 300, height: 50, fontWeight: "bold" }}
        variant="contained"
        color="secondary"
      >
        LogIn
      </Button>

      <p style={{ fontSize: 18, color: "#fff", fontWeight: "bold" }}>
        Dont have an account?
      </p>
      <Link
        href="/auth/signup"
        style={{ width: "100%", maxWidth: 300, height: 50 }}
      >
        <Button
          variant="contained"
          color="secondary"
          sx={{ width: "100%", maxWidth: 300, height: 50, fontWeight: "bold" }}
        >
          create accout
        </Button>
      </Link>
    </form>
  );
}

export default Login;
