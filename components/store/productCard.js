import Link from "next/link";
import BlurImage from "../blurImage";
import Image from "next/image";

function ProductCard({ item, handleAdd, linkRef }) {
  const { name, price, image } = item;
  return (
    <div className="flex flex-col gap-2 bg-white items-center justify-between h-[350px] w-full max-w-[250px]  overflow-hidden rounded-md border-2 border-solid border-sky-600">
      <Link
        href={linkRef || "#"}
        className="w-full  justify-center flex mt-auto mb-auto overflow-hidden rounded-md"
      >
        
          <Image height={300} width={300} alt={name} src={image} loading="lazy" className="w-auto h-auto"/>
      
      </Link>
      <div className="w-full flex flex-col px-2 gap-2 py-4 ">
        <p className="font-normal">{name}</p>
        <p className="font-semibold">${price}</p>
        <button
          className="border-solid border rounded-lg p-2 bg-sky-700 hover:bg-sky-800 text-white font-medium border-gray-40 w-full max-w-xs"
          onClick={() => handleAdd(item)}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
