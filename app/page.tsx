"use client"
import Image from "next/image";
import Navbar from "./components/navbar";
import Hero from "./components/hero-section";
import Projects from "./components/projects-section";

export default function Home() {
  return (
    <main className="">
      <Navbar/>
      <Hero/>
      <div className="absolute bottom-0 w-screen border-b-2 border-black p-2"></div>
      <Projects/>
    </main>
  );
}
