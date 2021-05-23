import React from "react";
import "./ContactInfo.css";

const ContactInfo = ({ platform1, platform2, platform3 }) => {
  return (
    <div className="container" id="contact-div">
      <div className="row s-12">
        <div className="col s-4 cc">
          <img src={platform1} alt="Github logo"  id="ghub" onClick={()=> window.open("https://github.com/Aikeh2021")} target="_blank" rel="noopener noreferrer"/>
        </div>
        <div className="col s-4 cc">
          <a href="mailto:ashleysportfolioemail@gmail.com" target="_blank" rel="noopener noreferrer"><img src={platform2} alt="Gmail logo" id="gmail"/></a>
        </div>
        <div className="col s-4 cc">
          <img src={platform3} alt="LinkedIn logo" id="linked" onClick={()=> window.open("https://www.linkedin.com/in/ashley-ik/")} target="_blank" rel="noopener noreferrer"/>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
