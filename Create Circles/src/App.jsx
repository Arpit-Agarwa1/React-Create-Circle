import React, { useState } from "react";
import Buttons from "./Buttons";
import "./App.css";
import Body from "./Body";
import { use } from "react";

export default function App() {
  const [position, setPosition] = useState([]);

  const [tempCircle, setTempCircle] = useState([]);

  const [enable, setEnable] = useState({
    reset: true,
    redo: true,
    undo: true,
  });

  function undoHandler() {
    if (position.length >= 0) {
      setEnable({ reset: false, redo: false, undo: false });
    }

    let copyPosition = position;

    let deletedElement = copyPosition.pop();

    setTempCircle([...tempCircle, deletedElement]);
    // console.log(copyPosition);
  }
  function redoHandler() {
    let copyPosition = tempCircle;
    let regenerativeCircle = copyPosition.pop();

    setPosition([...position, regenerativeCircle]);
    if (copyPosition.length == 0) {
      setEnable({ reset: false, redo: true, undo: false });
    }
  }
  function resetHandler() {
    console.log("magic");

    setPosition([]);
  }

  function randomColor() {
    let acceptedOptions = "0123456789abcdef";
    let randomcode = "#";
    for (let i = 0; i < 6; i++) {
      randomcode += acceptedOptions[Math.floor(Math.random() * 16)];
    }
    return randomcode;
  }
  function clickhandler(e) {
    if (position.length >= 0) {
      setEnable({ reset: false, redo: true, undo: false });
    }
    setPosition([
      ...position,
      {
        id: Date.now(),
        clientX: e.clientX,
        clientY: e.clientY,
        backgroundColor: randomColor(),
      },
    ]);
  }

  return (
    <>
      <Buttons
        undoHandler={undoHandler}
        redoHandler={redoHandler}
        resetHandler={resetHandler}
        enable={enable}
      />
      <Body clickhandler={clickhandler} />

      {position.map((obj) => {
        return (
          <div
            className="circles"
            style={{
              top: obj.clientY - 8 + "px",
              left: obj.clientX - 8 + "px",
              backgroundColor: obj.backgroundColor,
            }}
          ></div>
        );
      })}
    </>
  );
}
