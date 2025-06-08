import { useState } from "react";
import { Link } from "react-router";
import { motion } from "motion/react";

interface CardProps {
  children: React.ReactNode;
  id: number;
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
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative flex justify-center"
    >
      <motion.div
        initial={fadeIn.initial}
        animate={fadeIn.animate}
        transition={fadeIn.transition}
        className="flex flex-col rounded-xl w-45 h-30 p-3 justify-center items-center gap-20 max-w-50 shadow-md mr-4"
      >
        {children}
      </motion.div>

      {hover && (
        <MotionLink
          initial={{ scale: 0 }}
          animate={{
            scale: 1,
            transition: { duration: 0.3 },
          }}
          whileHover={{ scale: 1.1 }}
          to={`/tutorial/${id}`}
          className="text-gray-400 flex justify-center items-center absolute top-26 bg-gray-950 px-2 rounded ring-1 ring-gray-900 shadow-md shadow-gray-600/15 hover:brightness-110 active:brightness-125 z-30 mr-4"
        >
          Get the tuto
        </MotionLink>
      )}
    </div>
  );
}

export default Card;
