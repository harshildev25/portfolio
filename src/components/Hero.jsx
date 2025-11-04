import React from "react";

const Hero = () => {
  return (
    <section
      className="relative bg-[#0d0d0d] text-white overflow-hidden min-h-screen"
      style={{
        backgroundImage: "url('https://zelio-html-demo.vercel.app/assets/imgs/hero/hero-1/background.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/80"></div>

      <div className="relative container mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20 flex flex-col-reverse md:flex-row items-center justify-between min-h-screen">
        
        {/* Left Content */}
        <div className="w-full md:w-1/2 mt-8 md:mt-0 z-10">
          <p className="text-xs sm:text-sm text-gray-300 mb-3 flex items-center gap-2">
            <span className="text-base sm:text-lg">👋</span> Hi there, I'm <span className="font-medium text-white">William</span>
          </p>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Building Scalable, User-Centric <span className="block text-[#8b5cf6]">Web Solutions for the Modern Web</span>
          </h1>

          <p className="text-gray-400 mt-4 sm:mt-6 text-sm sm:text-base md:text-lg max-w-md">
                           I develop end-to-end web solutions that combine intuitive frontends and efficient backends turning user needs into engaging, high-performing digital experiences.

          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-6 sm:mt-8">
<button 
  onClick={() => {
    const link = document.createElement('a');
    link.href = '/Harshil_Dev_Resume.pdf';
    link.download = 'Harshil_Dev_Resume.pdf';
    link.click();
  }}
  className="bg-[#8b5cf6] hover:bg-[#7c3aed] text-white font-medium px-6 py-3 rounded-lg flex items-center justify-center gap-2 transition text-sm sm:text-base shadow-lg hover:shadow-2xl hover:shadow-purple-500/50"
>
  Download CV 
  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V4" />
  </svg>
</button>

           
          </div>

          <p className="text-gray-500 text-xs sm:text-sm mt-4 sm:mt-6">4 years specializing in full-stack development and performance-driven design.</p>
        </div>

        {/* Right Image - FIXED FOR MOBILE */}
        <div className="w-full md:w-1/2 relative flex justify-center items-center z-10 mb-8 md:mb-0 h-[300px] sm:h-[400px] md:h-auto">
          
          {/* Violet Shape - Responsive positioning */}
          <img
            src="https://zelio-html-demo.vercel.app/assets/imgs/hero/hero-1/decorate.png"
            alt="violet shape"
            className="absolute w-[240px] sm:w-[320px] md:w-[400px] lg:w-[500px] right-1/2 translate-x-1/2 md:right-0 md:translate-x-0 md:right-10 top-1/2 -translate-y-1/2"
          />

          {/* Man Image - Centered on mobile, responsive sizing */}
          <img
            src="https://zelio-html-demo.vercel.app/assets/imgs/hero/hero-1/man.png"
            alt="man"
            className="relative w-[200px] sm:w-[260px] md:w-[320px] lg:w-[420px] object-contain z-10"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
