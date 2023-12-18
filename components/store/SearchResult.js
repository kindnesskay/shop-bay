import { useState } from "react";
import SearchField from "./searchField";
import { Close } from "@mui/icons-material";

function SearchResult() {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  return (
    <div className="w-full ">
      <SearchField result={setData} error={setError} />
      {data.length > 0 && (
        <div className="flex flex-col gap-2 mt-2">
          <p>{error}</p>
          <div className="flex w-full justify-end p-2">
            <button
              className="border-grey h-full p-2"
              onClick={() => setData([])}
            >
              <Close />
            </button>
          </div>
          {data &&
            data.map((product, index) => {
              return (
                <div key={index} className="border-grey rounded-lg p-4 ">
                  <p>{product.name}</p>
                  <p>{product.description}</p>
                </div>
              );
            })}
        </div>
      )}
    </div>
  );
}

export default SearchResult;
