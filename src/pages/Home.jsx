import React from "react";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection/HeroSection";
import LatestTrailers from "../components/LatestTrailers";
import Navbar from "../components/Navbar/Navbar";
import PopularMovies from "../components/PopularSection/PopularMovies";
import PreviewTrailer from "../components/PreviewTrailer";
import TopSeries from "../components/TopSeries/TopSeries";

function Home() {
  return (
    <div className="Home__layout">
      <Navbar />
      
      <HeroSection />

      <PopularMovies />
      <TopSeries />
      <div className="Home-layout__two-col">
        <PreviewTrailer />
        <LatestTrailers />
      </div>
      <Footer />
    </div>
  );
}

export default Home;
