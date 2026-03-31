import "./App.css";
import GetStart from "./components/GetStart";
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
        <GetStart/>
      </main>
    </>
  );
}

export default App;
