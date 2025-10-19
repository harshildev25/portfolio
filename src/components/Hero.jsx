import React from "react";

const Hero = () => {
  return (
    <section
      className="relative bg-[#0d0d0d] text-white overflow-hidden"
      style={{
        backgroundImage:
          "url('https://zelio-html-demo.vercel.app/assets/imgs/hero/hero-1/background.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay to darken grid for black theme */}
      <div className="absolute inset-0 bg-black/80"></div>

      <div className="relative container mx-auto px-6 py-20 flex flex-col-reverse md:flex-row items-center justify-between">
        {/* Left Content */}
        <div className="w-full md:w-1/2 mt-10 md:mt-0 z-10">
          <p className="text-sm text-gray-300 mb-3 flex items-center gap-2">
            <span className="text-lg">👋</span> Hi there, I'm{" "}
            <span className="font-medium text-white">William</span>
          </p>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Crafting Intuitive{" "}
            <span className="block text-[#8b5cf6]">Digital Experiences</span>
          </h1>

          <p className="text-gray-400 mt-6 text-base md:text-lg max-w-md">
            I assist individuals and brands in achieving their objectives by
            creating and developing user-focused digital products and
            interactive experiences.
          </p>

          <div className="flex flex-wrap gap-4 mt-8">
            <a
              href="#"
              className="bg-[#8b5cf6] hover:bg-[#7c3aed] text-white font-medium px-6 py-3 rounded-lg flex items-center gap-2 transition"
            >
              Download CV{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V4"
                />
              </svg>
            </a>

            <a
              href="#"
              className="border border-gray-600 hover:border-[#8b5cf6] text-white font-medium px-6 py-3 rounded-lg flex items-center gap-2 transition"
            >
              Hire me{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </a>
          </div>

          <p className="text-gray-500 text-sm mt-6">
            +12 years with professional design software
          </p>
        </div>

        {/* Right Image */}
        <div className="w-full md:w-1/2 relative flex justify-center items-center z-10">
          {/* Violet Shape */}
          <img
            src="https://zelio-html-demo.vercel.app/assets/imgs/hero/hero-1/decorate.png"
            alt="violet shape"
            className="absolute w-[300px] md:w-[400px] lg:w-[500px] right-0 md:right-10 -z-10"
          />

          {/* Man Image */}
          <img
            src="https://zelio-html-demo.vercel.app/assets/imgs/hero/hero-1/man.png"
            alt="man"
            className="w-[250px] md:w-[350px] lg:w-[420px] object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
