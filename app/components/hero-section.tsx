import Image from "next/image";
import React, { useEffect, useState } from "react";

const Hero = () => {

    const [imageLoaded , setImageLoaded] = useState<boolean>(false);

    const handleImageLoad = () => {
        setImageLoaded(true);
    }

  return (
    <div className="mx-auto max-w-7xl mt-40 h-[80vh]">
      <StatusBar />
      <div className="flex justify-between">
        <div>
        <p className="text-8xl font-medium mt-28">Hi, this is</p>
        <p className="text-8xl font-medium">Subrahmanyam.</p>
        <p className="mt-20">Full-Stack Developer</p>
        <p>UI/UX Designer</p>
        </div>
        <div className="pt-8 ">
            <Image width={500} height={500} src={'hero.svg'} alt="hero-image" className={` transistion-all duration-1000 ease-in-out ${imageLoaded ? 'opacity-100' : 'opacity-0'}`} onLoad={handleImageLoad}/>
        </div>
      </div>
    </div>
  );
};

const StatusBar = () => {
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    setInterval(() => {
      const dateObject = new Date();

      var utc = dateObject.getTime() + (dateObject.getTimezoneOffset() * 60000);

      var nd = new Date(utc + (3600000*5.5));

      setTime(nd.toLocaleTimeString());
    }, 1000);
  }, []);
  return (
    <div className=" border-b-[1px] border-black pb-8 xl:text-lg flex justify-between">
      <span className="">
        Based in India → <span className="px-2 font-bold">{time}</span>
      </span>
      <span>
        ✦ Status → <span className="font-bold">Open to Work</span>
      </span>
    </div>
  );
};

export default Hero;
