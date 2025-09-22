import React, { useState } from 'react';
import userImg from "../../assets/user.png"
import countryImg from '../../assets/country.png'
import { toast } from 'react-toastify';

const PlayerCard = ({player, setAvailableBalance, availableBalance, purchasedPlayers, setPurchasedPlayers}) => {
    const [isSelected, setSelected] = useState(false)

    const handleSelectBtn = (player) => {
        const playerPrice = parseInt(player.player_prize.split(',').join(''))
        if (availableBalance < playerPrice) {
            toast('Not enough coin!!')
            return
        }
        else if(purchasedPlayers.length === 6) {
            toast('6 Player already selected!')
            return
        }
        setSelected(true)
        setAvailableBalance(availableBalance - playerPrice)
        setPurchasedPlayers([...purchasedPlayers, player])
    }

    return (
        <div className="card bg-base-100 shadow-sm p-4">
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
            <p className="font-semibold">Price: BDT {player.player_prize} </p>
            <button disabled={isSelected} onClick={() => handleSelectBtn(player)} className="btn btn-md h-9 bg-white rounded-[8px]">{isSelected ? 'Selected' : 'Choose Player'}</button>
        </div>      
       </div>
      </div>
    );
};

export default PlayerCard;