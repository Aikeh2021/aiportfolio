import React from "react";
import Background from "../../Assets/Background.png";
import Background2 from "../../Assets/Background2.png";
import Background3 from "../../Assets/Background3.png";

const Carousel = () => {
  return (
    <div>
      <div className="Container">
        <div className="row">
          <div className="col-sm-12">
            <div
              id="carouselExampleControls"
              className="carousel slide carousel-fade"
              data-bs-ride="carousel"
              data-bs-pause="false"
            >
              <div className="carousel-inner">
                <div className="carousel-item active" data-bs-interval="3000">
                  <img src={Background} className="d-block w-100" alt="A tech desk setup" />
                </div>
                <div className="carousel-item" data-bs-interval="3000">
                  <img src={Background2} className="d-block w-100" alt="Snippet of code in a text editor" />
                </div>
                <div className="carousel-item" data-bs-interval="3000">
                  <img src={Background3} className="d-block w-100" alt="Black women coding" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
