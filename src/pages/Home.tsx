import { motion } from "motion/react";
import CarouselComponent from "../components/CarouselComponent";

const homeTitle = "Built to learn, Shared to inspire.";
const homeSubtitle =
  "A growing collection of UI components and tutorials — reusable, adaptable, and open to all.";
const paragraph1 =
  "Quattro-UI is my personal space to learn by doing, and to share everything I build along the way. Each component has been carefully recreated from tutorials, videos, or real-world examples, then adapted with a focus on reusability and simplicity. Whether you’re just starting out or looking for a clean starting point for your own designs, these components are meant to be practical and easy to integrate.";
const paragraph2 =
  "I’m still learning — and I probably make mistakes. But this project is open : open to improvements, open to inspiration, and open to anyone who wants to contribute or borrow. If you see something worth enhancing,  feel free to suggest changes or share your own versions. Wherever possible, I credit the original creators who inspired me. Quattro-UI isn’t about reinventing the wheel — it’s about making good ideas more usable, together.";

const blurEffect = (index: number) => ({
  initial: { filter: "blur(10px)", opacity: 0, y: 10 },
  animate: { filter: "blur(0)", opacity: 1, y: 0 },
  transition: { duration: 0.4, delay: 0.03 * index },
});

function advanceIndex(current: number, addition: number): number {
  const next = current + addition;
  return next;
}
function renderAnimatedText(text: string, startIndex = 0) {
  const words = text.split(" ");
  let index = startIndex;

  return words.map((word, wordIdx) => {
    const letters = word.split("").map((letter, letterIdx) => {
      const animated = (
        <motion.span
          key={letterIdx}
          {...blurEffect(index)}
          className="inline-block"
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

function Home() {
  let baseIndex = 0;

  return (
    <section className="w-full h-[100%] text-center px-15 flex flex-col items-center gap-8 mt-5 mb-12 overflow-hidden mask-l-from-80% mask-r-from-80%">
      <h2 className="font-semibold italic text-4xl">
        {(() => {
          const output = renderAnimatedText(homeTitle, baseIndex);
          baseIndex = advanceIndex(baseIndex, homeTitle.length);
          return output;
        })()}
      </h2>
      <h3 className="text-xl font-medium">
        {(() => {
          const output = renderAnimatedText(homeSubtitle, baseIndex);
          baseIndex = advanceIndex(baseIndex, homeSubtitle.length);
          return output;
        })()}
      </h3>
      <motion.section
        initial={{ opacity: 0, filter: "blur(5px)" }}
        animate={{ opacity: 1, filter: "blur(0)" }}
        transition={{ duration: 3, delay: 0.03 * baseIndex + 0.3 }}
        className="mt-3 overflow-hidden"
      >
        <CarouselComponent />
      </motion.section>
      <motion.p
        initial={{ filter: "blur(10px)", opacity: 0, x: -100 }}
        animate={{ filter: "blur(0)", opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.03 * baseIndex + 1 }}
        className="text-left px-5 leading-relaxed mt-4"
      >
        {paragraph1}
      </motion.p>
      <motion.p
        initial={{ filter: "blur(10px)", opacity: 0, x: -100 }}
        animate={{ filter: "blur(0)", opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.03 * baseIndex + 1.9 }}
        className="text-left px-5 leading-relaxed mt-4"
      >
        {paragraph2}
      </motion.p>
    </section>
  );
}

export default Home;
