import "./GlitchEffect.css";

// source https://www.youtube.com/watch?v=7Xyg8Ja7dyY

function GlitchEffect() {
	return (
		<section className=" flex rounded-xl ring-1 ring-gray-700 w-45 h-25 text-center justify-center align-middle p-4 group hover:duration-500 shadow-md shadow-gray-500/20">
			<h2 className="glitch-shadow relative uppercase animate-[glitch_500ms_infinite] glitch text-[2.8rem] size-12 w-fit">
				<span
					className=" span-1 absolute inset-0 animate-[glitch_750ms_infinite] opacity-0.3"
					aria-hidden="true"
				>
					Glitch
				</span>
				Glitch{" "}
				<span
					className="span-2 absolute  inset-0 animate-[glitch_375ms_infinite] translate-[0.125em, 0.125em] opacity-0.3"
					aria-hidden="true"
				>
					Glitch
				</span>
			</h2>
		</section>
	);
}
export default GlitchEffect;
