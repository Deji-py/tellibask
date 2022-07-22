import { Avatar, LinearProgress } from "@mui/material";
import React from "react";

import "./Storycard.css";
import storypost from "../../Assets/Pngs/guy.png";
import profile from "../../Assets/Pngs/profile.jpg";
function StoryCard() {
  return (
    <div className="storycard">
      <div className="storypost">
        <div className="storydet">
          <Avatar
            src={profile}
            alt="h"
            sx={{ border: "solid 5px var(--bg-color);", width: 50, height: 50 }}
            className="profile"
          />
        </div>
        <img src={storypost} alt="postst" className="storyimg" />
      </div>
    </div>
  );
}

export default StoryCard;
