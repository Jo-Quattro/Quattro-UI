import { Outlet } from "react-router";
import "./index.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
	return (
		<>
			<header className="h-30 bg-blue-500">
				<Header />
			</header>
			<main className="bg-black h-500">
				<Outlet />
			</main>
			<footer className="h-30 bg-red-500">
				<Footer />
			</footer>
		</>
	);
}

export default App;
