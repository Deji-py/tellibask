import React from "react";
import "./postcard.css";
import Avatar from "@mui/material/Avatar";
import { IconButton } from "@mui/material";
import { AiFillHeart } from "react-icons/ai";
import { BsSoundwave } from "react-icons/bs";
import { FaComments } from "react-icons/fa";
import { RiVoiceprintFill } from "react-icons/ri";

function Postcard() {
  return (
    <div className="postcard">
      <div className="userpost flex__wrapper">
        <div className="userdetails flex__wrapper">
          <Avatar src="" alt="David" />

          <div className="user">
            <h5>Username</h5>
            <p>Date</p>
          </div>
        </div>
        <button className="followbtn cta">Follow</button>
      </div>
      <div className="postimg">
        <img src="" alt="" />
      </div>
      <div className="postcaption">
        <p>my post</p>
      </div>
      <div className="postcta">
        <div className="reaction flex__wrapper">
          <div className="r1">
            <IconButton>
              <AiFillHeart size={20} />
            </IconButton>
            <p className="postcounter">2.7k</p>
          </div>
          <div className="r2">
            <IconButton>
              <BsSoundwave size={20} />
            </IconButton>
            <p className="postcounter">2.7k</p>
          </div>
          <div className="r3">
            <IconButton>
              <FaComments size={20} />
            </IconButton>
            <p className="postcounter">2.7k</p>
          </div>
        </div>
        <button className="join">
          <div className="p">Join</div>
          <RiVoiceprintFill size={20} color="white" />
        </button>
      </div>
    </div>
  );
}

export default Postcard;
