import SearchField from "./store/searchField";
function Hero() {
  return (
    <section className=" flex flex-col w-full h-fit gap-4 p-4 bg-sky-700 justify-center items-center bg-gray-600 pb-8">
      <div className="flex flex-col justify-center mt-16">
        <h1 className="text-4xl text-center font-bold text-white mb-4">
          All Your Favorite Brands In One Place
        </h1>
      </div>
      <SearchField />
    </section>
  );
}

export default Hero;
