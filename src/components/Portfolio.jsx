import React, { useState } from "react";
import {
  Menu,
  X,
  Facebook,
  Twitter,
  Linkedin,
  Github,
  Download,
  ArrowRight,
  Sun,
} from "lucide-react";

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    "Home",
    "Services",
    "Portfolio",
    "Pages",
    "Blog",
    "Contact",
  ];

  const designTools = [
    { name: "Figma", color: "#F24E1E", icon: "●●●" },
    { name: "Xd", color: "#FF61F6", icon: "Xd" },
    { name: "Ai", color: "#FF9A00", icon: "Ai" },
    { name: "Ps", color: "#31A8FF", icon: "Ps" },
    { name: "Sketch", color: "#FDB300", icon: "◆" },
    { name: "Word", color: "#2B579A", icon: "W" },
  ];

  return (
    <>
      <div className="min-h-screen bg-[#1d1c1c] text-white relative overflow-hidden">
        <style>{`
        @keyframes rotate-clockwise {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .rotate-animation {
          animation: rotate-clockwise 20s linear infinite;
        }
      `}</style>
        {/* Background Grid with Dark Filter */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "url(https://zelio-html-demo.vercel.app/assets/imgs/hero/hero-1/background.png)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "invert(1) contrast(2) brightness(0.8)",
            opacity: 0.25,
            mixBlendMode: "screen",
          }}
        />

        {/* Purple Blob Decoration - Fixed Position */}
       
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-20 left-0 right-0 bg-[#1a1a1a] z-40 py-6 px-6 mx-4 rounded-lg">
            {navItems.map((item) => (
              <a
                key={item}
                href="#"
                className="block py-3 text-gray-300 hover:text-white transition-colors"
              >
                {item}
              </a>
            ))}
            <div className="flex gap-4 mt-4 pt-4 border-t border-gray-700">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Facebook size={18} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Twitter size={18} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Github size={18} />
              </a>
            </div>
          </div>
        )}

        {/* Hero Section */}
        <div className="relative z-20 px-6 lg:px-16 pt-16 lg:pt-24 pb-20">
          <div className="max-w-8xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative">
            {/* Left Content */}
            <div className="space-y-1 ml-15">
              <div className="flex items-center gap-2 text-sm">
                <span className="text-2xl">👋</span>
                <span className="text-gray-400">Hi there, I'm William</span>
              </div>

              <div className="space-y-1">
                <h1 className="text-5xl lg:text-[72px] font-[600]  leading-tight tracking-tight">
                  Crafting Intuitive
                </h1>
                <h1 className="text-5xl lg:text-[72px] font-[600] leading-tight tracking-tight bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
                  Digital Experiences
                </h1>
              </div>

              <div className="my-4">
                <p className="text-gray-400 text-sm leading-relaxed max-w-xl">
                  I assist individuals and brands in achieving their objectives
                  by creating and developing user-focused digital products and
                  interactive experiences.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4 pt-4">
                <button className="group bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-500 hover:to-purple-400 px-8 py-4 rounded-full font-medium transition-all flex items-center gap-3 shadow-lg shadow-purple-500/30">
                  Download CV
                  <Download
                    size={18}
                    className="group-hover:translate-y-0.5 transition-transform"
                  />
                </button>
                <button className="group border-2 border-purple-500/50 hover:border-purple-500 px-8 py-4 rounded-full font-medium transition-all flex items-center gap-3 hover:bg-purple-500/10">
                  Hire me
                  <ArrowRight
                    size={18}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </button>
              </div>

              {/* Years of Experience & Tools */}
              <div className="pt-8 space-y-6">
                <p className="text-gray-500 text-sm">
                  + 12 years with professional design software
                </p>

                <div className="flex flex-wrap gap-4">
                  {designTools.map((tool) => (
                    <div
                      key={tool.name}
                      className="w-12 h-12 rounded-lg flex items-center justify-center font-bold text-sm transition-transform hover:scale-110 cursor-pointer"
                      style={{
                        backgroundColor: `${tool.color}20`,
                        border: `2px solid ${tool.color}40`,
                      }}
                    >
                      <span style={{ color: tool.color }}>{tool.icon}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Content - Image */}
            <div className=" xl:block hidden">
              <img
                src="src\assets\image-5-removebg-preview.png"
                alt="William"
                className="absolute z-30 w-full max-w-lg ml-auto object-contain right-25 top-0"
                style={{
                  filter:
                    "grayscale(100%) contrast(1.1) brightness(0.9) drop-shadow(0 25px 50px rgba(0, 0, 0, 0.5))",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
