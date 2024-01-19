import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="border-black rounded-full border-[1px] backdrop-blur-[25px] bg-[#D3D3D357] max-w-[60rem] mx-auto mt-5 flex justify-between items-center sticky">
      <Image src={"/logo.svg"} alt="logo" width={50} height={50} className="mx-[5px] rounded-full hover:bg-black"/>
      <div className="flex gap-6 px-6">
        <Link href={'/'} className="text-sm opacity-60 transistion-all duration-500 hover:opacity-100">Projects</Link>
        <Link href={'/'} className="text-sm opacity-60 transistion-all duration-500 hover:opacity-100">About</Link>
        <Link href={'/'} className="text-sm opacity-60 transistion-all duration-500 hover:opacity-100">Resume</Link>
        <Link href={'mailto:subrahmanyam.work@gmail.com'} className="text-sm opacity-60 transistion-all duration-500 hover:opacity-100">Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;
