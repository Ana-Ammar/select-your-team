import { Suspense, useState } from "react";
import "./App.css";
import AvailablePlayers from "./components/AvailablePlayers/AvailablePlayers";
import Navbar from "./components/Navbar/Navbar";
import SelectedPlayers from "./components/SelectedPlayers/SelectedPlayers";
import { ToastContainer } from 'react-toastify';
import Banner from "./components/Banner/Banner";

const fetchPlayers = async () => {
  const res = await fetch("/players.json");
  return res.json();
};

const playersPromise = fetchPlayers();

function App() {
const [toggle, setToggle] = useState(true);
const [availableBalance, setAvailableBalance] = useState(15000000)
const [purchasedPlayers, setPurchasedPlayers] = useState([])



const removeBtnHandle = (deletedPlayer) => {
  const filteredData = purchasedPlayers.filter(player => player.id !== deletedPlayer.id)
  setPurchasedPlayers(filteredData)
  setAvailableBalance(availableBalance + parseInt(deletedPlayer.player_prize.split(',').join('')))
}

  return (
    <>
      <Navbar availableBalance={availableBalance}></Navbar>

      {/* Banner */}
      <Banner></Banner>
      {/* Toggling Section */}

      <div className="max-w-[1280px] mx-auto flex justify-between items-center md:p-0 px-6">
        <h1 className="font-bold md:text-[28px] text-[24px]">
          {toggle === true ? "Available Players" : `Selected Players (${purchasedPlayers.length}/6)`} 
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
            Selected <span>({purchasedPlayers.length})</span>
          </button>
        </div>
      </div>

      <Suspense
        fallback={<div className="max-w-[1280px] h-40 mx-auto flex justify-center items-center">
                    <span className="loading loading-ring loading-xl"></span>
                </div>}>

        {toggle === true ? (
          <AvailablePlayers playersPromise={playersPromise} setAvailableBalance={setAvailableBalance}
          availableBalance={availableBalance}
          purchasedPlayers={purchasedPlayers}
          setPurchasedPlayers={setPurchasedPlayers}
          ></AvailablePlayers>
        ) : (
          <SelectedPlayers purchasedPlayers={purchasedPlayers}
          removeBtnHandle={removeBtnHandle}
          setToggle={setToggle}></SelectedPlayers>
        )}
      </Suspense>

      <ToastContainer />
    </>
  );
}

export default App;
