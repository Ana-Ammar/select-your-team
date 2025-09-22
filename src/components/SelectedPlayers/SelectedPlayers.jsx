import React from 'react';
import SelectedPlayerCard from '../SelectedPlayersCard/SelectedPlayerCard';

const SelectedPlayers = ({purchasedPlayers, removeBtnHandle, setToggle}) => {
    console.log(purchasedPlayers)
    return (
        <div className='max-w-[1280px] mx-auto mt-8 md:p-0 px-6'>
            {
                purchasedPlayers.map(player => <SelectedPlayerCard 
                    key={player.id}
                    removeBtnHandle={removeBtnHandle}
                    player={player}></SelectedPlayerCard>)
            }

            <button onClick={() => {setToggle(true)}} className="mt-6  py-3 px-7 border-1 border-gray-200 rounded-2xl cursor-pointer transform active:scale-95 transition-transform duration-150 bg-[#E7FE29] font-bold">Add More Player</button>
        </div>
    );
};

export default SelectedPlayers;