import PlayerOne from "../assets/images/player-one.svg";
import PlayerTwo from "../assets/images/player-two.svg";

const Game = () => {
  return (
    <div className="flex gap-x-[60px] items-center">
      <div className="rounded-[20px] bg-white w-[141px] h-[160px] border-[3px] border-black shadow-thick-black">
        <div className="flex flex-col items-center relative">
          <img
            className="w-[54px] h-[59px] absolute -top-[27px] 
            "
            src={PlayerOne}
            alt=""
          />
          <div className="text-sm font-spacegrotesk font-bold mt-[46px]">
            PLAYER 1
          </div>
          <div className="text-lg font-spacegrotesk font-bold">0</div>
        </div>
      </div>
      <div>Board</div>
      <div className="rounded-[20px] bg-white w-[141px] h-[160px] border-[3px] border-black shadow-thick-black">
        <div className="flex flex-col items-center relative">
          <img
            className="w-[54px] h-[59px] absolute -top-[27px] 
            "
            src={PlayerTwo}
            alt=""
          />
          <div className="text-sm font-spacegrotesk font-bold mt-[46px]">
            PLAYER 2
          </div>
          <div className="text-lg font-spacegrotesk font-bold">0</div>
        </div>
      </div>
    </div>
  );
};
export default Game;
