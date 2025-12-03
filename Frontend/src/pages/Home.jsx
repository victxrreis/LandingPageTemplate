/* --- PAGE: HOME (LANDING PAGE) --- */
import React from "react";

/* --- IMPORT SECTIONS --- */
import Hero from "../components/sections/Hero";
import FeaturesGrid from "../components/sections/FeaturesGrid";
import ServiceDetail from "../components/sections/ServiceDetail";
import Pricing from "../components/sections/Pricing";
import About from "../components/sections/About";

export default function Home() {
  return (
    <>
      {/* --- SECTION 1: HERO (CAPA) --- */}
      <Hero />

      {/* --- SECTION 2: SERVICES SUMMARY --- */}
      <FeaturesGrid />

      {/* --- SECTION 3: SERVICE DEEP DIVE --- */}
      <ServiceDetail />

      {/* --- SECTION 4: PRICING PLANS --- */}
      <Pricing />

      {/* --- SECTION 5: ABOUT US --- */}
      <About />
    </>
  );
}
