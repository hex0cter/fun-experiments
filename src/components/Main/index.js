import React, { useState } from "react";
import Slider from '@material-ui/core/Slider';
import ColorControls from '../ColorControls';

export default function Main() {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);
  const [xPos, setXPos] = useState(0);
  const [yPos, setYPos] = useState(0);

  console.log(`red=${red}`);
  console.log(`green=${green}`);
  console.log(`blue=${blue}`);

  // window.addEventListener(document, "keypress", function (e) {
  //   e = e || window.event;
  //   // use e.keyCode
  // });

  return (
    <div className="App">
      <div className="Demo" style={{backgroundColor: `rgb(${red}, ${green}, ${blue})`}}>
      </div>
      <ColorControls onSetRed={setRed} onSetGreen={setGreen} onSetBlue={setBlue} />
    </div>
  );
}
