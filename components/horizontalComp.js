function HorizontalComp({ title, array }) {
  return (
    <div className="min:h-44  w-full p-2 flex flex-col items-center ">
      <h4 className="font-bold w-full ml-8 ">{title}</h4>
      <div className="flex w-fit gap-3 min:h-36 p-2 snap-mandatory snap-x max-w-full overflow-x-auto overflow-y-hidden">
        {array &&
          array.map((item, index) => (
            <div
              key={index}
              className="w-40 min:h-28 snap-center rounded-md flex-shrink-0"
            >
              {item}
            </div>
          ))}
      </div>
    </div>
  );
}

export default HorizontalComp;
