import Link from "next/link"
import { categoryLinks } from "@/constant"
import Image from "next/image"
import { ArrowLeft, ArrowRight } from "@mui/icons-material"

export default function CategoriesCol() {
  return (
    <div className="p-2 ">
      <p className="text-semibold text-gray-400 p-2">categories </p>
        <ul  className="flex flex-col gap-2">
            {
              categoryLinks && categoryLinks.length > 0 &&categoryLinks.map((item)=>{
                    return <Link className="border border-solid px-2 py-1  max-w-48 justify-between  border-gray-400 items-center gap-2 flex text-black font-light text-sm rounded-md hover:bg-sky-600 hover:text-white" href={item.route}>
                      <Image className="rounded-lg" src={item.image} alt={item.name} height={36} width={36}/>
                      {item.name}{
                        <ArrowRight/>
                      }</Link>
                })
            }
        </ul>

    </div>
  )
}
