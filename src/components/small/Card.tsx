/* import { useState } from "react";
import { Link } from "react-router"; */
import { motion } from "motion/react";

//Commented part will be used for the tutorial parts to come !

interface CardProps {
  children: React.ReactNode;
  id: number;
}

/* const MotionLink = motion.create(Link); */

function Card({ children /* , id */ }: CardProps) {
  /*  const [hover, setHover] = useState(false);
  const handleMouseEnter = () => setHover(true);
  const handleMouseLeave = () => setHover(false); */
  const fadeIn = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 3 },
  };
  return (
    <div
      /*  onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave} */
      className="relative flex justify-center"
    >
      <motion.div
        initial={fadeIn.initial}
        animate={fadeIn.animate}
        transition={fadeIn.transition}
        className="flex flex-col rounded-xl w-45 h-30 justify-center items-center max-w-50 mr-4"
      >
        {children}
      </motion.div>

      {/*   {hover && (
        <MotionLink
          initial={{ scale: 0 }}
          animate={{
            scale: 1,
            transition: { duration: 0.3 },
          }}
          whileHover={{ scale: 1.1 }}
          to={`/tutorial/${id}`}
          className=" flex justify-center items-center absolute top-26 bg-neutral-950 rounded ring-1 ring-neutral-900 shadow-md shadow-neutral-600/15 hover:brightness-120 active:brightness-145 z-30 px-3 mr-4"
        >
          Get the tuto
        </MotionLink>
      )} */}
    </div>
  );
}

export default Card;
