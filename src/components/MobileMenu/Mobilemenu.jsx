import React from "react";
import "./mobilemenu.css";
import {BiHomeCircle } from "react-icons/bi";
import { RiVoiceprintFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { IconButton } from "@mui/material";

const menuWrapperstyle = {
  position: "fixed",
  zIndex: "25",
  top: "70%",
  left: "80%",
  width: "50px",
};

function Mobilemenu() {
  return (
    <div className="menu__wrapper" style={menuWrapperstyle}>
      <div className="menu">
        <ul>
          <IconButton>
            <Link to="/" style={{ textDecoration: "none" }}>
              <BiHomeCircle />
            </Link>
          </IconButton>

          <Link to="/hub">Hub</Link>
          <ll>Home</ll>
          <ll>Home</ll>
        </ul>
      </div>
      <div className="createpostbtn">
        <button className="create">
          <RiVoiceprintFill size={35} color="white" />
        </button>
      </div>
    </div>
  );
}

export default Mobilemenu;
