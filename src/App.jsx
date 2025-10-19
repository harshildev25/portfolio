import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/MNavrBar";
import Portfolio from "./components/Portfolio";
import TechnologiesSection from "./components/TechnologiesSection";
import Testimonials from "./components/Testinomials";

function App() {
  return (
    // <div className="min-h-screen bg-black text-white">
    //   <Hero />
    // </div>
    <>
      <Navbar />
      <Portfolio />
      <TechnologiesSection/>
      <Testimonials/>
      <Footer/>
    </>
  );
}

export default App;
