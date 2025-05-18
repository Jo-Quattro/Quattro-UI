type CarouselProps = {
	children: React.ReactNode;
};

const CarouselComponent = ({ children }: CarouselProps) => {
	return (
		<div className="flex overflow-x-auto gap-4 snap-x snap-mandatory scroll-smooth">
			{children}
		</div>
	);
};

export default CarouselComponent;
