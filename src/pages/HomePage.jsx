
import TrendingDisco from "../components/HomePageComps/TrendingDisco";
import Mobilemenu from "../components/MobileMenu/Mobilemenu";
import Postcard from "../components/Postcards/Postcard";

function HomePage() {
  return (

  
      <div className="mainpage">
        <TrendingDisco />
        <Mobilemenu  />
        <div className="posts">
          <Postcard />
          <Postcard />
          <Postcard />
        </div>
      </div>

  );
}

export default HomePage;
