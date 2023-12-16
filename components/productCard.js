import Image from "next/image";
import Link from "next/link";
function ProductCard({ item, handleAdd, linkRef }) {
  const { name, price, image } = item;
  return (
    <div className="flex flex-col items-centers aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md xl:aspect-h-8 xl:aspect-w-7">
      <Link
        href={linkRef || "#"}
        className="w-full justify-center flex items-center h-40 overflow-hidden rounded-md"
      >
        <div>
          <Image
            className="h-auto w-auto max-h-40 max-w-full "
            src={image || "/no_image.jpg"}
            height={150}
            width={150}
            alt={name}
            loading="lazy"
          />
        </div>
      </Link>
      <div className="h-24 w-full flex flex-col items-center p-1">
        <p className="font-semibold ">{name}</p>
        <p className="font-semibold">${price}</p>
        <button
          className="p-1 border-solid border h-12 font-medium border-gray-400 text-black rounded-sm w-full max-w-xs"
          onClick={() => handleAdd(item)}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
