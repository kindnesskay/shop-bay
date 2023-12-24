import Link from "next/link";
import BlurImage from "../blurImage";

function ProductCard({ item, handleAdd, linkRef }) {
  const { name, price, image } = item;
  return (
    <div className="flex flex-col items-centers aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md xl:aspect-h-8 xl:aspect-w-7">
      <Link
        href={linkRef || "#"}
        className="w-full justify-center flex items-center h-40 overflow-hidden rounded-md"
      >
        <div>
          <BlurImage image={image} alt={name} />
        </div>
      </Link>
      <div className="h-24 w-full flex flex-col items-center p-1">
        <p className="font-semibold ">{name}</p>
        <p className="font-semibold">${price}</p>
        <button
          className="p-1 border-solid border rounded-lg h-12 font-medium border-gray-400 text-black w-full max-w-xs"
          onClick={() => handleAdd(item)}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
