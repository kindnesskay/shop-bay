import { KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material";
import { useState } from "react";

function MenuContents({ title, array }) {
  const [state, setState] = useState(false);
  return (
    <div className="flex flex-col items-center w-full">
      <h4
        onClick={() => setState(!state)}
        className="border-grey font-bold w-full flex justify-between"
      >
        {title}
        <span>
          {state === true ? <KeyboardArrowDown /> : <KeyboardArrowUp />}
        </span>
      </h4>
      <ul
        className="w-full "
        style={{ listStyle: "none", display: state ? "none" : "block" }}
      >
        {array &&
          array.map((item, index) => {
            return (
              <li
                key={index}
                className="p-2 font-semibold hover:text-white hover:bg-violet-300 flex flex-col items-center"
              >
                {item}
              </li>
            );
          })}
      </ul>
    </div>
  );
}

export default MenuContents;
