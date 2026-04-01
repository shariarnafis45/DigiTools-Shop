import { Suspense } from "react";
import "./App.css";
import GetStart from "./components/GetStart";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import Pricing from "./components/Pricing";
import Stats from "./components/Stats";
import Cta from "./components/Cta";
import Footer from "./components/Footer";
import Products from "./components/ProductsContainer";

const pricingPromise = async () => {
  const res = await fetch("/public/pricing.json");
  return res.json();
};

const productsDataPromise = async () => {
  const res = await fetch("/public/productData.json");
  return res.json();
};
function App() {
  const pricingDataPromise = pricingPromise();
  const productsPromise = productsDataPromise();
  return (
    <>
      <header>
        <NavBar></NavBar>
        <Hero />
      </header>
      <main>
        <Stats />
        <Suspense fallback={<p></p>}>
          <Products productsPromise={productsPromise} />
        </Suspense>
        <GetStart />
        <Suspense fallback={<p></p>}>
          <Pricing pricingDataPromise={pricingDataPromise} />
        </Suspense>
        <Cta />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
