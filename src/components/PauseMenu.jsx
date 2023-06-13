/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

export function PauseMenu({ menuClick, restartClick }) {
  return (
    <>
      <h1 className="text-lg font-spacegrotesk font-bold text-white mt-[50px] mb-[44px]">
        PAUSE
      </h1>
      <button
        onClick={menuClick}
        className="flex justify-between bg-white rounded-[20px] p-5 w-[400px] border-[3px] border-black shadow-thick-black mb-[27px] hover:border-iris hover:shadow-thick-purple"
      >
        <h2 className="text-md font-spacegrotesk font-bold hover:border-iris  ">
          CONTINUE GAME
        </h2>
      </button>
      <button
        onClick={restartClick}
        className="flex justify-between bg-white rounded-[20px] p-5 w-[400px] border-[3px] border-black shadow-thick-black mb-[27px] hover:border-iris hover:shadow-thick-purple"
      >
        <h2 className="text-md font-spacegrotesk font-bold hover:border-iris  ">
          RESTART
        </h2>
      </button>
      <Link onClick={restartClick} to="/">
        <button className="flex justify-between bg-coral-pink rounded-[20px] p-5 w-[400px] border-[3px] border-black shadow-thick-black mb-[27px] hover:border-iris hover:shadow-thick-purple">
          <h2 className="text-md font-spacegrotesk font-bold hover:border-iris  ">
            QUIT GAME
          </h2>
        </button>
      </Link>
    </>
  );
}
