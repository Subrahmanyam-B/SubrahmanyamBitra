import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="bg-[#dad7cd] min-h-screen p-5">
      <div className="flex justify-between px-10 pt-5 items-center relative z-10">
        <button className="w-20 h-20 glass hover:bg-white rounded-full flex justify-center items-center shadow-lg cursor-pointer">
          <Image src="/assets/logo.svg" width={100} height={100} alt="logo" />
        </button>
        <div className="glass py-6 px-8 max-h-10 rounded-xl text-white text-xl font-semibold ">
          Contact Me
        </div>
      </div>
      <div className="p-10 -translate-y-32 relative ">
        <Image
          src={"/assets/hero.svg"}
          alt="hero"
          width={1000}
          height={1000}
          className="h-[40rem] 2xl:h-[55rem] 3xl:h-[60rem] -translate-x-8 w-auto mx-auto"
        />
        <div className="glass text-white absolute top-[27%] right-[55%] px-6 py-5 rounded-2xl flex-col items-start">
          <div className="text-base pl-1">I&apos;m</div>
          <div className="text-3xl font-semibold">Subrahmanyam</div>
        </div>
        <div className="glass text-white absolute top-[44%] right-[18%] px-5 py-4 rounded-2xl flex-col items-start">
          <div className="text-2xl font-semibold">FullStack Developer</div>
        </div>
        <div className="glass text-white absolute top-[60%] right-[65%] px-5 py-4 rounded-2xl flex-col items-start">
          <div className="text-2xl font-semibold">UI/UX Designer</div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
