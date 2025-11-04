import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#1f1e25] text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="flex flex-col items-center space-y-8">
          
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="flex space-x-1">
             <img
                    src="https://zelio-html-demo.vercel.app/assets/imgs/template/favicon.svg"
                    alt="William"
                    className="relative z-30 w-full max-w-lg ml-auto object-contain"
                    style={{
                      filter:
                        "grayscale(100%) contrast(1.1) brightness(0.9) drop-shadow(0 25px 50px rgba(0, 0, 0, 0.5))",
                    }}
                  />
            </div>
            <h2 className="text-2xl font-semibold">Harshil Dev</h2>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-wrap justify-center items-center gap-8 text-white">
            <a href="#home" className="hover:text-white transition-colors duration-200">
              Home
            </a>
            <a href="#services" className="hover:text-white transition-colors duration-200">
              Services
            </a>
            <a href="#portfolio" className="hover:text-white transition-colors duration-200">
              Portfolio
            </a>
            
           
            <a href="#contact" className="hover:text-white transition-colors duration-200">
              Contact
            </a>
          </nav>

          {/* Copyright */}
          <div className="text-white text-sm text-center pt-8 border-t border-gray-700 w-full">
            <p>
              © 2024 All Rights Reserved by{' '}
              <a href="#" className="text-[#6f4ef3] hover:text-purple-300 transition-colors duration-200">
                Harshildev25
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
     
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 bg-[#795bf6] hover:bg-[#8b5cf6] text-white p-4 rounded-lg shadow-lg hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-200 hover:scale-110"
        aria-label="Scroll to top"
      >
       
       
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 10l7-7m0 0l7 7m-7-7v18"
          />
        </svg>
      </button>
    </footer>
  );
};

export default Footer;
