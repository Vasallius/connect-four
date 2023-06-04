import Logo from "../assets/images/logo.svg";
import PlayervsPlayer from "../assets/images/player-vs-player.svg";
import { Link } from "react-router-dom";

const MainMenu = () => {
  return (
    <div className="bg-purple h-[435px] w-[480px] flex flex-col items-center mt-[120px] justify-center gap-y-2 rounded-[40px] border-[3px] border-black shadow-thick-black">
      <img className="mt-[70px] mb-[79px]" src={Logo} alt="" />
      <Link to="/game">
        <div className="flex items-center justify-between bg-dandelion rounded-[20px] p-5 w-[400px] border-[3px] border-black shadow-thick-black mb-[30px] hover:border-iris hover:shadow-thick-purple">
          <div className="text-md font-spacegrotesk font-bold ">
            PLAY VS PLAYER
          </div>
          <img className="" src={PlayervsPlayer} alt="" />
        </div>
      </Link>

      <Link to="/rules">
        <div className="flex justify-between bg-white rounded-[20px] p-5 w-[400px] border-[3px] border-black shadow-thick-black mb-[60px] hover:border-iris hover:shadow-thick-purple">
          <div className="text-md font-spacegrotesk font-bold hover:border-iris  ">
            GAME RULES
          </div>
        </div>
      </Link>
    </div>
  );
};
export default MainMenu;
