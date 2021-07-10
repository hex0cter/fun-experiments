import React from "react";

export default function MouseTracker(props) {
  // console.log("MouseTracker rendered")
  return (
    <div className="MouseTracker" style={{left: props.x, top: props.y}}>
      &nbsp; {Math.floor(props.x/20)}, {Math.floor(props.y/20)}
    </div>
  );
}
