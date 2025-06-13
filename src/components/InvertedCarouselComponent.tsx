import * as small from "./small/SmallIndex";
import { motion } from "framer-motion";

const components = [
  <small.SocialFanAnimated />,
  <small.BrokenLogo />,
  <small.NeonButton />,
  <small.GlitchEffect />,
  <small.AnimatedGradientText />,
  <small.SlicedText> {"Sliced"} </small.SlicedText>,
];

function InvertedCarouselComponent() {
  return (
    <div className="flex items-center container h-50 mx-auto mask-l-from-80% mask-r-from-80% border-y-white border-[.1px]">
      <div className="flex ">
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: 0 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="flex flex-shrink-0"
        >
          {[...components].map((component, idx) => (
            <small.Card id={idx + 1} key={idx}>
              {component}
            </small.Card>
          ))}
        </motion.div>
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: 0 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="flex flex-shrink-0"
        >
          {[...components].map((component, idx) => (
            <small.Card id={idx + 1} key={idx}>
              {component}
            </small.Card>
          ))}
        </motion.div>
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: 0 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="flex flex-shrink-0"
        >
          {[...components].map((component, idx) => (
            <small.Card id={idx + 1} key={idx}>
              {component}
            </small.Card>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default InvertedCarouselComponent;
