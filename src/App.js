import React from "react";
import "./style.css";
import Navbar from "../components/Navbar.js";
import Carousel from "../components/Carousel.js";
import Gallery from "../components/Gallery.js";
import OurTeam from "../components/OurTeam.js";
import About from "../components/About.js";
import Footer from "../components/Footer.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";

export default function App() {
  return (
    <div>
      <Navbar />
      <Carousel />
      <Gallery />
      <OurTeam />
      <About />
      <Footer />
    </div>
  );
}
