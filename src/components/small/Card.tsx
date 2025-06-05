import { useState } from "react";
import { Link } from "react-router";
import {motion} from "motion/react";

interface CardProps {
	children: React.ReactNode;
	id : number;
}

const MotionLink = motion(Link);

function Card({ children, id }: CardProps) {
	const [hover, setHover] = useState(false);
	const handleMouseEnter = () => setHover(true);
	const handleMouseLeave = () => setHover(false);
	const fadeIn = {
		initial: { opacity: 0 },
		animate: { opacity: 1 },
		transition: { duration: 3 },
	};

	return (
		<motion.div 
		initial={fadeIn.initial}
		animate={fadeIn.animate}
		transition={fadeIn.transition}
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
			className="flex relative flex-col p-3 justify-center items-center gap-2 max-w-50"
		>
			{children}
			{hover && (
				<MotionLink
				initial={{scale :0}}
				animate={{scale : 1, 
					transition : {duration: .3}
				}}
				
				whileHover={{scale : 1.1}}
					to={`/tuto/${id}`}
					className="text-gray-400 flex justify-center items-center absolute h-7 top-30 bg-gray-950 px-2 rounded ring-1 ring-gray-700 shadow-md shadow-gray-500/20 hover:brightness-110 active:brightness-125 z-30"
				>
					Get the tuto
				</MotionLink>
			)}
		</motion.div>
	);
}

export default Card;
