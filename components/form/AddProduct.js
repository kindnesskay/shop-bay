"use client";
import { useState } from "react";
import IconButton from "@mui/material/IconButton";
import { Add, ArrowBack, KeyboardArrowRight } from "@mui/icons-material";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { Auth, db, storage } from "@/config/firebase";
import { uid } from "uid";
import { addDoc, collection } from "firebase/firestore";
function AddProduct() {
  const [title, setTitle] = useState("");
  const [titleError, setTitleError] = useState("");
  const [price, setPrice] = useState("");
  const [priceError, setPriceError] = useState("");
  const [description, setDescription] = useState("");
  const [descriptionError, setDescriptionError] = useState("");
  const [image, setImage] = useState(null);
  const [clearImage, setClearImage] = useState(false);
  const [response, setResponse] = useState("");
  const collectionRef = collection(db, "fruits");
  const uid_string = uid();
  const router = useRouter();
  function clearAllFields() {
    setTitle("");
    setPrice("");
    setDescription("");
    setImage(null);
    setClearImage(!clearImage);
  }

  const uploadToDB = async (imageUrl) => {
    setResponse("loading..");
    try {
      await addDoc(collectionRef, {
        name: title,
        price: price,
        userID: Auth?.currentUser?.uid,
        image: imageUrl,
        description: description,
        imageName: uid_string + image.name,
      });
      setResponse("success");
      clearAllFields();
    } catch (error) {
      setResponse("failed");
      console.error(error);
    }
  };
  const handleUpload = async () => {
    if (!title || !price || !image) return;
    const storageRef = ref(storage, `images/${uid_string + image.name}`);
    const uploadTask = uploadBytesResumable(storageRef, image);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setResponse(progress);
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
    <div className="w-full p-2 flex flex-col gap-3 ">
      <div className="w-full  flex border-grey justify-between px-4 ">
        <IconButton onClick={() => router.back()}>
          <ArrowBack />
        </IconButton>
        <p>{response}</p>
        <button onClick={clearAllFields}>clear</button>
      </div>
      <div>
        <div className="border border-solid h-16  p-2  relative border-gray-400 rounded-md ">
          <label
            htmlFor="title"
            className="text-sm  absolute -translate-y-4 bg-white px-2 "
          >
            Title
          </label>
          <input
            name="title"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            className="w-full  h-full p-2"
          />
        </div>
        <div className="flex justify-between px-4 py-1">
          {titleError ? (
            <p>{titleError}</p>
          ) : (
            <p className="text-[0.6em] font-semibold text-gray-600">
              please write a clear title for your item
            </p>
          )}
          <span className="text-xs text-gray-500">0/60</span>
        </div>
      </div>

      <div>
        <div className="border border-solid h-16  p-2  relative border-gray-400 rounded-md ">
          <label
            htmlFor="price"
            className="text-sm  absolute -translate-y-4 bg-white  px-2"
          >
            Price*
          </label>
          <input
            name="price"
            value={price}
            className="w-full  h-full p-2"
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <p>{priceError}</p>
      </div>

      <div>
        <div className="border border-solid h-16  p-2  relative border-gray-400 rounded-md ">
          <label
            htmlFor="description"
            className="text-sm  absolute -translate-y-4 bg-white  px-2"
          >
            Description*
          </label>
          <input
            value={description}
            name="description"
            onChange={(e) => setDescription(e.target.value)}
            className="w-full  h-full p-2"
          />
        </div>
        {descriptionError ? (
          <p>{descriptionError}</p>
        ) : (
          <div className="w-full flex p-2 mt-2 items-center">
            <p className="text-[0.6em]  font-semibold text-gray-600 ">
              please provide a detailed description.Mentioning as many details
              as possible will make your Ad more attractive to buyers
            </p>
            <span className="text-xs pl-6 text-gray-500">0/850</span>
          </div>
        )}
      </div>
      <ProductType />
      <div className="p-2">
        <p className="text-xs font-semibold mb-2 ">Add at least 1 photo</p>
        <div className="flex gap-3 snap-x snap-mandatory w-full overflow-x-auto">
          <ProductImage getImage={setImage} key={clearImage} />
        </div>
      </div>
      <div className="w-full flex flex-col items-center ">
        <button
          onClick={handleUpload}
          className="w-full text-lg  h-12 max-w-sm rounded-lg bg-sky-700 hover:bg-sky-900 text-white font-bold"
        >
          Post Ad
        </button>
        <p className="text-[0.6em]  mt-4 p-2  text-gray-600 font-normal ">
          By clicking on Post Ad you accept the Terms of use , confirm that you
          will abide by the safety Tips ,and declear that the posting does not
          include prohibited items
        </p>
      </div>
    </div>
  );
}

function ProductType() {
  return (
    <div className="w-full">
      <div className="border border-solid h-12  p-2 justify-between flex items-center  relative border-gray-400 rounded-md ">
        <p className="text-gray-500 text-sm font-semibold">Type*</p>
        <IconButton>
          <KeyboardArrowRight />
        </IconButton>
      </div>
    </div>
  );
}

function ProductImage({ getImage }) {
  const [imageUrl, setImageUrl] = useState("");
  return (
    <div className="border-2 border-solid border-sky-600 overflow-hidden rounded-lg relative flex items-center justify-center w-24 h-24">
      {imageUrl && (
        <Image
          height={100}
          width={100}
          src={imageUrl}
          alt="image from file"
          className="h-full w-full absolute"
        />
      )}
      <IconButton>
        <input
          className="opacity-0 absolute"
          type="file"
          name="image"
          accept="image/*"
          onChange={(e) => {
            getImage(e.target.files[0]);
            setImageUrl(URL.createObjectURL(e.target.files[0]));
          }}
        />
        <Add color="primary" />
      </IconButton>
    </div>
  );
}

export default AddProduct;
