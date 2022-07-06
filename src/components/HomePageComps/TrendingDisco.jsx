import { Avatar } from "@mui/material";
import React from "react";
import { BsArrowDown } from "react-icons/bs";
import profile from "../../Assets/Pngs/profile.jpg";
import MovieCard from "../../SubComponent/MovieCard";
import SubmovieCard from "../../SubComponent/SubmovieCard";
import StoryCard from "./StoryCard";
import "./TrendingDisco.css";

function TrendingDisco() {
  return (
    <div className="Trend__Wrapper ">
      <div className="stories">
      <StoryCard/>
      <StoryCard/>
      <StoryCard/>
      <StoryCard/>
      <StoryCard/>
      <StoryCard/>
      <StoryCard/>
      <StoryCard/>
      <StoryCard/>
      </div>
    </div>
  );
}

export default TrendingDisco;
