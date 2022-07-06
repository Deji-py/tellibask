import React from 'react'
import "./channels.css"


function ChannelsCard({color1,color2, titleimg}) {
  return (
    <div className='channelcard' style={{background:"linear-gradient(to top,"+color1+","+color2+")"}}>
        <img src={titleimg} alt="netflixlogo" style={{width:"100%", padding:"20px"}} />
    </div>
  )
}

export default ChannelsCard
