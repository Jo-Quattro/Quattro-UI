function Header() {
  return (
    <section
      className=" flex flex-col items-center justify-center backdrop-blur-lg z-10 h-30   bg-size-[300%]  bg-linear-to-br/hsl from-gray-950 to-gray-200 
		bg-clip-text text-transparent animate-[gradient-text_3s_1_alternate]
		bg-right border-b-[.1px] border-white mask-l-from-80% mask-r-from-80% border-y-white"
    >
      <h1 className=" text-[3.5rem]">Quattro-UI</h1>
      <h2 className="text-3">The art of interface design.</h2>
    </section>
  );
}

export default Header;
