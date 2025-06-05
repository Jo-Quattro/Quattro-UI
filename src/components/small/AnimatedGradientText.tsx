import "./AnimatedGradientText.css";

function AnimatedGradientText() {
	return (
		<section className="flex justify-center items-center rounded-xl ring-1 ring-gray-700 w-45 h-25 text-center p-5 group hover:duration-500 shadow-md shadow-gray-500/20">
			<h2 className="text-[2.5rem] bg-size-[400%] bg-gradient-to-r from-violet-500 to-cyan-400 bg-clip-text text-transparent animate-[gradient-text_7s_infinite_alternate]">
				Gradient
			</h2>
		</section>
	);
}
export default AnimatedGradientText;
