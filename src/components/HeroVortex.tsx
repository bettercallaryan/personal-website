import React from "react";
import { Vortex } from "./ui/vortex";
import OldHeroSection from "./OldHeroSection";

export default function HeroVortex() {
  return (
    <div className="mx-auto rounded-md  h-screen overflow-hidden">
      <Vortex
        backgroundColor="black"
        rangeY={800}
        particleCount={500}
        baseHue={120}
        className="flex items-center flex-col justify-center w-full h-full"
      >
        <OldHeroSection />
      </Vortex>
    </div>
  );
}
