import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/MNavrBar";
// import ServicesSection from "./components/Offering";
import Portfolio from "./components/Portfolio";
import TechnologiesSection from "./components/TechnologiesSection";
import Testimonials from "./components/Testinomials";
import ServicesSection from "./components/WhatDoIOffer";
import WorkNumbers from "./components/WorkNumbers";

function App() {
  return (
    // <div className="min-h-screen bg-black text-white">
    //   <Hero />
    // </div>
    <>
      <Navbar />
      <Portfolio />
      <WorkNumbers />
      <ServicesSection />
      <TechnologiesSection />
      <Testimonials />
      <Footer />
    </>
  );
}

export default App;
