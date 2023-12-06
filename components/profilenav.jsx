import { UserContext } from "@/app/context/usercontext"
import { useContext } from "react"
import Link from 'next/link'
import IconButton from '@mui/material/IconButton'
import { AccountCircle } from "@mui/icons-material"
function Profilenav() {
    const {user}=useContext(UserContext)
  return (
<>
      {user &&
                <div>
                  <Link href={"/profile"} className="no-underline hover:none">
                    <IconButton className="text-white">
                      <AccountCircle />
                    </IconButton>
                  </Link>
                </div>
              }
</>
  )
}

export default Profilenav