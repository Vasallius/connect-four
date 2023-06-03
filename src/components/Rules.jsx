import IconCheck from "../assets/images/icon-check.svg";

const Rules = () => {
  return (
    <div className="bg-white h-[537px] w-[480px] flex flex-col items-center mt-[182px]  gap-y-2 rounded-[40px] border-[3px] border-black shadow-thick-black">
      <div className="text-lg font-bold mt-[30px] mb-[29px]">RULES</div>
      <div className="flex flex-col px-[34px] ">
        <div className="text-purple text-sm font-bold font-spacegrotesk mb-[16px]">
          Objective
        </div>
        <div className="text-xs font-spacegrotesk opacity-[0.66] mb-[29px]">
          Be the first player to connect 4 of the same colored discs in a row
          (either vertically, horizontally, or diagonally).
        </div>
        <div className="text-purple text-sm font-bold font-spacegrotesk mb-[16px]">
          HOW TO PLAY
        </div>
        <div className="flex flex-row gap-x-[19px] mb-[10px]">
          <div className="text-black font-spacegrotesk text-xs font-bold">
            1
          </div>
          <div className="text-xs font-spacegrotesk opacity-[0.66]">
            Red goes first in the first game.
          </div>
        </div>
        <div className="flex flex-row gap-x-[17px] mb-[10px]">
          <div className="text-black font-spacegrotesk text-xs font-bold">
            2
          </div>
          <div className="text-xs font-spacegrotesk opacity-[0.66]">
            Players must alternate turns, and only one disc can be dropped in
            each turn.
          </div>
        </div>
        <div className="flex flex-row gap-x-[17px] mb-[10px]">
          <div className="text-black font-spacegrotesk text-xs font-bold">
            3
          </div>
          <div className="text-xs font-spacegrotesk opacity-[0.66]">
            The game ends when there is a 4-in-a-row or a stalemate.
          </div>
        </div>
        <div className="flex flex-row gap-x-[16px] ">
          <div className="text-black font-spacegrotesk text-xs font-bold">
            4
          </div>
          <div className="text-xs font-spacegrotesk opacity-[0.66] mb-[10px]">
            The starter of the previous game goes second on the next game.
          </div>
        </div>
        <img
          className="w-[64px] h-[64px] self-center object-bottom "
          src={IconCheck}
          alt=""
        />
      </div>
    </div>
  );
};
export default Rules;
