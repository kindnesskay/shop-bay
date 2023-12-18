import Image from "next/image";
function Hero() {
  return (
    <section className="w-full h-48 ">
      <div className="h-full w-full relative  flex items-center bg-slate-200">
        <h1 className="text-4xl font-bold p-2">
          We Are <span className=" text-sky-900">Style</span>
        </h1>
        <Image
          src="/assets/cartImage.png"
          height={500}
          width={600}
          className="h-auto w-auto max-h-full  max-w-full absolute top-0 right-0"
          alt="cart barner"
        />
      </div>
    </section>
  );
}

export default Hero;
