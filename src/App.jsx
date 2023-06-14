import "./App.css";
import Game from "./components/Game";
import MainMenu from "./components/MainMenu";
import Rules from "./components/Rules";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <div className="bg-purple md:bg-iris h-screen flex  justify-center">
        <Routes>
          <Route path="/" element={<MainMenu />} />
          <Route path="/rules" element={<Rules />} />
          <Route path="/game" element={<Game />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
