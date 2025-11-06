import React from "react";

export default function Buttons({
  resetHandler,
  redoHandler,
  undoHandler,
  enable,
}) {
  return (
    <div>
      <button className="reset" disabled={enable.reset} onClick={resetHandler}>
        Reset
      </button>
      <button className="redo" disabled={enable.redo} onClick={redoHandler}>
        Redo
      </button>
      <button className="undo" disabled={enable.undo} onClick={undoHandler}>
        Undo
      </button>
    </div>
  );
}
