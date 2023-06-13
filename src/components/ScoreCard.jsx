/* eslint-disable react/prop-types */
import useStore from "../stores/useStore";
export function ScoreCard({ img, player }) {
  const { p1score, p2score } = useStore();

  return (
    <section className=" rounded-[20px] mt-[324px] bg-white w-[141px] h-[160px] border-[3px] border-black shadow-thick-black">
      <div className=" flex flex-col items-center relative">
        <img
          className=" w-[54px] h-[59px] absolute -top-[27px]"
          src={img}
          alt="Player Icon"
        />
        <h1 className="text-sm font-spacegrotesk font-bold mt-[46px]">
          {player}
        </h1>
        <p className="text-lg font-spacegrotesk font-bold">
          {player == "PLAYER 1" ? p1score : p2score}
        </p>
      </div>
    </section>
  );
}
