import { motion } from "motion/react";

const text = "Blurry";
const blur = (index: number) => ({
  initial: { opacity: 0, y: 10 },
  animate: {
    filter: ["blur(10px)", "blur(0)", "blur(0)", "blur(0)", "blur(10px)"],
    opacity: [0, 1, 1, 1, 0],
    y: [10, 0, 0, 0, 10],
  },
  transition: {
    duration: 4,
    delay: 0.03 * index,
    repeat: Infinity,
    ease: "easeInOut",
  },
});

function renderAnimatedText(text: string, startIndex = 0) {
  const words = text.split(" ");
  let index = startIndex;

  return words.map((word, wordIdx) => {
    const letters = word.split("").map((letter, letterIdx) => {
      const animated = (
        <motion.span
          key={letterIdx}
          {...blur(index)}
          className="inline-block text-neutral-500"
        >
          {letter}
        </motion.span>
      );
      index++;
      return animated;
    });

    return (
      <span key={`word-${wordIdx}`} className=" mr-[5px] inline-block">
        {letters}
      </span>
    );
  });
}

function BlurEffect() {
  let baseIndex = 0;

  return (
    <h2 className="font-semibold text-4xl">
      {(() => {
        const output = renderAnimatedText(text, baseIndex);
        return output;
      })()}
    </h2>
  );
}
export default BlurEffect;
