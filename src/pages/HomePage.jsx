
import TrendingDisco from "../components/HomePageComps/TrendingDisco";
import Mobilemenu from "../components/MobileMenu/Mobilemenu";
import Postcard from "../components/Postcards/Postcard";
import img4 from "../Assets/Pngs/img4.jpg"
import morbius from "../Assets/Pngs/morbius.jpg"
import cartoon from "../Assets/Pngs/cartoon.jpg"
import img1 from "../Assets/Pngs/img1.jpg"
import img2 from "../Assets/Pngs/img2.webp"
import img3 from "../Assets/Pngs/img3.jpg"
import char from "../Assets/Pngs/nesta.jpg"
import { BsPen, BsArrowsMove } from "react-icons/bs";
import { FaComments, FaImage } from "react-icons/fa";
import {  RiVideoChatLine } from "react-icons/ri";
import { border } from "@mui/system";

const posterstyle= {
   padding:"20px",
   margin:"10px",
   background:"#101010",
   borderRadius:"10px",
   border:"none"
}


function HomePage() {
  return (

  
      <div className="mainpage">
        <TrendingDisco />
        <Mobilemenu  />
        <div className="poster flex__wrapper" style={{flexDirection:"column"}}>
        <form action="" className="flex__wrapper" style={{justifyContent:"center", alignItems:"cengter"}}>
        <input type={"text"} placeholder="  Say Something" className="addpost" style={posterstyle}/>
        <button style={{padding:"10px",color:"white", background:"var(--blend-light)", border:"none"}}>Post</button>
     
        </form>
        <div className="post-opt flex__wrapper" style={{width:"60%"}} >
        <RiVideoChatLine color="gray" size={25}/>
        <FaComments color="gray" size={20}/>
        <FaImage color="gray" size={20}/>
        <BsPen color="gray" size={20}/>
        <BsArrowsMove color="gray" size={20}/>
        </div>

        </div>
        <div className="posts" style={{marginBottom:"100px"}}>
          <Postcard postimage={img4} profilepic={img1} />
          <Postcard postimage={morbius} profilepic={img2}/>
          <Postcard postimage={cartoon} profilepic={img3} />
          <Postcard postimage={char} profilepic={img3} />
        </div>
      </div>

  );
}

export default HomePage;
