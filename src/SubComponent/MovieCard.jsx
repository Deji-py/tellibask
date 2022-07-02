import React from 'react'
import "./moviecard.css"
import {RiVoiceprintFill} from "react-icons/ri"
import ripple from "../Assets/gif/ripple.gif"
import kick from "../Assets/Pngs/peakpx.jpg"

function MovieCard() {
  return (
    <div className='wrapper'>
      <div className="liveDiscussion">
        <img src={ripple} alt="ripple" className='ripple' />
        <button className='livebtn'>
           <RiVoiceprintFill size={35} color="white"/>
        </button>
      </div>
    <div className="movie">
        <img src={kick} alt="movcard" className='mov-card__cover' />
    </div>
    </div>

    
  )
}

export default MovieCard