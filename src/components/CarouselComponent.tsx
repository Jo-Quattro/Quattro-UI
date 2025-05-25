import SocialFanAnimated from "../components/SocialFanAnimated";
import BrokenLogo from "./BrokenLogo";
import Card from "./Card";
import GlitchEffect from "./GlitchEffect";
import NeonButton from "./NeonButton";

const components = [
	<SocialFanAnimated key={1} />,
	<BrokenLogo key={2} />,
	<NeonButton key={3} />,
	<GlitchEffect key={4} />,
];

function CarouselComponent() {
	return (
		<section className="flex justify-center overflow-x-scroll border-y-1 border-gray-700 bg-gray-950 h-50 w-full gap-3 items-center">
			{[...components].map((component) => (
				<Card key={component.key}>{component}</Card>
			))}
		</section>
	);
}

export default CarouselComponent;
