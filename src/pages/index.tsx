import Image from "next/image";
import { Manrope } from "next/font/google";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import About from "@/components/About";
const manrope = Manrope({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={`${manrope.className}`}>
      <Hero />
      <About />
      <div className="sticky bottom-16 flex justify-center">
        <Navbar />
      </div>
    </main>
  );
}