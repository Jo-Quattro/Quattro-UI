import { useState } from "react";
import "./NeonButton.css";
function NeonButton() {
	const [changeColor, setChangeColor] = useState(false);
	return (

			<div
				className={`animate-rotate-border ${changeColor ? "bg-conic/[from_var(--border-angle)] from-gray-700 via-cyan-400 to-gray-700 from-70% via-85% to-100%" : "bg-conic/[from_var(--border-angle)] from-gray-700 via-purple-500 to-gray-700 from-70% via-85% to-100%"} w-[121px] h-[41px] rounded flex justify-center items-center`}
			>
				<button
					className=" w-[120px] h-[40px] bg-gradient-to-br from-gray-700 to-gray-900 rounded hover:brightness-110 active:brightness-125"
					type="button"
					onClick={() => setChangeColor(!changeColor)}
				>
					<p
						className={`bg-gradient-to-br ${changeColor ? "from-purple-500 to-cyan-400" : "from-cyan-400 to-purple-500"} bg-clip-text font-bold text-transparent`}
					>
						Click-me !
					</p>
				</button>
			</div>

	);
}

export default NeonButton;
