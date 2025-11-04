import { useState, useRef, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "Skills", href: "#portfolio" },
    { name: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    { href: "https://x.com/Harshildev25", label: "Twitter", path: "M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" },
    { href: "https://www.linkedin.com/in/harshildev25/", label: "LinkedIn", path: "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" },
    { href: "https://github.com/harshildev25", label: "GitHub", path: "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" }
  ];

  // Close menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    // Only add listener when menu is open
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }
  }, [isOpen]);

  return (
    <nav className="bg-[#272730] sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Mobile Menu Button */}
          <button onClick={() => setIsOpen(!isOpen)} className="max-[868px]:block hidden text-gray-300 p-2" aria-label="Menu">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img src="https://zelio-html-demo.vercel.app/assets/imgs/template/favicon.svg" alt="William" className="hidden lg:block" style={{ filter: "grayscale(100%) contrast(1.1) brightness(0.9) drop-shadow(0 25px 50px rgba(0, 0, 0, 0.5))" }} />
            <span className="text-base sm:text-xl md:text-2xl font-light text-white">
              <span className="max-[868px]:inline hidden">Harshil Dev</span>
              <span className="min-[869px]:inline hidden">Harshil Dev's Portifolio</span>
            </span>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden min-[869px]:flex space-x-6 lg:space-x-8">
            {navLinks.map(link => (
              <a key={link.name} href={link.href} className={`text-sm font-medium ${link.name === "Home" ? "text-white" : "text-gray-400 hover:text-white"}`}>
                {link.name}
              </a>
            ))}
          </div>

          {/* Social Icons */}
          <div className="flex items-center space-x-3">
            {socialLinks.map(social => (
              <a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer" className="hidden min-[869px]:block text-gray-400 hover:text-white" aria-label={social.label}>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d={social.path} /></svg>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div ref={menuRef}>
        {isOpen && (
          <div className="max-[868px]:block hidden bg-[#363b4e] border-t border-gray-700">
            <div className="px-4 py-3 space-y-1">
              {navLinks.map(link => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-3 rounded-md ${link.name === "Home" ? "text-white bg-[#2d3142]" : "text-gray-400 hover:text-white hover:bg-[#2d3142]"}`}
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4 border-t border-gray-700">
                <p className="text-xs text-gray-500 mb-3 px-3">Connect with me</p>
                <div className="flex justify-around">
                  {socialLinks.map(social => (
                    <a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white p-3" aria-label={social.label}>
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d={social.path} /></svg>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
