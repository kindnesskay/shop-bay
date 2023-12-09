import Image from "next/image";
import cartImage from "../assets/cartimage.png";
function Hero() {
  return (
    <section className="w-full h-48 flex overflow-x-auto snap-mandatory snap-x ">
      <div className="h-full w-full relative snap-center flex-shrink-0 flex items-center bg-slate-200">
        <h1 className="text-4xl font-bold p-2">
          We Are <span className=" text-sky-900">Style</span>
        </h1>
        <Image
          src={cartImage}
          height={500}
          width={600}
          className="h-auto w-auto max-h-full  max-w-full absolute top-0 right-0"
          alt="cart barner"
        />
      </div>

      <div className="h-full w-full snap-center  flex-shrink-0 relative flex items-center bg-slate-200">
        <h1 className="text-4xl font-bold p-2">
          We Are <span className=" text-sky-900">Style</span>
        </h1>
        <Image
          src={cartImage}
          height={500}
          width={600}
          className="h-auto w-auto max-h-full max-w-full absolute top-0 right-0"
          alt="cart barner"
        />
      </div>
      <div className="snap-center h-full w-full flex-shrink-0 relative flex items-center bg-slate-200">
        <h1 className="text-4xl font-bold p-2">
          We Are <span className=" text-sky-900">Style</span>
        </h1>
        <Image
          src={cartImage}
          height={500}
          width={600}
          className="h-auto w-auto max-h-full max-w-full absolute top-0 right-0"
          alt="cart barner"
        />
      </div>
    </section>
  );
}

export default Hero;
