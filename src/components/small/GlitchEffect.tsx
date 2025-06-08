import "./GlitchEffect.css";

// source https://www.youtube.com/watch?v=7Xyg8Ja7dyY

function GlitchEffect() {
	return (
		<section className=" flex w-45 h-25 justify-center p-4">
			<h2 className="glitch-shadow relative uppercase animate-[glitch_500ms_infinite] glitch text-[2.8rem] size-12 w-fit z-10">
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
