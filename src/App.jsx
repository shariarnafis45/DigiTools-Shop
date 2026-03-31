import { Suspense } from "react";
import "./App.css";
import GetStart from "./components/GetStart";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import Pricing from "./components/Pricing";
import Stats from "./components/Stats";

const pricingPromise = async () => {
  const res = await fetch("/public/pricing.json");
  return res.json();
};
function App() {
  const pricingDataPromise = pricingPromise();
  return (
    <>
      <header>
        <NavBar></NavBar>
        <Hero />
      </header>
      <main>
        <Stats />
        <GetStart />
        <Suspense fallback={<p>Loading..</p>}>
          <Pricing  pricingDataPromise={pricingDataPromise}/>
        </Suspense>
      </main>
    </>
  );
}

export default App;
