import { UserContext } from '@/app/context/usercontext'
import { Auth } from '@/config/firebase'
import { signOut } from 'firebase/auth'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useContext } from 'react'
export const LoginButton=()=>{
return(
    <>
        <Link href={'/auth/login'} className='w-full text-center'>
             Login
        </Link>
    </>
)
}   
export const SignUpButton=()=>{
return(
    <>
        <Link href={'/auth/signup'} className='w-full text-center'>
            Create Account
        </Link>
    </>
)
}   
export const ProfileButton=()=>{
return(
    <>
        <Link href={'/profile'} className='w-full text-center'>
            profile
        </Link>
    </>
)
}   

export const SignOut=()=>{
    const {user}=useContext(UserContext)
    const router=useRouter()
    const handleClick=()=>{
        signOut(Auth)
        router.push('/')
    }
    return(
        <>
        { user &&
            <button onClick={handleClick} className='p-2 bg-purple-500 w-full text-center text-white font-semibold'>
            Signout
            </button>    
        }
        </>
    )
}

export const ShopButton=()=>{
    return (

        <Link href={'/shop'} className='w-full text-center'>
            Shop
            </Link>    
    )
}