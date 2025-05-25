import { useState } from "react";
import { Link } from "react-router";

interface CardProps {
	children: React.ReactNode;
}

function Card({ children }: CardProps) {
	const [hover, setHover] = useState(false);
	const handleMouseEnter = () => setHover(true);
	const handleMouseLeave = () => setHover(false);
	return (
		<div
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
			className="flex flex-col p-3 justify-center items-center gap-2 w-50 rounded-xl bg-gray-900 ring-1 ring-gray-500/[0.08] shadow-sm shadow-gray-600/50"
		>
			{children}
			{hover && (
				<Link
					to="/tuto/:id"
					onClick={console.log}
					className="text-gray-400 bg-gray-950 px-2 rounded ring-1 ring-gray-700 shadow-md shadow-gray-500/20 hover:brightness-110 active:brightness-125"
				>
					Get the tuto
				</Link>
			)}
		</div>
	);
}

export default Card;
