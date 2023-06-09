/* eslint-disable react/prop-types */
import { Board } from "./Board";
import { TurnIndicator } from "./TurnIndicator";
import { useState } from "react";
import useStore from "../stores/useStore";

export function BoardHolder({ WhiteBoard, BlackBoard }) {
  const [markerPosition, setMarkerPosition] = useState({ x: 0, y: 0 });
  const {
    board,
    counter,
    turn,
    markers,
    setTurn,
    setMarkers,
    setBoard,
    setCounter,
    togglePause,
    setWinner,
  } = useStore();

  function handleMouseMove(event) {
    const { offsetX, offsetY } = event.nativeEvent;
    if (offsetX < 632 - 32) {
      setMarkerPosition({ x: offsetX, y: offsetY });
    }
  }

  function checkColumnWin(arr) {
    let i = 0;
    let count = 0;
    let prev = "";
    let len = arr.length;
    while (i < len) {
      if (arr[i] == prev && prev != undefined) {
        count += 1;
      } else {
        prev = arr[i];
      }

      i++;
    }
    console.log(`Count : ${count}`);
    if (count == 3) {
      console.log("WINNER FOUND");
      return true;
    } else {
      return false;
    }
  }

  function checkRowWin(board, row) {
    let arr = [];
    for (let i = 0; i < 7; i++) {
      try {
        arr.push(board[i][5 - row]);
      } catch {
        arr.push("");
      }
    }
    return arr;
  }

  function handleClick(event) {
    let coords = [20, 108, 196, 284, 372, 460, 548];

    const { offsetX } = event.nativeEvent;
    for (let i = 0; i < coords.length; i++) {
      if (offsetX < coords[i] + 64 && offsetX >= coords[i]) {
        const colIndex = i;
        const rowIndex = 5 - board[i].length;
        if (colIndex >= 0 && rowIndex >= 0) {
          let updatedBoard = [...board];
          let col = updatedBoard[i];
          if (col.length < 6) {
            if (turn == "red") {
              col.push("R");
            } else {
              col.push("Y");
            }
            let colWinner = checkColumnWin(col);
            let rowWinner = checkColumnWin(checkRowWin(updatedBoard, rowIndex));
            // console.log(rowIndex);
            // console.log(5 - rowIndex);
            // console.log(updatedBoard);
            if (colWinner == true || rowWinner == true) {
              setWinner(true);
            } else {
              if (turn === "red") {
                setTurn("yellow");
                setCounter(30);
              } else {
                setTurn("red");
                setCounter(30);
              }
            }
            // console.log(col);
            setBoard(updatedBoard);
          }

          let updatedMarkers = [...markers];
          updatedMarkers.push({
            x: coords[colIndex],
            y: coords[rowIndex],
            color: turn,
          });
          setMarkers(updatedMarkers);
        }

        // Update game board and check for winner

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
