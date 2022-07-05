import React from "react";
import TrendingDisco from "../components/HomePageComps/TrendingDisco";
import Mobilemenu from "../components/MobileMenu/Mobilemenu";
import Postcard from "../components/Postcards/Postcard";

function HomePage() {
  return (
    <div>
      <Mobilemenu />
      <div className="mainpage">
        <TrendingDisco />
        <div className="posts">
          <Postcard />
          <Postcard />
          <Postcard />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
