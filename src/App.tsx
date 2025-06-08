import { Outlet } from "react-router";
import "./index.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-neutral-950 text-neutral-200 h-[100%]">
      <header className="sticky top-0 z-1">
        <Header />
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
export default App;
