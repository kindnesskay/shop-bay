import { UserContext } from "@/app/context/usercontext"
import { DynamicFeed, Logout, PostAdd, } from "@mui/icons-material"
import { useContext, useState } from "react"
import CreatePost from "./CreatePost"
import { signOut } from "firebase/auth";
import { Auth } from "@/config/firebase"
import Inventory from "./inventory"
import Profilephoto from "../profilephoto"
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
        <div className="p-4 flex flex-col items-center justify-center  h-50">
            <Profilephoto/>
            <p className="font-semibold">{user.displayName}</p>            
            <p className="text-gray-400">{user.email}</p>            
        </div>
       
        <div className="flex flex-col gap-3 w-full max-w-xs items-center " >
            <div className="w-full h-12 max-w-xs flex gap-3 bg-sky-700 justify-between rounded-2xl">
            <button onClick={()=>setPost(true)} className={`transition-all rounded-2xl w-1/2 h-full text-white p-2  ${post===true?"bg-sky-900":'bg-transparent'}`}><DynamicFeed/></button>
            <button onClick={()=>setPost(false)} className={`rounded-2xl transition-all w-1/2 h-full text-white p-2 ${post===false?"bg-sky-900":'bg-transparent'}`}><PostAdd/> </button>
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