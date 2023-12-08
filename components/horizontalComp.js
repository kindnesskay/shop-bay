function HorizontalComp({ title, array }) {
  return (
    <div className="min:h-44  w-full flex flex-col ">
      <h4 className="font-bold ">{title}</h4>
      <div className="flex gap-3  min:h-36 p-2 snap-x items-center overflow-x-auto overflow-y-hidden">
        {array &&
          array.map((item) => (
            <div className="min:w-28 min:h-28 snap-center rounded-md flex-shrink-0">
              {item}
            </div>
          ))}
      </div>
    </div>
  );
}

export default HorizontalComp;
