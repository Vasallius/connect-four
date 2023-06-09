/* eslint-disable react/prop-types */
import { Board } from "./Board";
import { TurnIndicator } from "./TurnIndicator";
import { useState } from "react";
import useStore from "../stores/useStore";

export function BoardHolder({ WhiteBoard, BlackBoard }) {
  const [markerPosition, setMarkerPosition] = useState({ x: 0, y: 0 });
  const {
    board,
    turn,
    markers,
    setTurn,
    setMarkers,
    setBoard,
    setCounter,
    setWinner,
    hasWinner,
    setScore,
    p1score,
    p2score,
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
    while (i < len && count != 4) {
      if (arr[i] == prev && prev != "empty") {
        if (count == 0) {
          count += 2;
        } else {
          count += 1;
        }
      } else {
        prev = arr[i];
        count = 0;
      }

      i++;
    }
    console.log(count);
    if (count == 4) {
      console.log(arr);
      console.log(count);
      console.log("WINNER FOUND");
      return true;
    } else {
      return false;
    }
  }

  function checkRowWin(board, row) {
    let arr = [];
    for (let i = 0; i < 7; i++) {
      if (typeof board[i][5 - row] !== "undefined") {
        arr.push(board[i][5 - row]);
      } else {
        arr.push("empty");
      }
    }
    console.log(arr);
    return arr;
  }

  function getDiag(board, col, row, dir) {
    let left = [];
    let right = [];
    let x = col;
    let y = row;
    // So that we don't count the piece twice
    x -= 1;
    if (dir == "pos") {
      y += 1;
    } else {
      y -= 1;
    }
    while (x != 7 && y != -1 && (y != 6) & (x != -1)) {
      if (typeof board[x][5 - y] !== "undefined") {
        left.push(board[x][5 - y]);
      } else {
        left.push("empty");
      }
      x--;
      if (dir == "pos") {
        y++;
      } else {
        y--;
      }
    }
    left.reverse();

    x = col;
    y = row;
    while (x != 7 && y != -1 && (y != 6) & (x != -1)) {
      if (typeof board[x][5 - y] !== "undefined") {
        right.push(board[x][5 - y]);
      } else {
        right.push("empty");
      }
      x++;
      if (dir == "pos") {
        y--;
      } else {
        y++;
      }
    }
    return left.concat(right);
  }

  function handleClick(event) {
    if (hasWinner) {
      return;
    }
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
            let posdiag = getDiag(board, colIndex, rowIndex, "pos");
            let negdiag = getDiag(board, colIndex, rowIndex, "neg");
            let posdiagWinner = checkColumnWin(posdiag);
            let negdiagWinner = checkColumnWin(negdiag);
            console.log(colWinner, rowWinner, posdiagWinner, negdiagWinner);

            if (
              colWinner == true ||
              rowWinner == true ||
              posdiagWinner == true ||
              negdiagWinner == true
            ) {
              setWinner(true);
              if (turn == "red") {
                setScore(1, p1score + 1);
              } else {
                setScore(2, p2score + 1);
              }
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
