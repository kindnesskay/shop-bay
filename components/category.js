import Link from "next/link";
import Image from "next/image";
function Category({ image, location, name }) {
  return (
    <Link
      href={location}
      className="flex flex-col items-center pt-2 w-36 h-36 "
    >
      <div>
        <Image src={image} alt={name} height={100} width={100} />
      </div>
      <p className="text-center font-semibold">{name}</p>
    </Link>
  );
}

export default Category;
