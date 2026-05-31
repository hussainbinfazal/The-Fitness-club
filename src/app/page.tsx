import Image from "next/image";
import Header from "./components/Header";
import Hero from "./components/Herosection";
import About from "./components/About";
import Services from "./components/Services";
import Pricing from "./components/Pricing";
import Trainers from "./components/Trainers";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { JSX } from "react";


export default function Home() : JSX.Element {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Services />
      <Pricing />
      <Trainers />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}
