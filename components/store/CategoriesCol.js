import Link from "next/link";
import { categoryLinks } from "@/constant";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "@mui/icons-material";

export default function CategoriesCol() {
  return (
    <div>
      <p className="text-semibold text-gray-400 p-2">categories </p>
      <ul className="flex flex-col gap-1">
        {categoryLinks &&
          categoryLinks.length > 0 &&
          categoryLinks.map((item, index) => {
            return (
              <Link
                key={index}
                className="border border-solid  border-gray-400 overflow-hidden p-1 max-w-52 justify-between items-center flex flex-wrap text-black font-light text-xs rounded-md hover:bg-sky-600 hover:text-white "
                href={item.route}
              >
                <Image
                  className="rounded-lg"
                  src={item.image}
                  alt={item.name}
                  height={36}
                  width={36}
                />
                {item.name}
                {<ArrowRight />}
              </Link>
            );
          })}
      </ul>
    </div>
  );
}
