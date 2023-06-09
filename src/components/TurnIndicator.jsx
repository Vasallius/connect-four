/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import TurnBackgroundRed from "../assets/images/turn-background-red.svg";
import TurnBackgroundYellow from "../assets/images/turn-background-yellow.svg";
import useStore from "../stores/useStore";
import { useEffect } from "react";

export function TurnIndicator() {
  const turn = useStore((state) => state.turn);
  const setTurn = useStore((state) => state.setTurn);
  const counter = useStore((state) => state.counter);
  const setCounter = useStore((state) => state.setCounter);
  const isPaused = useStore((state) => state.isPaused);
  useEffect(() => {
    if (counter > 0 && !isPaused) {
      const interval = setInterval(() => {
        setCounter(counter - 1);
        console.log(counter);
      }, 1000);

      return () => clearInterval(interval); // Cleanup the interval when the component unmounts
    } else {
      if (!isPaused) {
        setCounter(30);
      }
      if (turn === "red") {
        setTurn("yellow");
      } else {
        setTurn("red");
      }
    }
  }, [counter, setCounter, isPaused]);

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
        {counter}s
      </div>
      <img
        className="w-[191px] h-[150px] absolute -top-[37px]"
        src={turn === "red" ? TurnBackgroundRed : TurnBackgroundYellow}
        alt=""
      />
    </div>
  );
}
