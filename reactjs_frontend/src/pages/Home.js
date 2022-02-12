import React from "react";
import Navigation from "../components/Navigation";
import DynamicText from "../components/DynamicText";
import Mouse from "../components/Mouse";


const Home = () => {
  return(
    <div>
      <div className="home">
      <Navigation />
      <Mouse />
      <div className="home-main">
        <div className="main-content">
          <h1>Boutique Ghazouani</h1>
          <h2>
            <DynamicText />
          </h2>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Home;