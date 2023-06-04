import Logo from "../assets/images/logo.svg";
import PlayerOne from "../assets/images/player-one.svg";
import PlayerTwo from "../assets/images/player-two.svg";
import LargeWhiteBoard from "../assets/images/board-layer-white-large.svg";
import LargeBlackBoard from "../assets/images/board-layer-black-large.svg";
import MarkerRed from "../assets/images/marker-red.svg";
import TurnBackgroundRed from "../assets/images/turn-background-red.svg";

const Game = () => {
  return (
    <div className="bg-purple w-screen flex gap-x-[60px] items-center justify-center">
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
      <div className="flex flex-col relative">
        <div className="flex w-[632px] justify-between mb-[51px]">
          <div className="font-bold flex items-center justify-center rounded-[20px] bg-iris text-xs font-spacegrotesk text-white w-[86px] h-[39px]">
            <div>MENU</div>
          </div>
          <img src={Logo} alt="" />
          <div className=" font-bold flex items-center justify-center rounded-[20px] bg-iris text-xs font-spacegrotesk text-white w-[108px] h-[39px]">
            <div>RESTART</div>
          </div>
        </div>
        <img className="ml-[38px] w-[32px] h-[36px]" src={MarkerRed} alt="" />
        <div>
          <img className="absolute" src={LargeWhiteBoard} alt="" />
          <img src={LargeBlackBoard} alt="" />
        </div>
        <div className="flex flex-col items-center justify-center relative  -top-[16px]">
          <div className="z-50 text-white font-spacegrotesk text-xs font-bold">
            PLAYER 1&apos;S TURN
          </div>
          <div className="z-50 text-white font-spacegrotesk text-lg font-bold">
            30s
          </div>
          <img
            className="w-[191px] h-[150px] absolute -top-[37px]"
            src={TurnBackgroundRed}
            alt=""
          />
        </div>
      </div>
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
