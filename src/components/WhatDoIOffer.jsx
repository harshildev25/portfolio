import { ArrowRight } from "lucide-react";

export default function ServicesSection() {
  const services = [
    {
      id: "01",
      number: "01",
      title: "Frontend Development",
      description:
        "Building fast, responsive, and dynamic interfaces using React.js, Next.js, Redux, and Tailwind CSS for seamless user experiences.",
      gradient: "from-purple-600 via-purple-500 to-indigo-500",
    },
    {
      id: "02",
      number: "02",
      title: "Backend Development",
      description:
        "Developing secure, scalable, and high-performance APIs with Node.js, Express.js, and Prisma ensuring smooth communication between systems.",
      gradient: "from-gray-800 to-gray-900",
    },
    {
      id: "03",
      number: "03",
      title: "Database & Architecture",
      description:
        "Designing efficient data structures and managing databases like PostgreSQL, MongoDB, Redis, ElasticSearch, and Firebase to ensure reliability and speed.",
      gradient: "from-gray-800 to-gray-900",
    },
    {
      id: "04",
      number: "04",
      title: "DevOps & Deployment",
      description:
        "Streamlining deployment with Docker, CI/CD pipelines, and serverless frameworks like Hono and Vercel delivering optimized and production-ready solutions.",
      gradient: "from-gray-800 to-gray-900",
    },
  ];

  return (
    <div id="services" className="min-h-screen bg-[#1e1f25] text-white px-4 py-16 md:px-8 lg:px-16 pt-[115px]">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12 gap-6">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#6f4ff2] mb-4">
              What do I offer?
            </h1>
            <p className="text-gray-400 text-base md:text-lg max-w-xl">
              What started as an interest in technology grew into a passion for 
              <br className="hidden md:block" />
            creating fast, scalable and user-focused web experiences with modern frameworks.
            </p>
          </div>
         
        </div>

        {/* Services Grid */}
        <div className="space-y-4">
          {services.map((service) => (
            <div key={service.id}>
              <hr className="opacity-10" />
              <div className="relative rounded-lg p-2 overflow-hidden hover:bg-[#6f4ff2] group">
                <div className="relative p-6 md:p-8 lg:p-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 relative z-10">
                    <div className="flex-1 space-y-2">
                      <h2 className="text-2xl lg:text-3xl font-[500] mb-2">
                        {service.number}. {service.title}
                      </h2>
                      <p className="text-gray-500 text-[10px] md:text-base lg:text-lg group-hover:text-white">
                        {service.description}
                      </p>
                    </div>
                  </div>

                  {/* Hover Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r" style={{ zIndex: 0 }} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
