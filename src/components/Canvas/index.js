import React from "react";

export default function Canvas(props) {
  return (
    <div className="Canvas">
      <div className="Demo" style={{backgroundColor: `rgb(${props.red}, ${props.green}, ${props.blue})`, top: props.y, left: props.x}}>
      </div>
    </div>
  );
}
