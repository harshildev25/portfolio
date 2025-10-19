const WorkNumbers = () => {
  return (
    <div className="bg-[#272730] text-white">
      <div className="flex flex-wrap sm:flex-row font-sans justify-around py-16 ml-10">
        <div className="flex w-[300px] items-center  gap-2">
          <div className="text-[64px] text-[rgb(127,23,207)]">+</div>
          <div className="text-[64px]">12</div>
          <div className="text-[19px] font-[500] mt-2 flex flex-col">
            <span className="text-gray-400">Year of</span>
            <span>Experience</span>
          </div>
        </div>
        <div className="flex w-[300px] items-center gap-2">
          <div className="text-[64px] text-[rgb(127,23,207)]">+</div>
          <div className="text-[64px]">250</div>
          <div className="text-[19px] font-[500] mt-2 flex flex-col">
            <span className="text-gray-400">Projects</span>
            <span>Completed</span>
          </div>
        </div>
        <div className="flex w-[300px] items-center gap-2">
          <div className="text-[64px] text-[rgb(127,23,207)]">+</div>
          <div className="text-[64px]">68</div>
          <div className="text-[19px] font-[500] mt-2 flex flex-col">
            <span className="text-gray-400">Satisfied</span>
            <span>Happy Clients</span>
          </div>
        </div>
        <div className="flex w-[300px] items-center gap-2">
          <div className="text-[64px] text-[rgb(127,23,207)]">+</div>
          <div className="text-[64px]">18</div>
          <div className="text-[19px] font-[500] mt-2 flex flex-col">
            <span>Awards</span>
            <span>Won Received</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkNumbers;

// bg ---> ##272730
// + icon color ---<>     --bs-primary-rgb: 110, 78, 242;
