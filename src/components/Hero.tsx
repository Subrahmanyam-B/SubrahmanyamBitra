import React, { useCallback, useContext } from "react";
import Image from "next/image";
import { useRef , useEffect , useState } from "react";
import { ScrollContext } from "@/utils/scroll-observer";

const Hero: React.FC = () => {

  const refContainer = useRef<HTMLDivElement>(null);
  const {scrollY} = useContext(ScrollContext);

  const [imageLoaded , setImageLoaded] = useState(false);

  const handleImageLoaded = useCallback(()=>
  setImageLoaded(true)
  ,[]);

  let progress = 0

  const {current : elContainer} = refContainer;

  if(elContainer){
    progress = Math.min(1 , scrollY/ elContainer.clientHeight)
  }

  return (
    <div
      ref={refContainer}
      className="bg-[#dad7cd] min-h-screen p-5 overflow-x-hidden sticky top-0 -z-10 "
      style={{
        transform: `translateY(-${progress * 20}vh)`,
      }}
    >
      <div className="flex justify-between px-5 pt-2 md:px-10 md:pt-5 items-center relative z-10">
        <button className="w-14 h-14 md:w-20 md:h-20 glass hover:bg-white rounded-full flex justify-center items-center shadow-lg cursor-pointer">
          <Image src="/assets/logo.svg" width={100} height={100} alt="logo" />
        </button>
        <div
          className={`glass py-4 px-6 md:py-6 md:px-8 max-h-10 rounded-xl text-white text-md md:text-xl font-semibold `}
        >
          Contact Me
        </div>
      </div>
      <div className="p-10 translate-y-16 md:-translate-y-32 relative -translate-x-[25%] w-[200%]">
        <Image
          src={"/assets/hero.svg"}
          alt="hero"
          width={1000}
          height={1000}
          className={` 2xl:h-[55rem] 3xl:h-[60rem]  md:h-[40rem] -translate-x-8 w-[50rem] md:w-auto transition-all duration-1000 mx-auto ${
            imageLoaded ? "opacity-100" : "opacity-0 -translate-y-10"
          }`}
          onLoad={handleImageLoaded}
        />
        <div className="glass text-white absolute top-[13%] left-[25%] md:left-auto md:top-[27%] md:right-[55%] px-4 py-3 md:px-7 md:py-6 rounded-2xl flex-col items-start">
          <div className="text-xs md:text-base pl-1">Hi! I&apos;m</div>
          <div className="text-2xl md:text-3xl font-semibold">Subrahmanyam</div>
        </div>
        <div className="glass text-white absolute top-[55%] right-[24%] md:right-[34%] px-4 py-3 md:px-7 md:py-6 rounded-2xl flex-col items-start">
          <div className="text-base md:text-2xl font-semibold">
            FullStack Developer
          </div>
        </div>
        <div className="glass text-white absolute top-[75%] left-[25%] md:left-auto md:top-[60%] md:right-[55%] px-4 py-3 md:px-7 md:py-6 rounded-2xl flex-col items-start">
          <div className="text-base md:text-2xl font-semibold">
            UI/UX Designer
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
