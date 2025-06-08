import CarouselComponent from "../components/CarouselComponent";
/* import InvertedCarouselComponent from "../components/InvertedCarouselComponent"; */

function Home() {
  return (
    <section className="flex flex-col items-center justify-center text-center text-white overflow-hidden my-10">
      <section className="flex flex-col gap-6 w-[50%] my-10">
        <h2>Built to learn. Shared to inspire.</h2>
        <h3>
          A growing collection of UI components and tutorials — reusable,
          adaptable, and open to all.
        </h3>

        <p>
          Quattro-UI is my personal space to learn by doing, and to share
          everything I build along the way. Each component has been carefully
          recreated from tutorials, videos, or real-world examples, then adapted
          with a focus on reusability and simplicity. Whether you’re just
          starting out or looking for a clean starting point for your own
          designs, these components are meant to be practical and easy to
          integrate.{" "}
        </p>
        <p>
          I’m still learning — and I probably make mistakes. But this project is
          open: open to improvements, open to inspiration, and open to anyone
          who wants to contribute or borrow. If you see something worth
          enhancing, feel free to suggest changes or share your own versions.
          Wherever possible, I credit the original creators who inspired me.
          Quattro-UI isn’t about reinventing the wheel — it’s about making good
          ideas more usable, together.
        </p>
      </section>
      <section className="flex flex-col gap-5">
        <CarouselComponent />
        {/*  <InvertedCarouselComponent /> */}
      </section>
    </section>
  );
}

export default Home;
