/* eslint-disable react/prop-types */

import { BoardHolder } from "./BoardHolder";
import { ScoreCard } from "./ScoreCard";
import Logo from "../assets/images/logo.svg";
import PlayerOne from "../assets/images/player-one.svg";
import PlayerTwo from "../assets/images/player-two.svg";
import LargeWhiteBoard from "../assets/images/board-layer-white-large.svg";
import LargeBlackBoard from "../assets/images/board-layer-black-large.svg";
import { useState } from "react";
import { Link } from "react-router-dom";

const Game = () => {
  const [isPaused, togglePause] = useState(false);

  const menuClick = () => {
    togglePause(!isPaused);
  };

  return (
    <>
      <div
        className={`${
          isPaused ? "visible" : "invisible"
        } opacity-100 self-center z-50 rounded-[40px] w-[480px] h-[491px] bg-purple border-[3px] border-black absolute top-0 mt-[230px] shadow-thick-black flex flex-col items-center`}
      >
        <div className="text-lg font-spacegrotesk font-bold text-white mt-[50px] mb-[44px]">
          PAUSE
        </div>
        <button
          onClick={menuClick}
          className="flex justify-between bg-white rounded-[20px] p-5 w-[400px] border-[3px] border-black shadow-thick-black mb-[27px] hover:border-iris hover:shadow-thick-purple"
        >
          <div className="text-md font-spacegrotesk font-bold hover:border-iris  ">
            CONTINUE GAME
          </div>
        </button>
        <button className="flex justify-between bg-white rounded-[20px] p-5 w-[400px] border-[3px] border-black shadow-thick-black mb-[27px] hover:border-iris hover:shadow-thick-purple">
          <div className="text-md font-spacegrotesk font-bold hover:border-iris  ">
            RESTART
          </div>
        </button>
        <Link to="/">
          <div className="flex justify-between bg-coral-pink rounded-[20px] p-5 w-[400px] border-[3px] border-black shadow-thick-black mb-[27px] hover:border-iris hover:shadow-thick-purple">
            <div className="text-md font-spacegrotesk font-bold hover:border-iris  ">
              QUIT GAME
            </div>
          </div>
        </Link>
      </div>
      <div
        className={`${
          isPaused ? "opacity-50" : ""
        } bg-purple w-screen flex gap-x-[60px] items-center justify-center relative`}
      >
        <ScoreCard img={PlayerOne} player="PLAYER 1" />
        <div className="z-40 flex flex-col relative">
          <div className="flex w-[632px] justify-between mb-[17px] relative">
            <button
              onClick={menuClick}
              className="font-bold flex items-center justify-center rounded-[20px] bg-iris text-xs font-spacegrotesk text-white w-[86px] h-[39px] hover:bg-coral-pink"
            >
              <div>MENU</div>
            </button>
            <img src={Logo} alt="" />
            <div className=" font-bold flex items-center justify-center rounded-[20px] bg-iris text-xs font-spacegrotesk text-white w-[108px] h-[39px] hover:bg-coral-pink">
              <div>RESTART</div>
            </div>
          </div>
          <BoardHolder
            WhiteBoard={LargeWhiteBoard}
            BlackBoard={LargeBlackBoard}
          />
        </div>

        <ScoreCard img={PlayerTwo} player="PLAYER 2" />

        <div className="z-0 rounded-t-[60px] h-[200px] w-screen bg-iris absolute bottom-0"></div>
      </div>
    </>
  );
};
export default Game;
