import CarouselComponent from "./CarouselComponent";
import SocialFanAnimated from "./socialFanAnimated";

function Header() {
	return (
		<CarouselComponent>
			<section className="flex flex-col justify-center items-center bg-gray-950 text-gray-300  border-b">
				<SocialFanAnimated />
			</section>
		</CarouselComponent>
	);
}

export default Header;
