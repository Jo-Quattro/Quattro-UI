import { Outlet } from "react-router";
import "./index.css";
import Header from "./components/small/Header";
import Footer from "./components/Footer";

function App() {
	return (
		<>
			<header>
				<Header />
			</header>
			<main>
				<Outlet />
			</main>
			<footer>
				<Footer />
			</footer>
		</>
	);
}

export default App;
