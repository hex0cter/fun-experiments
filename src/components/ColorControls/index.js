import React from "react";
import Slider from '@material-ui/core/Slider';

export default function Main(props) {
  return (
    <div className="ControlBar">
      <div>
        <Slider defaultValue={0} onChange={(event, value) => props.onSetRed(value)} min={0} max={255} aria-labelledby="continuous-slider" style={{color: "red"}} valueLabelDisplay="on"/>
      </div>
      <div>
        <Slider defaultValue={0} onChange={(event, value) => props.onSetGreen(value)} min={0} max={255} aria-labelledby="continuous-slider" style={{color: "green"}} valueLabelDisplay="on"/>
      </div>
      <div>
        <Slider defaultValue={0} onChange={(event, value) => props.onSetBlue(value)} min={0} max={255} aria-labelledby="continuous-slider" style={{color: "blue"}} valueLabelDisplay="on"/>
      </div>
    </div>
  );
}
