import React, { useState } from "react";
import { Menu, X, Facebook, Twitter, Linkedin, Github, Download, ArrowRight } from "lucide-react";
import { FaNodeJs, FaReact, FaPython } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = ["Home", "Services", "Portfolio", "Pages", "Blog", "Contact"];

  const designTools = [
    { name: "Node.js", color: "#68A063", icon: <FaNodeJs /> },
  { name: "Next.js", color: "#000000", icon: <SiNextdotjs /> },
  { name: "Python", color: "#3776AB", icon: <FaPython /> },
  { name: "React.js", color: "#61DAFB", icon: <FaReact /> },
  ];

  return (
    <div id="home" className="min-h-screen bg-[#1d1c1c] text-white relative overflow-hidden">
      <style>{`
        @keyframes rotate-clockwise {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .rotate-animation {
          animation: rotate-clockwise 20s linear infinite;
        }
      `}</style>

      {/* Background Grid */}
      <div
        className="absolute inset-0 opacity-25"
        style={{
          backgroundImage: "url(https://zelio-html-demo.vercel.app/assets/imgs/hero/hero-1/background.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "invert(1) contrast(2) brightness(0.8)",
          mixBlendMode: "screen",
        }}
      />

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-20 left-0 right-0 bg-[#1a1a1a] z-40 py-6 px-6 mx-4 rounded-lg">
          {navItems.map((item) => (
            <a key={item} href="#" className="block py-3 text-gray-300 hover:text-white transition-colors">
              {item}
            </a>
          ))}
          <div className="flex gap-4 mt-4 pt-4 border-t border-gray-700">
            {[Facebook, Twitter, Linkedin, Github].map((Icon, i) => (
              <a key={i} href="#" className="text-gray-400 hover:text-white transition-colors">
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>
      )}

      {/* Hero Section */}
      <div className="relative z-20 px-6 lg:px-16 pt-16 lg:pt-24 pb-16 lg:pb-0">
        <div className="max-w-7xl mx-auto">
          
          {/* Mobile Layout - Vertical Stack */}
          <div className="lg:hidden flex flex-col items-center space-y-8">
            
            {/* Person Image + Rotating Shape (Mobile) */}
            <div className="relative w-full max-w-sm flex items-end justify-center overflow-hidden" style={{ minHeight: '450px' }}>
              {/* Rotating Purple Shape */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 pointer-events-none" style={{ width: '320px', height: '320px' }}>
                <div
                  className="rotate-animation w-full h-full"
                  style={{
                    backgroundImage: "url(https://zelio-html-demo.vercel.app/assets/imgs/hero/hero-1/decorate.png)",
                    backgroundSize: "contain",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    opacity: 0.7,
                  }}
                />
              </div>
              {/* Person Image */}
              <img
                src="src/assets/image-5-removebg-preview.png"
                alt="William"
                className="relative z-10 w-full max-w-[300px] object-contain object-bottom"
                style={{
                  filter: "grayscale(100%) contrast(1.1) brightness(0.9) drop-shadow(0 25px 50px rgba(0, 0, 0, 0.5))",
                  maxHeight: '450px',
                }}
              />
            </div>

            {/* Text Content (Mobile) */}
            <div className="space-y-4 text-center pb-8 w-full">
              <div className="flex items-center justify-center gap-2 text-sm">
                <span className="text-2xl">👋</span>
                <span className="text-gray-400">Hi there, I'm Harshil Dev</span>
              </div>

              <div className="space-y-1">
                <h1 className="text-4xl font-semibold leading-tight">Building Scalable, User-Centric</h1>
                <h1 className="text-4xl font-medium leading-tight bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
                 Web Solutions for the Modern Web
                </h1>
              </div>

              <p className="text-gray-400 text-sm leading-relaxed max-w-md mx-auto">
               I develop end-to-end web solutions that combine intuitive frontends and efficient backends turning user needs into engaging, high-performing digital experiences.
              </p>

            <div className="flex flex-col gap-3 pt-2">
  <button 
    onClick={() => {
      const link = document.createElement('a');
      link.href = 'src/assets/Harshil_Dev_Resume.pdf';
      link.download = 'Harshil_Dev_Resume.pdf';
      link.click();
    }}
    className="group bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-500 hover:to-purple-400 px-8 py-4 rounded-full font-medium transition-all flex items-center justify-center gap-3 shadow-lg shadow-purple-500/30"
  >
    Download CV
    <Download size={18} className="group-hover:translate-y-0.5 transition-transform" />
  </button>
</div>
              <div className="pt-4 space-y-4">
                <p className="text-gray-500 text-xs">+4 years specializing in full-stack development and performance-driven design.</p>
                <div className="flex flex-wrap justify-center gap-3">
                  {designTools.map((tool) => (
                    <div
                      key={tool.name}
                      className="w-11 h-11 rounded-lg flex items-center justify-center font-bold text-sm transition-transform hover:scale-110 cursor-pointer"
                      style={{
                        backgroundColor: `${tool.color}20`,
                        border: `2px solid ${tool.color}40`,
                        color: tool.color,
                      }}
                    >
                      {tool.icon}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Desktop Layout - Horizontal - FIXED SPIN VISIBILITY */}
          <div className="hidden lg:grid lg:grid-cols-2 gap-12 items-end">
            
            {/* Left Content */}
            <div className="space-y-6 pb-8">
              <div className="flex items-center gap-2 text-sm">
                <span className="text-2xl">👋</span>
                <span className="text-gray-400">Hi there, I'm Harshil Dev</span>
              </div>

              <div className="space-y-2">
                <h1 className="text-5xl lg:text-[62px] font-semibold leading-tight">
                  Building Scalable, User-Centric
                </h1>
                <h1 className="text-5xl lg:text-[62px] font-medium leading-tight bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
                 Web Solutions for the Modern Web
                </h1>
              </div>

              <p className="text-gray-400 text-base leading-relaxed max-w-xl">
                              I develop end-to-end web solutions that combine intuitive frontends and efficient backends turning user needs into engaging, high-performing digital experiences.

              </p>
<div className="flex gap-4 pt-2">
<a
  href="src/assets/Harshil_Dev_Resume.pdf"
  download="Harshil_Dev_Resume.pdf"
  className="group bg-[#795bf6] hover:bg-[#8b5cf6] px-8 py-4 rounded-full font-medium transition-all flex items-center gap-3 shadow-lg hover:shadow-2xl hover:shadow-purple-500/50 hover:scale-105 cursor-pointer"
>
  Download CV
  <Download size={18} className="group-hover:translate-y-0.5 transition-transform" />
</a>

</div>

              <div className="pt-4 space-y-6">
                <p className="text-gray-500 text-sm">+4 years specializing in full-stack development and performance-driven design.</p>
                <div className="flex flex-wrap gap-4">
                  {designTools.map((tool) => (
                    <div
                      key={tool.name}
                      className="w-12 h-12 rounded-lg flex items-center justify-center font-bold text-sm transition-transform hover:scale-110 cursor-pointer"
                      style={{
                        backgroundColor: `${tool.color}20`,
                        border: `2px solid ${tool.color}40`,
                        color: tool.color,
                      }}
                    >
                      {tool.icon}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Content - Person + Rotating Shape - VISIBLE SPIN */}
            <div className="relative h-full flex items-end justify-end" style={{ minHeight: '600px' }}>
              {/* Rotating Purple Shape - Larger and More Visible */}
              <div className="absolute bottom-0 right-[-50px] pointer-events-none">
                <div
                  className="rotate-animation"
                  style={{
                    width: '550px',
                    height: '550px',
                    backgroundImage: "url(https://zelio-html-demo.vercel.app/assets/imgs/hero/hero-1/decorate.png)",
                    backgroundSize: "contain",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    opacity: 0.9,
                  }}
                />
              </div>
              {/* Person Image */}
              <img
                src="src/assets/image-5-removebg-preview.png"
                alt="William"
                className="relative z-10 w-full max-w-[500px] h-auto object-contain"
                style={{
                  filter: "grayscale(100%) contrast(1.1) brightness(0.9) drop-shadow(0 25px 50px rgba(0, 0, 0, 0.5))",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
