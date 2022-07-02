import React from 'react'
import ChannelsCard from './ChannelsCard'
import grid1 from "../../../Assets/Pngs/grid1.jpg"
import netFlixLogo from "../../../Assets/Svgs/Netflix.svg"
import disneypluslogo from "../../../Assets/Svgs/disneyplus.svg"
import hulu from "../../../Assets/Svgs/Hulu.svg"
import appletv from "../../../Assets/Svgs/AppleTv.svg"
import hbomax from "../../../Assets/Svgs/Hbomax.svg"

function Channels(){
  return (
    <div className=' channels'>
        <div className="chancards flex__wrapper">
      <ChannelsCard titleimg={netFlixLogo} color1="#040F1E" color2="black"/>
      <ChannelsCard titleimg={disneypluslogo} color1="lightblue" color2="#1267D5"/>
      <ChannelsCard titleimg={hulu} color1="#040F1E" color2="#032E00"/>
      <ChannelsCard titleimg={appletv} color1="whitesmoke" color2="gray"/>
      <ChannelsCard titleimg={hbomax} color="white"/>
      </div>
    </div>
  )
}

export default Channels
