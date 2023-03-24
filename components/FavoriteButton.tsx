import React from 'react';
import { AiOutlineHeart } from 'react-icons/ai';

const FavoriteButton = () => {
    return (
			<div className="cursor-pointer group/item w-6 h-6 lg:w-10 lg:h-10  flex justify-center items-center transition">
				<AiOutlineHeart className="text-white hover:text-red-500" size={30} />
			</div>
		);
};

export default FavoriteButton;