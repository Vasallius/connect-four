/* eslint-disable react/prop-types */
import TurnBackgroundRed from "../assets/images/turn-background-red.svg";
import TurnBackgroundYellow from "../assets/images/turn-background-yellow.svg";
import useStore from "../stores/useStore";

export function TurnIndicator() {
  const turn = useStore((state) => state.turn);

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
        30s
      </div>
      <img
        className="w-[191px] h-[150px] absolute -top-[37px]"
        src={turn === "red" ? TurnBackgroundRed : TurnBackgroundYellow}
        alt=""
      />
    </div>
  );
}
