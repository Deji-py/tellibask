import { Avatar, AvatarGroup, Button } from "@mui/material";
import React from "react";
import { BsSoundwave } from "react-icons/bs";
import img1 from "../../../Assets/Pngs/img1.jpg"
import img2 from "../../../Assets/Pngs/img2.webp"
import img3 from "../../../Assets/Pngs/img3.jpg"
import char from "../../../Assets/Pngs/nesta.jpg"

let a = "linear-gradient(60deg, orangered, purple)";
let b = "linear-gradient(60deg, purple, var(--blend-light))";
const currentcolor = "linear-gradient(60deg, purple, orange)";
function SpaceCard({ gradientVar }) {
  const checkgrad = () => {
    switch (gradientVar) {
      case "a":
        return a;
        break;
      case "b":
        return b;
        break;
      default:
        return currentcolor;
    }
  };

  return (
    <div
      className="sp-card"
      style={{
        background: checkgrad(),
        color: "white",
        width: "90%",
        borderRadius: 20,
        marginTop: "20px",
        height: "150px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        fontWeight: "bolder",
        fontSize: "15px",
        textAlign: "center",
      }}
    >
      <div className="postTitle" style={{ padding: "20px" }}>
        THE FLASH SEASON TWO ANALYSIS
      </div>
      <div className="postdet flex__wrapper">
        <AvatarGroup>
          <Avatar src={img1} alt="A" />
          <Avatar src={img2} alt="A" />
          <Avatar src={img3} alt="A" />
          <Avatar src={char} alt="A" />
        </AvatarGroup>
        <button
          style={{
            marginLeft: "30px",
            background: "transparent",
            border: "none",
            color:"white"
          }}
        >
          <BsSoundwave size={30} />
        </button>
      </div>
    </div>
  );
}

export default SpaceCard;
