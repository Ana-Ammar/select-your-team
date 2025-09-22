import React, { use } from "react";
import PlayerCard from "../PlayerCard/PlayerCard";

const AvailablePlayers = ({ playersPromise, setAvailableBalance, availableBalance, purchasedPlayers, setPurchasedPlayers }) => {
  const playersData = use(playersPromise);
  
  return (
   <div className="max-w-[1280px] mx-auto grid md:grid-cols-3 gap-6 my-8 md:p-0 px-6">

    {
      playersData.map(player => <PlayerCard key={player.id} player={player} setAvailableBalance={setAvailableBalance} availableBalance={availableBalance} 
      purchasedPlayers={purchasedPlayers}
      setPurchasedPlayers={setPurchasedPlayers}></PlayerCard>)
    }

   </div>

   
  );
};

export default AvailablePlayers;
