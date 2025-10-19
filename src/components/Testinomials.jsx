import React, { useState, useEffect } from 'react';

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const testimonials = [
    {
      id: 1,
      company: 'CRI',
      companyFull: 'CRI tech',
      rating: 5,
      text: '"Working with William was an absolute pleasure. His attention to detail and user-focused design approach significantly improved our product\'s usability."',
     
      name: 'John Doe',
      position: 'Head of Legal and Compliance, Tech Innovations'
    },
    {
      id: 2,
      company: 'Warner',
      companyFull: 'Warner AVERETT',
      rating: 5,
      text: '"The project exceeded all expectations. Professional communication and outstanding design quality made this collaboration seamless and productive."',
      
      name: 'Sarah Johnson',
      position: 'Product Manager, Warner Digital'
    },
    {
      id: 3,
      company: 'TechCorp',
      companyFull: 'TechCorp',
      rating: 5,
      text: '"Incredible attention to user experience! The redesign dramatically improved our conversion rates and customer satisfaction scores."',
      
      name: 'Michael Chen',
      position: 'CEO, TechCorp Solutions'
    },
    {
      id: 4,
      company: 'Innovate',
      companyFull: 'Innovate Labs',
      rating: 5,
      text: '"Outstanding creativity and technical expertise. Delivered a modern, responsive design that perfectly captured our brand vision."',
     
      name: 'Emily Rodriguez',
      position: 'Marketing Director, Innovate Labs'
    }
  ];

  // Check if mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Auto-slide on mobile only
  useEffect(() => {
    if (isMobile) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % testimonials.length);
      }, 3000);
      
      return () => clearInterval(interval);
    }
  }, [isMobile, testimonials.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section className="bg-[#262630] py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-[#6f4ef3] mb-3">
            Client's Testimonials
          </h2>
          <p className="text-gray-400 text-sm">
            I believe that working hard and trying to learn every day will make me<br className="hidden md:block" />
            improve in satisfying my customers.
          </p>
        </div>

        {/* Desktop View - Show all 4 cards in 2x2 grid */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div key={testimonial.id} className="bg-[#34343f] rounded-xl p-6 border border-gray-700">
              {/* Logo and Quote */}
              <div className="flex justify-between items-start mb-6">
                <div className="flex items-center gap-2">
                  {index === 0 && <span className="text-gray-500 text-lg">△</span>}
                  {index === 1 && <span className="text-gray-400 text-lg">W</span>}
                  {index === 2 && <span className="text-gray-400 text-lg">T</span>}
                  {index === 3 && <span className="text-gray-400 text-lg">I</span>}
                  <span className="text-gray-400 text-sm font-medium">
                    {testimonial.company} <span className="text-gray-600">{index === 0 ? 'tech' : ''}</span>
                  </span>
                  {index === 1 && <span className="text-gray-600 text-xs">AVERETT</span>}
                </div>
                <div className="text-gray-600 text-5xl leading-none">"</div>
              </div>

              {/* Star Rating */}
              <div className="flex gap-0.5 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-3.5 h-3.5 fill-[#6f4ef3]"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>

              {/* Testimonial Text */}
         <p className="text-white text-sm font-bold mb-6 leading-relaxed">
  {testimonial.text}
</p>


              {/* Author */}
              <div className="flex items-center gap-3">
              
                <div>
                  <h4 className="text-white font-medium text-sm">{testimonial.name}</h4>
                  <p className="text-white text-xs">{testimonial.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile View - Carousel with auto-slide */}
        <div className="lg:hidden">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={testimonial.id} className="min-w-full px-2">
                  <div className="bg-[#34343f] rounded-xl p-6 border border-gray-700">
                    {/* Logo and Quote */}
                    <div className="flex justify-between items-start mb-6">
                      <div className="flex items-center gap-2">
                        {index === 0 && <span className="text-gray-500 text-lg">△</span>}
                        {index === 1 && <span className="text-gray-400 text-lg">W</span>}
                        {index === 2 && <span className="text-gray-400 text-lg">T</span>}
                        {index === 3 && <span className="text-gray-400 text-lg">I</span>}
                        <span className="text-gray-400 text-sm font-medium">
                          {testimonial.company} <span className="text-gray-600">{index === 0 ? 'tech' : ''}</span>
                        </span>
                        {index === 1 && <span className="text-gray-600 text-xs">AVERETT</span>}
                      </div>
                      <div className="text-gray-600 text-5xl leading-none">"</div>
                    </div>

                    {/* Star Rating */}
                    <div className="flex gap-0.5 mb-6">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <svg
                          key={i}
                          className="w-3.5 h-3.5 fill-[#6f4ff2]"
                          viewBox="0 0 20 20"
                        >
                          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                        </svg>
                      ))}
                    </div>

                    {/* Testimonial Text */}
                    <p className="text-white text-sm font-bold mb-6 leading-relaxed">
  {testimonial.text}
</p>

                    {/* Author */}
                    <div className="flex items-center gap-3">
                    
                      <div>
                        <h4 className="text-white font-medium text-sm">{testimonial.name}</h4>
                        <p className="text-white text-xs">{testimonial.position}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Pagination Dots - Mobile Only */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  currentSlide === index
                    ? 'bg-[#6f4ff2] w-8'
                    : 'bg-gray-600 w-2'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
