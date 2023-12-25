import Link from "next/link";
import Image from "next/image";
export function HomeButton() {
  return (
    <Link href="/" className="h-full">
      <Image
        src="/assets/logo.svg"
        height={50}
        className="h-auto w-auto max-h-20"
        width={100}
        alt="logo"
      />
    </Link>
  );
}
export function LinkButton({ link, icon, title }) {
  return (
    <Link href={link} className="w-full text-center font-semibold ">
      <button className="w-full p-4 border-gray rounded-md hover:bg-sky-600 hover:text-white">
        {icon} {title}
      </button>
    </Link>
  );
}
