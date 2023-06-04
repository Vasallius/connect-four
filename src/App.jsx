import "./App.css";
import MainMenu from "./components/MainMenu";
import Rules from "./components/Rules";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <div className="bg-iris h-screen flex  justify-center">
        <Routes>
          <Route path="/" element={<MainMenu />} />
          <Route path="/rules" element={<Rules />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
