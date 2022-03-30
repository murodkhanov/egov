import React, { useState } from "react";
import { useAsyncDebounce } from "react-table";
import "./table.css";

export const GlobalFilter = ({ filter, setFilter }) => {
  const [value, setValue] = useState(filter);
  const onChange = useAsyncDebounce((value) => {
    setFilter(value || undefined);
  }, 1000);
  return (
    // // <span>
    //   ҚИДИРИШ:{" "}
    //   <input
    //     value={value || ""}
    //     onChange={(e) => {
    //       setValue(e.target.value);
    //       onChange(e.target.value);
    //     }}
    //   />
    // // </span>
    <div className="header-top">
      <h1>ЎЗБЕКИСТОН РЕСПУБЛИКАСИДАГИ БАРЧА АВТОТУРАРГОҲЛАР ҲАҚИДА МАЪЛУМОТ</h1>
    </div>
  );
};
