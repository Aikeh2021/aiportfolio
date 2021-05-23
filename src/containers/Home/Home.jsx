import React from "react";
import Description from "../../components/AbtDescription/Description";
import Header from "../../components/Header/Header";
import Carousel from '../../components/Carousel/Carousel';

const Home = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-12">
          <br/>
          <Description title={"Ashley Ikeh"}/>
          <br />
          <Header />
          <br />
          <Carousel />
        </div>
      </div>
      <br />
      <br />
      <br />
    </div>
  );
};

export default Home;
