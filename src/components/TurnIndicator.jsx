/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import TurnBackgroundRed from "../assets/images/turn-background-red.svg";
import TurnBackgroundYellow from "../assets/images/turn-background-yellow.svg";
import useStore from "../stores/useStore";
import { useEffect } from "react";

export function TurnIndicator() {
  const turn = useStore((state) => state.turn);
  const counter = useStore((state) => state.counter);
  const setCounter = useStore((state) => state.setCounter);
  const isPaused = useStore((state) => state.isPaused);
  const hasWinner = useStore((state) => state.hasWinner);
  useEffect(() => {
    if (counter > 0 && !isPaused && !hasWinner) {
      const interval = setInterval(() => {
        setCounter(counter - 1);
      }, 1000);
      return () => clearInterval(interval); // Cleanup the interval when the component unmounts
    } else if (hasWinner) {
      setCounter("WINS");
    }
  }, [counter, isPaused, hasWinner]);

  return (
    <div className="z-50 flex flex-col items-center justify-center relative  -top-[16px]">
      <div
        className={`z-50 ${
          turn === "red" ? "text-white" : "text-black"
        } font-spacegrotesk text-xs font-bold`}
      >
        PLAYER 1&apos;S TURN
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
}
