import React from 'react'
import "./moviecard.css"
import peakpx from "../Assets/Pngs/peakpx.jpg"

function MovieCard() {
  return (
    <div className='wrapper'>
    <div className="movie">
        <img src={peakpx} alt="movcard" className='mov-card__cover' />
    </div>
    </div>
  )
}

export default MovieCard