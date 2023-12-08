import { useState } from "react"
import NewImageBox from "../form/imageBox"
import { CloudUpload } from "@mui/icons-material"
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { Auth, db, storage } from "@/config/firebase";
import { uid } from "uid";
import { addDoc, collection } from "firebase/firestore";

function CreatePost() {
    const [title,setTitle]=useState('')
    const [price,setPrice]=useState('')
    const [image,setImage]=useState(null)
    const [response, setResponse] = useState("");
    const collectionRef = collection(db, "fruits");
    const uid_string=uid()
function clearAll(){
  setPrice('')
  setTitle('') 
  setImage('')

}

  const uploadToDB = async (imageUrl) => {
    setResponse("loading..");
    await addDoc(collectionRef, {
      name: title,
      price: price,
      userID: Auth.currentUser.uid,
      image: imageUrl,
      imageName:uid_string+image.name
    });
    setResponse("success");
    clearAll()
    
    try {
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
    
    <div className="flex flex-col items-center p-2 w-full gap-3">
      <span>{response}</span>
      <NewImageBox getImage={setImage} />
      <input
        className="text-center h-12 text-lg border-grey w-full rounded-2xl p-3"
        placeholder="name"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      
      <input
        className="h-12 text-lg text-center border-grey rounded-2xl  w-full p-3"
        placeholder="price"
        type="number"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      
      <button onClick={handleUpload} className="bg-sky-700 p-2 hover:bg-violet-500  h-12 w-full p-2 rounded-2xl text-white">
        <CloudUpload />
      </button>
    </div>
    
  )
}

export default CreatePost