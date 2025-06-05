import { Outlet } from "react-router";
import "./index.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
	return (
		<>
		<body className="bg-gray-950">
			<header className="sticky top-0 z-1">
				<Header />
			</header>
			<main>
				<Outlet />
			</main>
			<footer>
				<Footer />
			</footer></body>
		</>
	);
}
export default App;
