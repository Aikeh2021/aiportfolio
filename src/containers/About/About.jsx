import React from "react";
import Header from "../../components/Header/Header";
import Description from "../../components/AbtDescription/Description";
import Bio from '../../components/AbtBio/Bio';
import Thisorthat from '../../components/thisorthat/Thisorthat';
import Headshot from '../../Assets/Headshot.png';
import ResumePic from '../../components/Resume/ResumePic';
import Resume from '../../Assets/Resume.png';

const About = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
              <br />
            <Description title="Meet Ashley! A Dev In The Making..." />
            <br />
            <Header />
            <br />
            <Bio />
            <Thisorthat picture={Headshot}/>
            <ResumePic doc={Resume}/>
            <br/>
            <br/>
            <br/>
            <br/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
