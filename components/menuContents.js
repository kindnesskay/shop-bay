import { KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material";
import { useState } from "react";

function MenuContents({ title, array }) {
  const [state, setState] = useState(false);
  return (
    <div className="flex flex-col w-full">
      <h4
        onClick={() => setState(!state)}
        className="border-grey font-semibold w-full flex justify-between "
      >
        {title}
        <span>
          {state === true ? <KeyboardArrowDown /> : <KeyboardArrowUp />}
        </span>
      </h4>
      <ul
        className="w-full"
        style={{ listStyle: "none", display: state ? "none" : "block" }}
      >
        {array &&
          array.map((item, index) => {
            return (
              <li key={index} className="w-full pl-2 mb-2">
                {item}
              </li>
            );
          })}
      </ul>
    </div>
  );
}

export default MenuContents;
