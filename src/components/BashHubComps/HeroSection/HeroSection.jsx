import React, { useState } from "react";

import likesound from "../../../Assets/sounds/clickLike.wav";
import { FaPlay,FaTeamspeak } from "react-icons/fa";
import { RiHeartLine, RiHeartFill } from "react-icons/ri";
import { BsHandThumbsDown} from "react-icons/bs";
import { Button} from "@mui/material";
import MovieCard from "../../../SubComponent/MovieCard";
import kick from "../../../Assets/Pngs/peakpx.jpg";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import "./herosection.css";
import { MdOutlineStar } from "react-icons/md";
import Follwedbtn from "../../../Follwedbtn";

function HeroSection() {
  const [liked, setLiked] = useState(false);


  const audio = new Audio(likesound);

  function handleClickLike() {
    audio.play();
    setLiked(!liked);
  }


  return (
    <div className="wrapper">
      <img src={kick} alt="kick" className="bgimg" />
      <div className="mov-det">
        <MovieCard />
        <div className="mov__det">
          <h1 className="bigTitle">Doctor strange</h1>
          <h3
            style={{
              fontFamily: "'poppins', cursive",
              color: "white",
              transform: "translateY(-20px)",
            }}
          >
            Multeverse of Madness
          </h3>
          <blockquote className="sub-det">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
            voluptatem, magni consectetur repudiandae, illum asperiores
            consequuntur et atque ex quas perspiciatis. Corporis error earum
            architecto iste quibusdam magnam voluptate quia?
          </blockquote>
          <div className="cta-btns flex__wrapper">
            <button className="cta watch__cta">Watch Trailer </button>

            <div className="flex__wrapper rating">
                <Follwedbtn/>
              <div
                className="flex__wrapper rating"
                style={{ color: "white", marginLeft: "30px" }}
              >
                <MdOutlineStar color="orange" />
                <h5>7.6</h5>
              </div>
              
            </div>
          </div>
          <Stack direction="row" spacing={1} mt={2}>
            <Chip
              label="2.5m Streams"
              sx={{ background: "#c5c5c5", color: "white", opacity: "0.8" }}
              size="small"
              icon={<FaPlay size={12} />}
            />
            <Chip
              label="22.6k Basking"
              variant="outlined"
              color="warning"
              size="small"
            />
          </Stack>
          <Stack direction="row" spacing={1} mt={2} color="white">
            <div
              className="reactLike flex__wrapper"
              onClick={() => {
                handleClickLike();
              }}
              style={{ flexDirection: "column" }}
            >
              {!liked ? (
                <RiHeartLine size={30} color="yellow" />
              ) : (
                <RiHeartFill className="liked" size={32} color="yellow" />
              )}
              <h5 style={{ marginTop: "5px" }}>25.6M</h5>
            </div>
            <Button variant="outlined" size="small" sx={{margin:"0px 20px 0px 20px"}}>About Movie</Button>
            <div
              className="reactLike flex__wrapper"
              style={{ flexDirection: "column" }}
            >
              <BsHandThumbsDown className="liked" size={32} color="red" />


              <h5 style={{ marginTop: "5px" }}>0</h5>
            </div>
            
          </Stack>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
