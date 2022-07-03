import React from "react";
import SubmovieCard from "../../../SubComponent/SubmovieCard";
import peakpx from "../../../Assets/Pngs/peakpx.jpg";
import cover from "../../../Assets/Pngs/cover.jpg";
import kick from "../../../Assets/Pngs/kick.jpg";

function TopSeries() {
  return (
    <div style={{ overflow: "hidden" }}>
      <h3
        style={{
          transform: "translate(30px, 40px)",
          color: "orange",
          fontSize: "medium",
        }}
      >
        Top Series
      </h3>
      <div className="movieslist flex__wrapper" style={{ marginTop: "50px" }}>
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

export default TopSeries;
