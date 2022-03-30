import React from "react";
// import { useAsyncDebounce } from "react-table";
import "./table.css";

// export const GlobalFilter = ({ setFilter }) => {
//   const onChang = useAsyncDebounce((value) => {
//     setFilter(value || undefined);
//   }, 1000);

export const GlobalFilter = () => {
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
