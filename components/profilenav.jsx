import Link from 'next/link'
import IconButton from '@mui/material/IconButton'
import { AccountCircle } from "@mui/icons-material"
function Profilenav() {
    
  return ( 
       <Link href={"/profile"} className="no-underline hover:none">
          <IconButton className="text-sky-800">
              <AccountCircle />
          </IconButton>
        </Link>
    )
}

export default Profilenav