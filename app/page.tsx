"use client";
import { ThemeProvider, Button } from "@material-tailwind/react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";

export default function Home() {
  return (
    <div className=" text-white h-screen snap-y snap-mandatory overflow-scroll z-0">
      <title>OASIS Fitness Club</title>
      <div>
        <Header />

        <section id="hero" className="snap-start">
          <Hero />
        </section>
      </div>
      <section id="about" className="snap-center h-screen">
        <About />
      </section>
    </div>
  );
}

export { ThemeProvider, Button };
