import React from "react";
import Headshot from "../../Assets/Headshot.png";
import "./Thisorthat.css";


const thisorthat = () => {

  return (
    <div>
      <h2 id="game-div">This or That With Ashley:</h2>
      <div className="row" id="allContent">
        <ul className="list-group col-sm-8" id="that-list">
          <li className="list-group-item">Karaoke or Video Games: Karaoke</li>
          <li className="list-group-item">Dogs or Cats: Both...Duh!</li>
          <li className="list-group-item">Netflix or Hulu: NETFLIX!</li>
          <li className="list-group-item">Money or Free Time: I'll take Free Time for 200, Alex </li>
          <li className="list-group-item">
            East Coast or West Coast: East Coast for life!!!
          </li>
          <li className="list-group-item">
            International or Domestic Travel: Open the passport and stamp away!
          </li>
          <li className="list-group-item">
            Breakfast or Dinner: Breakfast
          </li>
          <li className="list-group-item">
            Vine or TikTok: Vine
          </li>
          <li className="list-group-item">
            Skating or Biking: Skating!
          </li>
        </ul>
      <img src={Headshot} alt="Ashley's headshot" className="col-sm-4" id="headshot"/>
      </div>
    </div>
  );
};

export default thisorthat;
