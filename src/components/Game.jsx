/* eslint-disable react/prop-types */
import { PauseMenu } from "./PauseMenu";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { BoardHolder } from "./BoardHolder";
import { ScoreCard } from "./ScoreCard";
import Logo from "../assets/images/logo.svg";
import PlayerOne from "../assets/images/player-one.svg";
import PlayerTwo from "../assets/images/player-two.svg";
import LargeWhiteBoard from "../assets/images/board-layer-white-large.svg";
import LargeBlackBoard from "../assets/images/board-layer-black-large.svg";
import useStore from "../stores/useStore";

const Game = () => {
  const {
    turn,
    setMarkers,
    setBoard,
    isPaused,
    togglePause,
    setCounter,
    setWinner,
    setTurn,
    setScore,
    hasWinner,
  } = useStore();

  const menuClick = () => {
    togglePause(!isPaused);
    console.log(isPaused);
  };

  const restartClick = () => {
    setMarkers([]);
    setBoard([[], [], [], [], [], [], []]);
    setTurn("red");
    setCounter(30);
    setWinner(false);
    setScore(1, 0);
    setScore(2, 0);
    togglePause(false);
  };

  return (
    <>
      <section
        className={`${
          isPaused ? "visible" : "invisible"
        } opacity-100 self-center z-50 rounded-[40px] w-[480px] h-[491px] bg-purple border-[3px] border-black absolute top-0 mt-[230px] shadow-thick-black flex flex-col items-center`}
      >
        <PauseMenu menuClick={menuClick} restartClick={restartClick} />
      </section>
      <main
        className={`${
          isPaused ? "opacity-50" : ""
        } bg-purple w-screen flex gap-x-[60px] pt-[53px] justify-center relative`}
      >
        <ScoreCard img={PlayerOne} player="PLAYER 1" />

        <main className="z-40 flex flex-col relative">
          <Header
            menuClick={menuClick}
            Logo={Logo}
            restartClick={restartClick}
          />
          <BoardHolder
            WhiteBoard={LargeWhiteBoard}
            BlackBoard={LargeBlackBoard}
          />
        </main>

        <ScoreCard img={PlayerTwo} player="PLAYER 2" />

        <Footer hasWinner={hasWinner} turn={turn} />
      </main>
    </>
  );
};
export default Game;
