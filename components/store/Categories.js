import Category from "../category";

export default function Categories({ data }) {
  return (
    <div className="grid gap-4 grid-cols-1 xxs:grid-cols-2  w-full xs:grid-cols-3 sm:grid-cols-4 md:gap-2 lg:gap-1.5">
      {data &&
        data.map((item, index) => {
          return (
            <div
              key={index}
              className="flex items-center justify-center aspect-square "
            >
              <Category location={"#"} image={item.image} name={item.name} />
            </div>
          );
        })}
    </div>
  );
}
