import React, { use } from "react";
import userImg from "../../assets/user.png"
import countryImg from '../../assets/country.png'

const AvailablePlayers = ({ playersPromise }) => {
  const playersData = use(playersPromise);
  
  return (
   <div className="max-w-[1280px] mx-auto grid grid-cols-3 gap-6 my-8">

    {
      playersData.map(player => <div key={player.id} className="card bg-base-100 shadow-sm p-4">
        <figure>
          <img
            className="rounded-2xl h-[250px]"
            src={player.player_image}
            alt="players"
          />
        </figure>
        <div className="">
          <div className="flex gap-2.5 items-center mt-6">
            <img className="w-6 h-6" src={userImg}/>
            <h2 className="card-title">{player.player_name}</h2>
          </div>

        <div className="flex items-center justify-between my-4">
          <div className="flex gap-2.5 items-center">
            <img className="w-4 h-4" src={countryImg}/>
            <h2 className="text-[#13131390]">{player.country}</h2>
          </div>
          <p className="badge bg-[#1313130d] p-3">{player.playing_style}</p>
        </div>
        
        <hr className="text-[#1313131a] mb-4" />

        <div className="flex justify-between">
            <p className="font-bold">Rating</p>
            <p className="text-[#131313b3]">{player.rating}</p>
        </div>

        <div className="flex justify-between my-4">
            <p className="font-semibold">{player.batting_style}</p>
            <p className="text-[#131313b3]">{player.bowling_style}</p>
        </div>

        <div className="flex justify-between items-center my-4">
            <p className="font-semibold">Price: $ {player.player_prize}</p>
            <button className="btn btn-md h-9 bg-white rounded-[8px]">Choose Player</button>
        </div>      
       </div>
      </div>)
    }

   </div>

   
  );
};

export default AvailablePlayers;
