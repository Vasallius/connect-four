import Logo from "../assets/images/logo.svg";
import PlayervsPlayer from "../assets/images/player-vs-player.svg";
import { Link } from "react-router-dom";

const MainMenu = () => {
  return (
    <main className="bg-purple h-[435px] w-[480px] flex flex-col items-center mt-[120px] justify-center gap-y-2 rounded-[40px] border-[3px] border-black shadow-thick-black">
      <img className="mt-[70px] mb-[79px]" src={Logo} alt="Connect Four Logo" />
      <Link to="/game">
        <button className="flex items-center justify-between bg-dandelion rounded-[20px] p-5 w-[400px] border-[3px] border-black shadow-thick-black mb-[30px] hover:border-iris hover:shadow-thick-purple">
          <h1 className="text-md font-spacegrotesk font-bold ">
            PLAY VS PLAYER
          </h1>
          <img
            className=""
            src={PlayervsPlayer}
            alt="Play versus Player Icon"
          />
        </button>
      </Link>

      <Link to="/rules">
        <button className="flex justify-between bg-white rounded-[20px] p-5 w-[400px] border-[3px] border-black shadow-thick-black mb-[60px] hover:border-iris hover:shadow-thick-purple">
          <h1 className="text-md font-spacegrotesk font-bold hover:border-iris  ">
            GAME RULES
          </h1>
        </button>
      </Link>
    </main>
  );
};
export default MainMenu;
