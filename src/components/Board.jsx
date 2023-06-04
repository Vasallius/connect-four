import CounterYellowLarge from "../assets/images/counter-yellow-large.svg";
import CounterRedLarge from "../assets/images/counter-red-large.svg";

/* eslint-disable react/prop-types */
export function Board({ WhiteBoard, BlackBoard }) {
  return (
    <div className="relative">
      <img className="z-30 absolute" src={WhiteBoard} alt="" />
      <img className="z-10" src={BlackBoard} alt="" />
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
