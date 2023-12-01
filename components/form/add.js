import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";
import NewImageBox from "./imageBox";
import { CloudUpload } from "@mui/icons-material";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { Auth, db, storage } from "@/config/firebase";
import { uid } from "uid";
import { addDoc, collection } from "firebase/firestore";

function Add() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [response, setResponse] = useState("");
  const collectionRef = collection(db, "fruits");

  const uploadToDB = async (imageUrl) => {
    setResponse("loading..");
    await addDoc(collectionRef, {
      name: name,
      price: price,
      userID: Auth.currentUser.uid,
      image: imageUrl,
    });
    setResponse("success");
    console.log(response);
    try {
    } catch (error) {
      setResponse("failed");
      console.error(error);
    }
  };
  const handleUpload = async () => {
    if (!name || !price || !image) return;
    const storageRef = ref(storage, `images/${uid() + image.name}`);
    const uploadTask = uploadBytesResumable(storageRef, image);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      },
      (error) => {
        console.error(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then(async (downloadUrl) => {
          await uploadToDB(downloadUrl);
        });
      }
    );
  };
  return (
    <div
      style={{
        display: "grid",
        placeItems: "center",
        position: "relative",
        gap: 5,
      }}
    >
      <p style={{ color: response == "success" ? "green" : "red" }}>
        {response}
      </p>
      <NewImageBox getImage={setImage} />
      <TextField
        sx={{ width: "100%", maxWidth: 300 }}
        placeholder="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <span style={{ fontSize: 14, color: "red" }}></span>
      <TextField
        sx={{ width: "100%", maxWidth: 300 }}
        placeholder="price"
        type="number"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <span style={{ fontSize: 14, color: "red" }}></span>
      <Button
        onClick={handleUpload}
        sx={{ width: "100%", maxWidth: 300, height: 50 }}
        variant="contained"
        color="secondary"
      >
        <CloudUpload />
      </Button>
    </div>
  );
}

export default Add;
