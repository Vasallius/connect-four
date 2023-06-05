import CounterYellowLarge from "../assets/images/counter-yellow-large.svg";
import CounterRedLarge from "../assets/images/counter-red-large.svg";
import { Marker } from "./Marker";
import MarkerYellow from "../assets/images/marker-yellow.svg";
import { useState } from "react";

/* eslint-disable react/prop-types */
export function Board({ WhiteBoard, BlackBoard }) {
  const [markerPosition, setMarkerPosition] = useState({ x: 0, y: 0 }); // Initial position outside the board

  function handleMouseMove(event) {
    const { offsetX, offsetY } = event.nativeEvent;
    if (offsetX < 632 - 32) {
      setMarkerPosition({ x: offsetX, y: offsetY });
    }
  }

  return (
    <div className="relative  " onMouseMove={handleMouseMove}>
      <Marker MarkerRed={MarkerYellow} x={markerPosition.x} y={-40} />
      <img className="z-30 top-0 absolute" src={WhiteBoard} alt="" />
      <img className="z-10 mt-10" src={BlackBoard} alt="" />
      <img
        className="z-negative absolute top-[108px] left-[460px]"
        src={CounterRedLarge}
      />

      <img
        className="z-negative absolute top-[104px] left-[193px]"
        src={CounterYellowLarge}
        alt=""
      />
    </div>
  );
}
