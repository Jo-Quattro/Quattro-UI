import "./AnimatedGradientText.css";

function AnimatedGradientText() {
  return (
    <h2
      className="uppercase text-[2rem] font-bold bg-size-[400%] 
			bg-gradient-to-r from-violet-500 to-cyan-400 bg-clip-text text-transparent 
			animate-[gradient-text_2s_infinite_alternate]"
    >
      Gradient
    </h2>
  );
}
export default AnimatedGradientText;
