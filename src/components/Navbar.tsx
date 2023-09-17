import React from "react";

const Navbar = () => {
  const [active, setActive] = React.useState(`translate-x-[0%]`);

  const handleClick = (index: number) => {
    if (index === 1) setActive(`translate-x-[0%]`);
    else if (index === 2) setActive(`translate-x-[100%]`);
    else if (index === 3) setActive(`translate-x-[200%]`);
    else if (index === 4) setActive(`translate-x-[300%]`);
    else if (index === 5) setActive(`translate-x-[400%]`);
  };

  return (
    <div className="glass p-2  border-b-[#ffffff99] relative border-b-[1px] border-t-[#ffffff40] border-l-0">
      <div
        className={`bg-[#ffffff30] absolute w-20 md:w-32 h-8 rounded-full left-2 ${active} transition-all duration-200 ease-in-out`}
      ></div>
      <button
        className={`text-white font-bold rounded-full px-10 w-16 sm:w-20 md:w-32 flex py-1 justify-center `}
        onClick={() => handleClick(1)}
      >
        Home
      </button>
      <button
        className={`text-white font-bold rounded-full px-10 w-16 sm:w-20 md:w-32 flex py-1 justify-center `}
        onClick={() => handleClick(2)}
      >
        About
      </button>
      <button
        className={`text-white font-bold rounded-full px-10 w-16 sm:w-20 md:w-32 flex py-1 justify-center `}
        onClick={() => handleClick(3)}
      >
        Projects
      </button>
      <button
        className={`text-white font-bold rounded-full px-10  w-16 sm:w-20 md:w-32 flex py-1 justify-center `}
        onClick={() => handleClick(4)}
      >
        Skills
      </button>
      <button
        className={`text-white font-bold rounded-full px-10 w-16 sm:w-20 md:w-32 flex py-1 justify-center `}
        onClick={() => handleClick(5)}
      >
        Contact
      </button>
    </div>
  );
};

export default Navbar;
