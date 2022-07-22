import React from "react";
import "./postcard.css";
import Avatar from "@mui/material/Avatar";
import { IconButton } from "@mui/material";
import { AiFillHeart } from "react-icons/ai";
import { BsSoundwave, BsThreeDotsVertical } from "react-icons/bs";
import { FaComments } from "react-icons/fa";
import { RiVoiceprintFill } from "react-icons/ri";
import Follwedbtn from "../../Follwedbtn"

function Postcard({postimage, profilepic}) {
  return (
    <div className="postcard" >
      <div className="userpost flex__wrapper">
        <div className="userdetails flex__wrapper">
          <Avatar src={profilepic} alt="David" />

          <div className="user">
            <h5>Username</h5>
            <p>7:15pm</p>
          </div>
        </div>
        <div className="flex__wrapper" >
        <Follwedbtn/>
        <  BsThreeDotsVertical color="gray" style={{marginLeft:"10px"}}/>
        </div>
      </div>
      <div className="postimg__wrapper">
        <img src={postimage} alt="bg" className="postimg" />
      </div>
      <div className="postcaption">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti earum tempora, eum quisquam, corporis sequi, id blanditiis nostrum sint perspiciatis dolor aspernatur culpa dicta assumenda dolorum nesciunt odit unde. Esse! </p>
      .....
      </div>
      <div className="postcta">
        <div className="reaction flex__wrapper">
          <div className="r1">
            <IconButton>
              <AiFillHeart size={20} color="gray" />
            </IconButton>
            <p className="postcounter">2.7k</p>
          </div>
          <div className="r2">
            <IconButton>
              <BsSoundwave size={20}  color="gray" />
            </IconButton>
            <p className="postcounter">2.7k</p>
          </div>
          <div className="r3">
            <IconButton>
              <FaComments size={20}  color="gray"/>
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
