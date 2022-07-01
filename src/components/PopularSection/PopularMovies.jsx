import React from "react";
import SubmovieCard from "../../SubComponent/SubmovieCard";
import peakpx from "../../Assets/Pngs/peakpx.jpg";
import cover from "../../Assets/Pngs/cover.jpg";
import kick from "../../Assets/Pngs/kick.jpg";
function PopularMovies() {
  return (
    <div style={{ overflow: "hidden" }}>
      <h3
        className="popular__category"
        style={{
          transform: "translate(30px, 240px)",
          color: "orange",
          fontSize: "medium",
        }}
      >
        Popular Movies
      </h3>
      <div className="popular movieslist flex__wrapper">
        <SubmovieCard image={peakpx} />
        <SubmovieCard image={cover} />
        <SubmovieCard image={kick} />
        <SubmovieCard image={peakpx} />
        <SubmovieCard image={cover} />
        <SubmovieCard image={kick} />
        <SubmovieCard image={peakpx} />
        <SubmovieCard image={cover} />
        <SubmovieCard image={kick} />
        <SubmovieCard image={peakpx} />
        <SubmovieCard image={cover} />
        <SubmovieCard image={kick} />
      </div>
    </div>
  );
}

export default PopularMovies;
