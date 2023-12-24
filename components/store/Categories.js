import Category from "./category";
const data = [
  {
    id: 1,
    name: "All",
    price: 500,
    image: "/no_image.jpg",
    link: "/shop",
  },
  {
    id: 2,
    name: "Fashion",
    price: 1500,
    image: "/no_image.jpg",
    link: "/shop/fashion",
  },
  {
    id: 3,
    name: "Electronics",
    price: 2500,
    image: "/no_image.jpg",
    link: "/shop/electronics",
  },
  {
    id: 4,
    name: "Food",
    price: 3500,
    image: "/no_image.jpg",
    link: "/shop/food",
  },
  {
    id: 5,
    name: "Kids",
    price: 5300,
    image: "/no_image.jpg",
    link: "/shop/kids",
  },
];
export default function Categories() {
  return (
    <div className="grid gap-4 grid-cols-1 xxs:grid-cols-2 px-8  w-full xs:grid-cols-3 sm:grid-cols-4 md:gap-2 lg:gap-1.5">
      {data &&
        data.map((item, index) => {
          return (
            <div
              key={index}
              className="flex items-center justify-center aspect-square "
            >
              <Category
                location={item.link || "#"}
                image={item.image}
                name={item.name}
              />
            </div>
          );
        })}
    </div>
  );
}
