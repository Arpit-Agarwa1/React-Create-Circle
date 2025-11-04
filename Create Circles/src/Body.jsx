import React from "react";

export default function Body({ clickhandler }) {
  return (
    <div
      className="wrapper"
      onClick={(e) => {
        clickhandler(e);
      }}
    ></div>
  );
}
