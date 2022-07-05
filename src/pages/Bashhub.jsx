import React from "react";
import Footer from "../components/Footer";
import Channels from "../components/BashHubComps/HeroSection/channels/Channels";
import HeroSection from "../components/BashHubComps/HeroSection/HeroSection";
import LatestTrailers from "../components/LatestTrailers";
import Navbar from "../components/Navbar/Navbar";
import PopularMovies from "../components/BashHubComps/PopularSection/PopularMovies";
import TopSeries from "../components/BashHubComps/TopSeries/TopSeries";
import PreviewTrailer from "../components/PreviewTrailer";
import Mobilemenu from "../components/MobileMenu/Mobilemenu";

function Bashhub() {

  return (
    <div className="Home__layout">
      <Mobilemenu/>
      <HeroSection />
      <Channels />
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

export default Bashhub;
