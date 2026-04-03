import { Suspense, useMemo, useState } from "react";
import "./App.css";
import Banner from "./components/Banner/Banner";
import Footer from "./components/Footer/Footer";
import ModelContainer from "./components/ModelContainer/ModelContainer";
import Navbar from "./components/Navbar/Navbar";
import { ToastContainer } from "react-toastify";

const fetchModel = async () => {
  const res = await fetch("/model.json");
  return res.json();
};

function App() {
  const modelPromise = useMemo(() => fetchModel(), []);

  const [cart, setCart] = useState([]);
  return (
    <>
      <Navbar cart={cart} />
      <Banner />
      <Suspense
        fallback={
          <div className="flex items-center justify-center mt-10">
            <span className="loading loading-spinner loading-xl"></span>
          </div>
        }
      >
        <ModelContainer
          modelPromise={modelPromise}
          cart={cart}
          setCart={setCart}
        />
      </Suspense>

      <Footer />
      {/* React-Toastify */}
      <ToastContainer />
    </>
  );
}

export default App;
