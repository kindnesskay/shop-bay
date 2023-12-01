import { useState } from "react";
import { Button, TextField } from "@mui/material";
import Link from "next/link";
import { Auth } from "@/config/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
function SignUp({ getUser }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [verifyPwd, setVerfyPwd] = useState("");
  const [pwd_error, setPwdError] = useState("");

  const handleSignUp = async () => {
    if (!email) return;
    if (!password) return setPwdError("Create a password");
    if (password !== verifyPwd) {
      setPwdError("Password do no match ");
      return;
    }
    setPwdError("");

    createUserWithEmailAndPassword(Auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        getUser(user);
      })
      .catch((error) => {
        console.log(error.code);
      });
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
      <TextField
        sx={{ width: "100%", maxWidth: 300 }}
        placeholder="PASSWORD"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <TextField
        sx={{ width: "100%", maxWidth: 300 }}
        placeholder="verify password"
        type="password"
        value={verifyPwd}
        onChange={(e) => setVerfyPwd(e.target.value)}
      />
      <span style={{ fontSize: 14, color: "red" }}>{pwd_error}</span>

      <Button
        variant="contained"
        color="secondary"
        onClick={handleSignUp}
        sx={{ width: "100%", maxWidth: 300, height: 50 }}
      >
        Sign up
      </Button>
      <p style={{ fontSize: 12 }}>Already have an Account?</p>

      <Link
        href="/auth/login"
        style={{ width: "100%", maxWidth: 300, height: 50 }}
      >
        <Button
          sx={{ width: "100%", maxWidth: 300, height: 50 }}
          variant="outlined"
          color="secondary"
        >
          Login
        </Button>
      </Link>
    </form>
  );
}

export default SignUp;
