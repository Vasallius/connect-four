/* eslint-disable react/prop-types */
export function ScoreCard({ img, player }) {
  return (
    <div className=" rounded-[20px] bg-white w-[141px] h-[160px] border-[3px] border-black shadow-thick-black">
      <div className=" flex flex-col items-center relative">
        <img
          className=" w-[54px] h-[59px] absolute -top-[27px] 
                "
          src={img}
          alt=""
        />
        <div className="text-sm font-spacegrotesk font-bold mt-[46px]">
          {player}
        </div>
        <div className="text-lg font-spacegrotesk font-bold">0</div>
      </div>
    </div>
  );
}
