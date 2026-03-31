import "./App.css";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import Stats from "./components/Stats";

function App() {
  return (
    <>
      <header>
        <NavBar></NavBar>
        <Hero/>
      </header>
      <main>
        <Stats/>
      </main>
    </>
  );
}

export default App;
