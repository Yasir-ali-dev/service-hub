import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import HeroSection from "./HeroSection";
import Services from "./Services";
import About from "./About";
import Value from "./Value";

export default function LandingPage() {
  return (
    <>
      <HeroSection />
      <Services />
      <About />
      <Value />
    </>
  );
}