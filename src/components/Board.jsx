import { Counter } from "./Counter";
import CounterYellowLarge from "../assets/images/counter-yellow-large.svg";
import CounterRedLarge from "../assets/images/counter-red-large.svg";
import { Marker } from "./Marker";
import MarkerYellow from "../assets/images/marker-yellow.svg";
import MarkerRed from "../assets/images/marker-red.svg";
import { useState } from "react";

/* eslint-disable react/prop-types */
export function Board({ WhiteBoard, BlackBoard }) {
  const [markerPosition, setMarkerPosition] = useState({ x: 0, y: 0 });
  const [board, setBoard] = useState([[], [], [], [], [], [], []]);
  const [markers, setmarkers] = useState([]);
  const [turn, setTurn] = useState("red");

  function handleMouseMove(event) {
    const { offsetX, offsetY } = event.nativeEvent;
    if (offsetX < 632 - 32) {
      setMarkerPosition({ x: offsetX, y: offsetY });
    }
  }

  function handleClick(event) {
    let coords = [20, 108, 196, 284, 372, 460, 548];

    const { offsetX } = event.nativeEvent;
    for (let i = 0; i < coords.length; i++) {
      if (offsetX < coords[i] + 64) {
        const colIndex = i;
        const rowIndex = 5 - board[i].length;
        if (colIndex >= 0 && rowIndex >= 0) {
          if (turn === "red") {
            setTurn("yellow");
          } else {
            setTurn("red");
          }
          let updatedMarkers = [...markers];
          updatedMarkers.push({
            x: coords[colIndex],
            y: coords[rowIndex],
            color: turn,
          });
          setmarkers(updatedMarkers);
        }
        let updatedBoard = [...board];
        let col = updatedBoard[i];
        if (col.length < 6) {
          col.push("marker");
          setBoard(updatedBoard);
        }
        break; // Exit the loop after finding the first matching index
      }
    }
  }

  return (
    <div
      className="relative  "
      onClick={handleClick}
      onMouseMove={handleMouseMove}
    >
      <Marker
        marker={turn === "yellow" ? MarkerYellow : MarkerRed}
        x={markerPosition.x}
        y={-40}
      />
      <img className="z-30 top-0 absolute" src={WhiteBoard} alt="" />
      <img className="z-10 mt-10" src={BlackBoard} alt="" />

      {markers.map((marker) => {
        return (
          <Counter
            key={`${marker.x}+${marker.y}`}
            counter={
              marker.color === "red" ? CounterRedLarge : CounterYellowLarge
            }
            x={marker.x}
            y={marker.y}
          />
        );
      })}
    </div>
  );
}
