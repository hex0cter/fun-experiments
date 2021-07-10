import React, { useState } from "react";
import ColorControls from '../ColorControls';
import Canvas from '../Canvas';
import MouseTracker from '../MouseTracker';

export default function Main() {
  const [red, setRed] = useState(90);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);
  const [xPos, setXPos] = useState(100);
  const [yPos, setYPos] = useState(100);
  const [cursorXPos, setCursorXPos] = useState(0);
  const [cursorYPos, setCursorYPos] = useState(0);

  window.addEventListener("mousemove", (event) => {
    setCursorXPos(event.clientX);
    setCursorYPos(event.clientY);
  })

  window.addEventListener("click", (event) => {
    if(event.clientY > window.innerHeight - 100) {
      return;
    }
    // console.log(event);
    setXPos(event.clientX);
    setYPos(event.clientY);
  })

  // console.log(`red=${red}`);
  // console.log(`xPos=${xPos}`);
  // console.log(`yPos=${yPos}`);

  return (
    <div className="App">
      <MouseTracker x={cursorXPos} y={cursorYPos}/>
      <Canvas red={red} green={green} blue={blue} x={xPos} y={yPos} />
      <ColorControls onSetRed={setRed} onSetGreen={setGreen} onSetBlue={setBlue} />
    </div>
  );
}
