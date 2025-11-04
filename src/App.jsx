import Footer from "./components/Footer";
import GetInTouch from "./components/Getintouch";
import Hero from "./components/Hero";
import Navbar from "./components/MNavrBar";
// import ServicesSection from "./components/Offering";
import Portfolio from "./components/Portfolio";

import ResumeDetails from "./components/Resumedetails";
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
         <ResumeDetails/>
      <Testimonials />
     
      <GetInTouch/>
      <Footer />
    </>
  );
}

export default App;
