import React, { useState } from "react";
import { AiFillCaretLeft } from "react-icons/ai";
import { useRouter } from "next/router";
import useImage from "@/hooks/useImage";

const Watch = () => {
	const router = useRouter();
	const { imageId } = router.query;

	const { data } = useImage(imageId as string);
	const [scale, setScale] = useState(1);

	const handleWheel = (event: React.WheelEvent<HTMLImageElement>) => {
		// Increase or decrease the scale based on the direction of the scroll
		const newScale = scale + (event.deltaY > 0 ? -0.1 : 0.1);
		// Clamp the scale to a minimum of 0.5 and a maximum of 3
		const clampedScale = Math.max(0.5, Math.min(3, newScale));
		setScale(clampedScale);
	};

	return (
		<div className="h-screen w-screen bg-black flex flex-column items-center justify-center">
			<nav className="fixed top-0 right-0 left-0 w-full p-4 z-10 flex flex-row items-center gap-8 bg-black bg-opacity-70">
				<AiFillCaretLeft
					onClick={() => router.push("/")}
					className="w-4 md:w-10 text-white cursor-pointer hover:opacity-80 transition"
				/>
				<p className="text-white text-1xl md:text-3xl font-bold">
					<span className="font-light">Title:</span> {data?.title}
				</p>
			</nav>

			<img
				className="lg:h-full w-full cursor-zoom-in md:h-auto"
				src={data?.imageUrl}
				style={{ transform: `scale(${scale})` }}
				onWheel={handleWheel}
			/>
		</div>
	);
};

export default Watch;
