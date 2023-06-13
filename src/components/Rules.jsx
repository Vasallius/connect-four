import { Link } from "react-router-dom";
import IconCheck from "../assets/images/icon-check.svg";

const Rules = () => {
  return (
    <main className="bg-white h-[537px] w-[480px] flex flex-col items-center mt-[182px]  gap-y-2 rounded-[40px] border-[3px] border-black shadow-thick-black">
      <h1 className="text-lg font-bold mt-[30px] mb-[29px]">RULES</h1>
      <section className="flex flex-col px-[34px] ">
        <h2 className="text-purple text-sm font-bold font-spacegrotesk mb-[16px]">
          Objective
        </h2>
        <p className="text-xs font-spacegrotesk opacity-[0.66] mb-[29px]">
          Be the first player to connect 4 of the same colored discs in a row
          (either vertically, horizontally, or diagonally).
        </p>
        <h2 className="text-purple text-sm font-bold font-spacegrotesk mb-[16px]">
          HOW TO PLAY
        </h2>
        <section className="flex flex-row gap-x-[19px] mb-[10px]">
          <p className="text-black font-spacegrotesk text-xs font-bold">1</p>
          <p className="text-xs font-spacegrotesk opacity-[0.66]">
            Red goes first in the first game.
          </p>
        </section>
        <section className="flex flex-row gap-x-[17px] mb-[10px]">
          <p className="text-black font-spacegrotesk text-xs font-bold">2</p>
          <div className="text-xs font-spacegrotesk opacity-[0.66]">
            Players must alternate turns, and only one disc can be dropped in
            each turn.
          </div>
        </section>
        <section className="flex flex-row gap-x-[17px] mb-[10px]">
          <p className="text-black font-spacegrotesk text-xs font-bold">3</p>
          <p className="text-xs font-spacegrotesk opacity-[0.66]">
            The game ends when there is a 4-in-a-row or a stalemate.
          </p>
        </section>
        <section className="flex flex-row gap-x-[16px] ">
          <p className="text-black font-spacegrotesk text-xs font-bold">4</p>
          <p className="text-xs font-spacegrotesk opacity-[0.66] mb-[10px]">
            The starter of the previous game goes second on the next game.
          </p>
        </section>
        <Link to="/" className="self-center object-bottom ">
          <button>
            <img
              className="w-[64px] h-[64px] "
              src={IconCheck}
              alt="Check Icon"
            />
          </button>
        </Link>
      </section>
    </main>
  );
};
export default Rules;
