import React, { useState } from "react";
import img1 from "../../Assets/Pngs/img1.jpg";
import img4 from "../../Assets/Pngs/img4.jpg";
import img2 from "../../Assets/Pngs/img2.webp";
import img3 from "../../Assets/Pngs/img3.jpg";

import likesound from "../../Assets/sounds/clickLike.wav";
import { FaPlay, FaRegAngry, FaRegThumbsUp, FaTeamspeak } from "react-icons/fa";
import { RiHeartLine, RiHeartFill } from "react-icons/ri";
import { Avatar, AvatarGroup, Rating } from "@mui/material";
import MovieCard from "../../SubComponent/MovieCard";
import kick from "../../Assets/Pngs/morbius.jpg";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import "./herosection.css";
import { MdOutlineStar } from "react-icons/md";

function HeroSection() {
  const [liked, setLiked] = useState(false);
  const [followed, setFollowed] = useState(false);

  const audio = new Audio(likesound);

  var bgcolor = "#2e3338";
  var textcontent = "follow";
  var opacity = "0.8";

  function handleClickLike() {
    audio.play();
    setLiked(!liked);
  }


    if (followed === true) {
      bgcolor = "#0066cc";
      textcontent = "following"
      opacity = "1"
    } else {
      bgcolor = "#2e3338";
      textcontent = "follow"
    }
  
  return (
    <div className="wrapper">
      <img src={kick} alt="cover" className="coverArt" />
      <div className="mov-det">
        <MovieCard />
        <div className="mov__det">
          <h1 className="bigTitle">Doctor strange</h1>
          <h3
            style={{
              fontFamily: "'poppins', cursive",
              color: "lightgray",
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
              <button
                className="cta prev__cta "
                onClick={() => {setFollowed(!followed)
                }}
                style={{ backgroundColor:bgcolor, opacity:opacity}}
              >
                {textcontent} <FaTeamspeak style={{ marginLeft: "5px" }} />{" "}
              </button>
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
              sx={{ background: "#333333", color: "lightgray", opacity: "0.8" }}
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
          <Stack direction="row" spacing={1} mt={2} color="#fff">
            <div
              className="reactLike flex__wrapper"
              onClick={() => {
                handleClickLike();
              }}
              style={{ flexDirection: "column"}}
            >
              {!liked ? (
                <RiHeartLine size={30} color="#F20042" />
              ) : (
                <RiHeartFill className="liked" size={32} />
              )}
              <h5 style={{ marginTop: "5px" }}>25.6M</h5>
            </div>
          </Stack>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
