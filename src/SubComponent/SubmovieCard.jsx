import React from "react";
import Rating from "@mui/material/Rating";

function SubmovieCard({ image }) {
  function checkimage() {
    if (image === undefined) {
      return <div className="defaultcover"></div>;
    } else {
      return <img src={image} alt="movcard" className="mov-card__cover" />;
    }
  }
  return (
    <div>
      <div className="subMovie">
        <div className="sub__movie-img">{checkimage()}</div>
        <h5 style={{ textAlign: "center", color: "white", padding: 10 }}>
          Movie Title
        </h5>
        <Rating name="size-small" readOnly defaultValue={0} value={3} size="small" sx={{ml:5, color:"#0066cc"}}  />
      </div>
    </div>
  );
}

export default SubmovieCard;
