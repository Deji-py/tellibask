import React from "react";
import Avatar from "@mui/material/Avatar";
import "./navbar.css";
import { MdMenu, MdNotifications } from "react-icons/md";
import profile from "../../Assets/Pngs/profile.jpg";
import logo from "../../Assets/Svgs/Logo.svg";
import { Badge } from "@mui/material";

function Navbar() {
  return (
    <nav className="navbar flex__wrapper">
      <div className="left flex__wrapper">
        <img src={logo} alt="tellibash-logo" className="logo" />
        <h1 className="logo-name">TelliBask</h1>
      </div>
      <div className="right flex__wrapper">
        <ul className="navlist flex__wrapper">
          <li>Home</li>
          <li>BashHub</li>
          <li>MovTrends</li>
          <li>Shows</li>
        </ul>
        <Badge badgeContent={4} color="warning">
        <MdNotifications size={25}/>
        </Badge>
        <div className="Avatar">
          <Avatar
            alt="Remy Sharp"
            sx={{ width: {md:"50px", sm:"30px"}, height: {md:"50px"} }}
            src={profile}
          />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
