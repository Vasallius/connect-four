/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import TurnBackgroundRed from "../assets/images/turn-background-red.svg";
import TurnBackgroundYellow from "../assets/images/turn-background-yellow.svg";
import useStore from "../stores/useStore";
import { useEffect } from "react";

export function TurnIndicator() {
  const {
    turn,
    counter,
    hasWinner,
    setMarkers,
    setBoard,
    isPaused,
    togglePause,
    setCounter,
    setWinner,
    setTurn,
  } = useStore();

  useEffect(() => {
    if (counter > 0 && !isPaused && !hasWinner) {
      const interval = setInterval(() => {
        setCounter(counter - 1);
      }, 1000);
      return () => clearInterval(interval); // Cleanup the interval when the component unmounts
    } else if (hasWinner) {
      setCounter("WINS");
    } else {
      if (turn == "red") {
        setTurn("yellow");
      } else {
        setTurn("red");
      }
      setCounter(30);
    }
  }, [counter, isPaused, hasWinner]);

  const playAgain = () => {
    setMarkers([]);
    setBoard([[], [], [], [], [], [], []]);
    if (turn == "red") {
      setTurn("yellow");
    } else {
      setTurn("red");
    }
    setCounter(30);
    setWinner(false);
    togglePause(false);
  };

  if (!hasWinner) {
    return (
      <div className="z-50 flex flex-col items-center justify-center relative  -top-[16px]">
        <div
          className={`z-50 ${
            turn === "red" ? "text-white" : "text-black"
          } font-spacegrotesk text-xs font-bold`}
        >
          {turn == "red" ? "PLAYER 1" : "PLAYER 2"}&apos;S TURN
        </div>
        <div
          className={`z-50 ${
            turn === "red" ? "text-white" : "text-black"
          } font-spacegrotesk text-lg font-bold`}
        >
          {counter}
          {counter == "WINS" ? "" : "s"}
        </div>
        <img
          className="w-[191px] h-[150px] absolute -top-[37px]"
          src={turn === "red" ? TurnBackgroundRed : TurnBackgroundYellow}
          alt=""
        />
      </div>
    );
  } else {
    return (
      <div className="z-50 rounded-[20px] mx-auto bg-white w-[285px]  relative  -top-[53px] h-[160px] border-[3px] border-black shadow-thick-black">
        <div className=" flex flex-col items-center justify-center relative">
          <div className="text-xs font-spacegrotesk font-bold text-black mt-[17px]">
            {turn == "red" ? "PLAYER 1" : "PLAYER 2"}
          </div>
          <div className="text-lg font-spacegrotesk font-bold -mt-[4px]">
            WINS
          </div>
          <button
            onClick={playAgain}
            className=" font-bold flex items-center justify-center rounded-[20px] bg-iris text-xs font-spacegrotesk text-white w-[130px] h-[39px] hover:bg-coral-pink"
          >
            <div>PLAY AGAIN</div>
          </button>
        </div>
      </div>
    );
  }
}
