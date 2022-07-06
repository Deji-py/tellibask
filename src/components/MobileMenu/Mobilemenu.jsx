import React from "react";
import "./mobilemenu.css";
import {BiHomeCircle } from "react-icons/bi";
import { RiVoiceprintFill } from "react-icons/ri";
import {FaHubspot } from "react-icons/fa";
import { Link } from "react-router-dom";
import { IconButton } from "@mui/material";





function Mobilemenu() {
  
  return (
    <div className="menu__wrapper menu_wrap">
      <div className="menu" >
        <ul>
          <IconButton>
            <Link to="/"style={{textDecoration:"none", color:"white"}}>
              <BiHomeCircle />
            </Link>
          </IconButton>
           <IconButton>
            <Link to="/hub" style={{textDecoration:"none", color:"white"}} >
              <FaHubspot/>
            </Link>
          </IconButton>
          <IconButton>
            <Link to="/" style={{textDecoration:"none", color:"white"}}>
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
