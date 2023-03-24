import React, { useState, useEffect } from "react";

interface TypingTitleProps {
	title: string;
}

const TypingTitle: React.FC<TypingTitleProps> = ({ title }) => {
	const [displayText, setDisplayText] = useState("");
	const [currentIndex, setCurrentIndex] = useState(0);

	useEffect(() => {
		const intervalId = setInterval(() => {
			setCurrentIndex((index) => {
				if (index >= title.length) {
					clearInterval(intervalId);
					return index;
				}
				setDisplayText(title.slice(0, index + 1));
				return index + 1;
			});
		}, 100);
		return () => clearInterval(intervalId);
	}, [title]);

	return (
		<h1 className="text-4xl text-white font-bold tracking-wider">
			<span className="text-sky-500">{displayText}</span>
			<span className="text-sky-500 transition-all duration-500 opacity-0 inline-block">
				|
			</span>
		</h1>
	);
};

export default TypingTitle;
