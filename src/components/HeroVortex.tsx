import React from "react";
import { Vortex } from "./ui/vortex";
import OldHeroSection from "./OldHeroSection";

export default function HeroVortex() {
  return (
      <Vortex
        backgroundColor="black"
        rangeY={800}
        particleCount={500}
        baseHue={120}
        className="min-h-screen flex items-center justify-center"
      >
        <OldHeroSection />
      </Vortex>
  );
}
