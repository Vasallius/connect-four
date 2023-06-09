/* eslint-disable react/prop-types */
import { Board } from "./Board";
import { TurnIndicator } from "./TurnIndicator";
import { useState } from "react";
import useStore from "../stores/useStore";

export function BoardHolder({ WhiteBoard, BlackBoard }) {
  const [markerPosition, setMarkerPosition] = useState({ x: 0, y: 0 });
  const { board, turn, markers, setTurn, setMarkers, setBoard, setCounter } =
    useStore();

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
            setCounter(30);
          } else {
            setTurn("red");
            setCounter(30);
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
        break;
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
          handleMouseMove={handleMouseMove}
          handleClick={handleClick}
        />
      </div>
      <TurnIndicator />
    </>
  );
}
