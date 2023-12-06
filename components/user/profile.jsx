import { UserContext } from "@/app/context/usercontext"
import { DynamicFeed, FavoriteBorder, Logout, PostAdd, Reviews } from "@mui/icons-material"
import Image from "next/image"
import { useContext, useState } from "react"
import CreatePost from "./CreatePost"
import { signOut } from "firebase/auth";
import { Auth } from "@/config/firebase"
import Inventory from "./inventory"
function Profile() {
    const {user}=useContext(UserContext)
    const [post,setPost]=useState(false)
    function handleLogout() {
    signOut(Auth);
  }
  return (
    <div className="w-full flex flex-col items-center">
    <div className="w-full p-2">
        
        <button className="p-2 text-white bg-violet-300 rounded-2xl" onClick={handleLogout}><Logout/></button>
    </div>
        <div className="p-4 flex flex-col items-center justify-center h-50">
            <Image  className="rounded-full" src={'/no_image.jpg'} alt="profile image" height={68} width={68}/>
            <p className="font-semibold">{user.displayName}</p>            
            <p className="text-gray-400">{user.email}</p>            
        </div>
        <div className="flex h-45 p-5 justify-center ">
            <div className="w-full max-w-xs flex gap-3 p-2 justify-between ">
            <p className="w-1/2 flex justify-center"><FavoriteBorder/></p>
            <p className="w-1/2  flex justify-center"><Reviews/></p>
            </div>
        </div>
        <div className="flex flex-col gap-3 w-full max-w-xs items-center " >
            <div className="w-full max-w-xs flex gap-3 bg-violet-300 justify-between rounded-2xl">
            <button onClick={()=>setPost(true)} className={`transition-all rounded-2xl w-1/2 h-full p-2  ${post===true?"bg-violet-500":'bg-transparent'}`}><DynamicFeed/></button>
            <button onClick={()=>setPost(false)} className={`rounded-2xl transition-all w-1/2 h-full p-2 ${post===false?"bg-violet-500":'bg-transparent'}`}><PostAdd/> </button>
            </div>
             {post ===true?
                <Inventory/>:
                <CreatePost/>
                }
        </div>
            
    </div>
  )
}

export default Profile