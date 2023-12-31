import Link from "next/link";
import BlurImage from "../blurImage";
import Image from "next/image";

function ProductCard({ item, handleAdd, linkRef }) {
  const { name, price, image } = item;
  return (
    <div className="flex flex-col  p-1 bg-slate-200 items-centers aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md xl:aspect-h-8 xl:aspect-w-7">
      <Link
        href={linkRef || "#"}
        className="w-full justify-center flex items-center h-40 overflow-hidden rounded-md"
      >
        <div>
          <Image height={200} width={200} alt={name} src={image} className="w-auto h-auto"/>
        </div>
      </Link>
      <div className="h-24 w-full flex flex-col items-center p-1">
        <p className="font-semibold ">{name}</p>
        <p className="font-semibold">${price}</p>
        <button
          className="p-1 border-solid border rounded-lg h-12 bg-sky-800 hover:bg-sky-900 text-white font-medium border-gray-40 w-full max-w-xs"
          onClick={() => handleAdd(item)}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
