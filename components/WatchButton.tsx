import React from "react";
import { IoScanOutline } from "react-icons/io5";
import { useRouter } from "next/router";

interface WatchButtonProps {
	imageId: string;
}

const WatchButton: React.FC<WatchButtonProps> = ({ imageId }) => {
	const router = useRouter();

	return (
		<button
			onClick={() => router.push(`/watch/${imageId}`)}
			className="
        bg-white 
        rounded-md 
        py-1 md:py-2 
        px-2 md:px-4
        w-auto 
        text-xs lg:text-lg 
        font-semibold
        flex
        flex-row
        items-center
        hover:bg-neutral-300
        transition
        "
		>
			<IoScanOutline className="w-4 md:w-7 text-black mr-1" />
			Watch
		</button>
	);
};

export default WatchButton;
