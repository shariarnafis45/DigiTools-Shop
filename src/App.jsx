import { Suspense, useState } from "react";
import "./App.css";
import GetStart from "./components/GetStart";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import Pricing from "./components/Pricing";
import Stats from "./components/Stats";
import Cta from "./components/Cta";
import Footer from "./components/Footer";
import ProductsContainer from "./components/ProductsContainer";
import { ToastContainer } from "react-toastify";

const pricingPromise = async () => {
  const res = await fetch("/pricing.json");
  return res.json();
};
const productsDataPromise = async () => {
  const res = await fetch("/productData.json");
  return res.json();
};
const pricingDataPromise = pricingPromise();
const productsPromise = productsDataPromise();

function App() {
  const [cartProducts, setCartProduct] = useState([]);
  return (
    <>
      <header>
        <NavBar cartProducts={cartProducts}/>
        <Hero />
      </header>
      <main>
        <Stats />
        <Suspense fallback={<p></p>}>
          <ProductsContainer
            setCartProduct={setCartProduct}
            setCartProduct={setCartProduct}
            cartProducts={cartProducts}
            productsPromise={productsPromise}
          />
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

      <ToastContainer />
    </>
  );
}

export default App;
