import Link from "next/link";
import Image from "next/image";
function Category({ image, location, name }) {
  return (
    <Link href={location} className="flex flex-col items-center w-36 h-36 b-2">
      <div className="hover:scale-125">
        <Image src={image} alt={name} height={100} width={100} />
      </div>
      <p className="text-center font-semibold mt-4">{name}</p>
    </Link>
  );
}

export default Category;
