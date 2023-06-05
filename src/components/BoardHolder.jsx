/* eslint-disable react/prop-types */
import { Board } from "./Board";
import { TurnIndicator } from "./TurnIndicator";
import { useState } from "react";

export function BoardHolder({ WhiteBoard, BlackBoard }) {
  const [markerPosition, setMarkerPosition] = useState({ x: 0, y: 0 });
  const [board, setBoard] = useState([[], [], [], [], [], [], []]);
  const [markers, setMarkers] = useState([]);
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
          setMarkers(updatedMarkers);
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
    <>
      <div>
        <Board
          className="z-40"
          WhiteBoard={WhiteBoard}
          BlackBoard={BlackBoard}
          markerPosition={markerPosition}
          markers={markers}
          turn={turn}
          handleMouseMove={handleMouseMove}
          handleClick={handleClick}
        />
      </div>
      <TurnIndicator turn={turn} />
    </>
  );
}
