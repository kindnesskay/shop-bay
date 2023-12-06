import Image from "next/image";
import { Add } from "@mui/icons-material";
import Link from "next/link";
function ProductCard({ item, handleAdd, linkRef }) {
  const { name, price, image } = item;
  return (
    <>
      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
        <Link
          href={linkRef}
          className="w-full justify-center flex items-center h-40 p-1 overflow-hidden"
        >
          <Image
            className="h-auto w-auto max-h-40 max-w-full"
            src={image || "/no_image.jpg"}
            height={150}
            width={150}
            alt={name}
            loading="lazy"
          />
        </Link>
        <div className="h-24 w-full flex flex-col items-center p-1">
          <p className="font-bold ">{name}</p>
          <p>${price}</p>
          <button
            className="p-1  bg-purple-500 text-white rounded-xl w-full"
            onClick={() => handleAdd(item)}
          >
            <Add />
          </button>
        </div>
      </div>
    </>
  );
}

export default ProductCard;
