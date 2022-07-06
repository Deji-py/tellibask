import React, {useState} from "react";


function Follwedbtn() {
    const [followed, setFollowed] = useState(false);
  
    var bgcolor = "#2e3338";
    var textcontent = "follow";
    var opacity = "0.8";
  
  
    if (followed === true) {
      bgcolor = "#0066cc";
      textcontent = "following";
      opacity = "1";
    } else {
      bgcolor = "#2e3338";
      textcontent = "follow";
    }
  
  return (
    <div>
      <button
        className="cta prev__cta "
        onClick={() => {
          setFollowed(!followed);
        }}
        style={{ backgroundColor: bgcolor, opacity: opacity }}
      >
        {textcontent} {" "}
      </button>
    </div>
  );
}

export default Follwedbtn;
