import { Link } from "react-router";

function Header() {
  return (
    <section
      className=" flex flex-col items-center justify-center backdrop-blur-md h-30 bg-size-[150%]  bg-gradient-to-br from-neutral-950 to-neutral-200 
		bg-clip-text text-transparent animate-[gradient-text_3s_1_alternate]
		bg-right border-b-[.1px] mask-l-from-90% mask-r-from-90% border-y-white"
    >
      <Link to="./">
        <h1 className=" text-[3.5rem] font-semibold">Quattro-UI</h1>
      </Link>
    </section>
  );
}

export default Header;
