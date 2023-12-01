import { useState } from "react";

function MenuContents({ title, array }) {
  const [state, setState] = useState(false);
  return (
    <div onClick={() => setState(!state)}>
      <h4 className="border-grey">{title}</h4>
      <ul style={{ listStyle: "none", display: state ? "none" : "block" }}>
        {array &&
          array.map((item, index) => {
            return (
              <li key={index} style={{ padding: 5 }}>
                {item}
              </li>
            );
          })}
      </ul>
    </div>
  );
}

export default MenuContents;
