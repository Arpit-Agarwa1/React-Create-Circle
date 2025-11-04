import React from "react";

export default function Buttons({ resetHandler, redoHandler, undoHandler }) {
  return (
    <div>
      <button onClick={resetHandler}>Reset</button>
      <button onClick={redoHandler}>Redo</button>
      <button onClick={undoHandler}>Undo</button>
    </div>
  );
}
