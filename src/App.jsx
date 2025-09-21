import { Suspense, useState } from "react";
import "./App.css";
import AvailablePlayers from "./components/AvailablePlayers/AvailablePlayers";
import Navbar from "./components/Navbar/Navbar";
import SelectedPlayers from "./components/SelectedPlayers/SelectedPlayers";

const fetchPlayers = async () => {
  const res = await fetch("/players.json");
  return res.json();
};

function App() {
  const playersPromise = fetchPlayers();

  const [toggle, setToggle] = useState(true);

  return (
    <>
      <Navbar></Navbar>

      {/* Toggling Section */}

      <div className="max-w-[1280px] mx-auto flex justify-between items-center">
        <h1 className="font-bold text-[28px]">
          {toggle === true ? "Available" : "Selected"} Players
        </h1>
        <div>
          <button
            onClick={() => {
              setToggle(true);
            }}
            className={`py-3 px-7 border-1 border-gray-200 rounded-l-2xl border-r-0 cursor-pointer transform active:scale-95 transition-transform duration-150 ${
              toggle === true ? " bg-[#E7FE29] font-bold" : ""}`}>
            Available
          </button>
          <button
            onClick={() => {
              setToggle(false);
            }}
            className={`py-3 px-7 border-1 border-gray-200 rounded-r-2xl border-l-0 cursor-pointer transform active:scale-95 transition-transform duration-150 ${
              toggle === false ? " bg-[#E7FE29] font-bold" : ""}`}>
            Selected <span>(0)</span>
          </button>
        </div>
      </div>

      <Suspense
        fallback={<div className="max-w-[1280px] h-40 mx-auto flex justify-center items-center">
                    <span className="loading loading-ring loading-xl"></span>
                </div>}>

        {toggle === true ? (
          <AvailablePlayers playersPromise={playersPromise}></AvailablePlayers>
        ) : (
          <SelectedPlayers></SelectedPlayers>
        )}
      </Suspense>
    </>
  );
}

export default App;
