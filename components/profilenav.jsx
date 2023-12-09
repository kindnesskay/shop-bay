import Link from 'next/link'
import IconButton from '@mui/material/IconButton'
import { AccountCircle } from "@mui/icons-material"
function Profilenav() {
    
  return ( 
       <Link href={"/profile"} className="no-underline hover:none">
          <IconButton className="flex text-sky-800">
              <AccountCircle /> 
              <p className='text-lg font-semibold hidden lg:block'>Profile</p>
          </IconButton>
        </Link>
    )
}

export default Profilenav