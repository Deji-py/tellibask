import { Avatar } from "@mui/material";
import React from "react";
import { BsArrowDown } from "react-icons/bs";
import profile from "../../Assets/Pngs/profile.jpg"
import "./TrendingDisco.css";

function TrendingDisco() {
  return (
    <div className="Trend__Wrapper">
    
      < div className="act__wrapper">
      <div className="Active__trend">
        <Avatar src={profile} alt="T" className="avt"  />
      </div>
      <div className="Active__trend">
        <Avatar src={profile} alt="T" className="avt" />
      </div>
      <div className="Active__trend">
        <Avatar src={profile} alt="T" className="avt" />
      </div>
   
      </div>
      <div>
        <BsArrowDown color="white"/>
      </div>
    
 
    </div>
  );
}

export default TrendingDisco;
