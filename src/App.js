import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";
import AboutMe from "./components/AboutMe";
import Campfire from "./components/Campfire";
import Footer from "./components/Footer";

import "./index.css";
import Carousel from "./components/Carousel";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Carousel />} />
        <Route path="/about-me" element={<AboutMe />} />
        <Route path="/campfire" element={<Campfire />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
