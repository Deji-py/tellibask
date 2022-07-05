import React from "react";
import "./mobilemenu.css";
import {BiHomeCircle } from "react-icons/bi";
import { RiVoiceprintFill } from "react-icons/ri";
import {FaHubspot } from "react-icons/fa";
import { Link } from "react-router-dom";
import { IconButton } from "@mui/material";

const menuWrapperstyle = {
  position: "fixed",
  zIndex: "25",
  top: "60%",
  left: "1.5rem",
  width: "50px",
};

function Mobilemenu() {
  return (
    <div className="menu__wrapper" style={menuWrapperstyle}>
      <div className="menu">
        <ul>
          <IconButton>
            <Link to="/" style={{ textDecoration: "none", color:"black" }}>
              <BiHomeCircle />
            </Link>
          </IconButton>
           <IconButton>
            <Link to="/hub" style={{ textDecoration: "none", color:"black" }}>
              <FaHubspot/>
            </Link>
          </IconButton>
          <IconButton>
            <Link to="/" style={{ textDecoration: "none", color:"black" }}>
              <BiHomeCircle />
            </Link>
          </IconButton>

        </ul>
      </div>
      <div className="createpostbtn">
        <button className="create">
          <RiVoiceprintFill size={30} color="white" />
        </button>
      </div>
    </div>
  );
}

export default Mobilemenu;
