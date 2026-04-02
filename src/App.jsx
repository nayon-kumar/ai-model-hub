import "./App.css";
import Banner from "./components/Banner/Banner";
import Footer from "./components/Footer/Footer";
import ModelContainer from "./components/ModelContainer/ModelContainer";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <ModelContainer />
      <Footer />
    </>
  );
}

export default App;
