import { ArrowRight } from "lucide-react";

export default function ServicesSection() {
  // const [hoveredIndex, setHoveredIndex] = useState(null);

  const services = [
    {
      number: "01",
      title: "UI/UX Design",
      description:
        "Designing visually stunning and user-friendly interfaces for web and mobile applications.",
      gradient: "from-purple-600 via-purple-500 to-indigo-500",
    },
    {
      number: "02",
      title: "Mobile App Design",
      description:
        "Designing intuitive and engaging mobile applications for both iOS and Android platforms.",
      gradient: "from-gray-800 to-gray-900",
    },
    {
      number: "03",
      title: "Brand Identity Design",
      description:
        "Developing cohesive brand identities that resonates with your target audience.",
      gradient: "from-gray-800 to-gray-900",
    },
    {
      number: "04",
      title: "Web Development",
      description:
        "Crafting responsive and engaging websites that align with your brand and business goals.",
      gradient: "from-gray-800 to-gray-900",
    },
  ];

  return (
    <div className="min-h-screen bg-[#1e1f25] text-white px-4 py-16 md:px-8 lg:px-16 pt-[115px]">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12 gap-6">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#6f4ff2] mb-4">
              What do I offer?
            </h1>
            <p className="text-gray-400 text-base md:text-lg max-w-xl">
              My journey started with a fascination for design and technology,
              <br className="hidden md:block" />
              leading me to specialize in UI/UX design
            </p>
          </div>
          <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg flex items-center gap-2 transition-all duration-300 self-start md:self-auto">
            Get a Quote
            <ArrowRight size={20} />
          </button>
        </div>

        {/* Services Grid */}
        <div className="space-y-4">
          {services.map((service, index) => {
            return (
              <>
                <div>
                  <hr className="opacity-10" />
                  <div
                    key={index}
                    className={`relative rounded-lg p-2 overflow-hidden hover:bg-[#6f4ff2] group `}
                    // onMouseEnter={() => setHoveredIndex(index)}
                    // onMouseLeave={() => setHoveredIndex(null)}
                  >
                    <div className="relative p-6 md:p-8 lg:p-1">
                      {/* Phone Image for Mobile App Design */}
                      {/* {index === 1 && (
                  <div className="absolute right-8 top-1/2 -translate-y-1/2 w-48 h-64 opacity-30 md:opacity-20 pointer-events-none">
                    <div className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-900 rounded-3xl shadow-2xl transform rotate-12"></div>
                  </div>
                )} */}

                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 relative z-10">
                        <div className="flex-1 space-y-2">
                          <h2 className="text-2xl lg:text-3xl font-[500] mb-2">
                            {service.number}. {service.title}
                          </h2>
                          <p
                            className={`text-gray-500  text-[10px] md:text-base lg:text-lg group-hover:text-white `}
                          >
                            {service.description}
                          </p>
                        </div>
                        {/* 
                  <div className={``}>
                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-full border-2 border-white flex items-center justify-center">
                      <ArrowRight size={24} />
                    </div>
                  </div> */}
                      </div>

                      {/* Hover Gradient Overlay */}
                      <div
                        className={`absolute inset-0 bg-gradient-to-r`}
                        style={{ zIndex: 0 }}
                      />

                      {/* Content overlay to stay on top */}
                      {/* <div
                  className="absolute inset-0 p-6 md:p-8 lg:p-10 flex flex-col md:flex-row md:items-center md:justify-between gap-4"
                  style={{ zIndex: 1 }}
                >
                  <div className="flex-1">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2">
                      {service.number}. {service.title}
                    </h2>
                    <p className="text-gray-200 text-sm md:text-base lg:text-lg">
                      {service.description}
                    </p>
                  </div>

                  <div
                    className={`transition-all duration-300 ${
                      hoveredIndex === index
                        ? "scale-110 rotate-45"
                        : "scale-100 rotate-0"
                    }`}
                  >
                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-full border-2 border-white flex items-center justify-center">
                      <ArrowRight size={24} />
                    </div>
                  </div>
                </div> */}
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
}
