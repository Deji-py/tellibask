import React from 'react'
import Mobilemenu from '../../components/MobileMenu/Mobilemenu'
import SpaceCard from './SpacesComps/SpaceCard'


const gradientVarList = ["a", "b"]



function SpacesPage() {
  return (
    <>
    <div className='main flex__wrapper' style={{flexDirection:"column", marginBottom:"100px"}}>
        <SpaceCard  gradientVar={gradientVarList[Math.floor(Math.random()*gradientVarList.length)]}/>
        <SpaceCard  gradientVar={gradientVarList[Math.floor(Math.random()*gradientVarList.length)]}/>
        <SpaceCard   gradientVar={gradientVarList[Math.floor(Math.random()*gradientVarList.length)]}/>
        <SpaceCard gradientVar={gradientVarList[Math.floor(Math.random()*gradientVarList.length)]}/>
        <SpaceCard />
        <SpaceCard gradientVar={gradientVarList[Math.floor(Math.random()*gradientVarList.length)]}/>
        <SpaceCard  gradientVar={gradientVarList[Math.floor(Math.random()*gradientVarList.length)]}/>
        <SpaceCard gradientVar={gradientVarList[Math.floor(Math.random()*gradientVarList.length)]}/>
        <SpaceCard />

    </div>
    <Mobilemenu/>
    </>
  )
}

export default SpacesPage