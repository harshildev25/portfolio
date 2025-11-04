import { Mail, Github, Linkedin } from "lucide-react";
import { useState } from "react";

export default function GetInTouch() {
  const [showAlert, setShowAlert] = useState(false);

  const contactInfo = [
    {
      id: 1,
      icon: () => (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
      label: "X (Twitter)",
      value: "@Harshildev25",
      link: "https://x.com/Harshildev25",
    },
    {
      id: 2,
      icon: Github,
      label: "GitHub",
      value: "github.com/harshildev25",
      link: "https://github.com/harshildev25",
    },
    {
      id: 3,
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/harshildev25",
      link: "https://www.linkedin.com/in/harshildev25/",
    }
  ];

  const handleEmailClick = () => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    
    if (isMobile) {
      // Mobile: Open Gmail
      window.location.href = "mailto:harshildev25@gmail.com?subject=Hello&body=Hi Harshil";
    } else {
      // Desktop: Show toast and copy
      navigator.clipboard.writeText("harshildev25@gmail.com");
      setShowAlert(true);
      setTimeout(() => setShowAlert(false), 3000);
    }
  };

  return (
    <div id="contact" className="min-h-screen bg-[#262630] text-white px-4 py-16 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#8b5cf6] mb-4">
            Get In Touch
          </h1>
          <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto">
            Have a project in mind or just want to say hello? 
            <br className="hidden md:block" />
            Feel free to reach out through any of these channels.
          </p>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {contactInfo.map((contact) => {
            const IconComponent = contact.icon;
            
            return (
              <a
                key={contact.id}
                href={contact.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-[#2a2a2a] hover:bg-[#8b5cf6] rounded-2xl p-6 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/30"
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-[#8b5cf6]/20 group-hover:bg-white/20 flex items-center justify-center transition-all duration-300">
                    <IconComponent className="text-[#8b5cf6] group-hover:text-white transition-colors duration-300" size={28} />
                  </div>

                  <h3 className="text-lg font-semibold text-white">
                    {contact.label}
                  </h3>

                  <p className="text-gray-400 group-hover:text-white text-sm break-all transition-colors duration-300">
                    {contact.value}
                  </p>

                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </div>
                </div>
              </a>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-2xl p-8 md:p-12 border border-purple-500/30">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Let's Build Something Amazing Together
          </h2>
          <p className="text-gray-400 mb-6 max-w-xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
        <button
  onClick={handleEmailClick}
  className="inline-flex items-center gap-2 bg-[#795bf6] hover:bg-[#8b5cf6] text-white font-medium px-8 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-purple-500/50 hover:scale-105 cursor-pointer"
>
  <Mail size={20} />
  Send Me an Email
</button>

        </div>

        {/* Custom Toast Alert - Only on Desktop */}
        {showAlert && (
          <div className="fixed bottom-8 right-8 bg-gradient-to-r from-purple-600 to-purple-500 text-white px-6 py-4 rounded-full shadow-2xl shadow-purple-500/50 flex items-center gap-3 animate-bounce max-w-sm">
            <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>Email copied to clipboard!</span>
          </div>
        )}
      </div>
    </div>
  );
}
