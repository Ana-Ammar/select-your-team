import React from 'react';
import DeleteBtn from '../../assets/Frame.png'

const SelectedPlayerCard = ({player, removeBtnHandle}) => {

    const removePlayer = (player) => {
        removeBtnHandle(player)
    }
    return (
        <div className='mt-4 flex items-center justify-between p-6 border-2 border-gray-300 rounded-2xl'>
                <div className='flex gap-6 items-center'>
                    <img className='w-[50px] h-[50px] object-cover rounded-2xl'   src={player.player_image} alt="" />
                    <div>
                        <h1 className='text-xl font-semibold'>{player.player_name}</h1>
                        <p className='text-xs text-gray-500'>{player.playing_style}</p>
                    </div>
                </div>

                <img onClick={()=>{removePlayer(player)}} className='cursor-pointer transform active:scale-95 transition-transform duration-150' src={DeleteBtn} alt="" />
            </div>
    );
};

export default SelectedPlayerCard;