import { Outlet } from "react-router";
import "./index.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <section className="bg-neutral-900 text-white">
        <header className="sticky w-full top-0 backdrop-blur-md z-100">
          <Header />
        </header>
        <main className="h-full">
          <Outlet />
        </main>
        <footer className="z-100">
          <Footer />
        </footer>
      </section>
    </>
  );
}
export default App;
