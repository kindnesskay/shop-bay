import Link from "next/link";
import Image from "next/image";
function Category({ image, location, name }) {
  return (
    <Link
      href={location}
      className="flex  flex-col items-center bg-slate-100 hover:text-sky-800 rounded-xl w-32  h-32 border-2 border-solid border-white  hover:border-sky-800 "
    >
      <div>
        <Image src={image} alt={name} height={100} width={100} />
      </div>
      <p className="text-center font-semibold">{name}</p>
    </Link>
  );
}

export default Category;
