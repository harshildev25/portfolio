import React from 'react';

const ResumeDetails = () => {
  return (
    <section id="resume" className="bg-[#262731] text-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-[#6e4ef2] mb-2">My Resume</h2>
        <p className="text-neutral-300 mb-12 max-w-2xl">
          I believe that working hard and trying to learn every day will make me improve in satisfying my customers.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Education Column */}
          <div>
            <h3 className="text-xl font-semibold text-white border-l-4 border-[#7d60f9] pl-3 mb-6">🎓 Education</h3>
            
            <div className="space-y-6">
              <div className="bg-[#1a1a1a] border border-[#2e2e2e] p-5 rounded-lg relative">
                <h4 className="text-sm text-[#7252f3]">2021 - 2025</h4>
                <p className="text-#ffffff font-semibold">Bachelor of Engineering in Information Technology </p>
                <p className="text-[#828b8b]">Gujarat Technological University, India</p>
              
              </div>

      
            </div>
          </div>

          {/* Experience Column */}
          <div>
            <h3 className="text-xl font-semibold text-white border-l-4 border-[#7d60f9] pl-3 mb-6">💼 Experience</h3>
            
            <div className="space-y-6">
              <div className="bg-[#1a1a1a] border border-[#2e2e2e] p-5 rounded-lg">
                <h4 className="text-sm text-[#7252f3]">2025</h4>
                <p className="text-[#ffffff] font-semibold">Cygnet.one </p>
                <p className="text-[#828b8b]">Software Engineer</p>
              </div>

              <div className="bg-[#1a1a1a] border border-[#2e2e2e] p-5 rounded-lg">
                <h4 className="text-sm text-[#7252f3]">2024 - 2025</h4>
                <p className="text-[#ffffff] font-semibold">Vnurture technologies</p>
                <p className="text-[#828b8b]">Software Engineer </p>
              </div>

              <div className="bg-[#1a1a1a] border border-[#2e2e2e] p-5 rounded-lg">
                <h4 className="text-sm text-[#7252f3]">2022 - 2024</h4>
                <p className="text-[#ffffff] font-semibold">BrainyBeam Technologies</p>
                <p className="text-[#828b8b]">Software Engineer </p>
              </div>

              <div className="bg-[#1a1a1a] border border-[#2e2e2e] p-5 rounded-lg">
                <h4 className="text-sm text-[#7252f3]">2021 - 2022</h4>
                <p className="text-[#ffffff] font-semibold">InfoLabz</p>
                <p className="text-[#828b8b]">Jr. Software Engineer </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumeDetails;