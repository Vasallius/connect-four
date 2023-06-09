import { Counter } from "./Counter";
import CounterYellowLarge from "../assets/images/counter-yellow-large.svg";
import CounterRedLarge from "../assets/images/counter-red-large.svg";
import { Marker } from "./Marker";
import MarkerYellow from "../assets/images/marker-yellow.svg";
import MarkerRed from "../assets/images/marker-red.svg";
import useStore from "../stores/useStore";

/* eslint-disable react/prop-types */
export function Board({
  WhiteBoard,
  BlackBoard,
  markerPosition,
  handleMouseMove,
  handleClick,
}) {
  const turn = useStore((state) => state.turn);
  const markers = useStore((state) => state.markers);
  return (
    <>
      <div
        className="relative"
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
    </>
  );
}
