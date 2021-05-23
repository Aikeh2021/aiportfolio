import React from "react";
import Header from "../../components/Header/Header";
import Projects from "../../components/Projects/Projects";
import Description from "../../components/AbtDescription/Description";
import Inspirator from '../../Assets/Inspirator.png';
import Encrypted from '../../Assets/Encrypted.png';
import Directory from '../../Assets/Directory.png';
import Budget from '../../Assets/Budget.png';
import Scheduler from '../../Assets/Scheduler.png';
import Weather from '../../Assets/Weather.png';
import Reserve from '../../Assets/Reserve.png';
import Submanny from '../../Assets/Submanny.png';

const ProjectsPage = () => {
  return (
    <div>
      <br />
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <Description title={"Projects"} />
            <br />
            <br />
            <Header />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <Projects
              title="Sub Manny"
              description="No one likes to be surprised by random subscription price increases. With Sub Manny, you'll get notified before you're charged!"
              link="https://github.com/Aikeh2021/subscription-manager"
              site="https://boiling-journey-74144.herokuapp.com/"
              siteName="Visit Sub Manny"
              updated="Last updated February 2021"
              image={Submanny}
              alt="Sub Manny Thumbnail"
              contribution="I wore every hat possible during this project. I was primarily responsible for the frontend design and coded most of the containers and components featured on this site. Though I did not propose the idea for the website, I was the driving force behind it's functionality and did the engineering to solve all of the obstacles we faced in bringing this website to life. I was really proud of my work during this project and feel that it largely reflects how much growth I made during my time in bootcamp."
            />
            <Projects
              title="The Inspirator"
              description="The Inspirator: an application to help unlock creativity for persons needing a fresh approach. "
              link="https://github.com/Aikeh2021/The-Inspirator"
              site="https://mbostwick1.github.io/GT-Project1/"
              siteName="Visit The Inspirator"
              updated="Last updated October 2020"
              image={Inspirator}
              alt="The Inspirator Thumbnail"
              contribution="I was primarily responsible for implementing the last feature on the website, the film inspiration. I incorporated a button to randomly shuffle an array of movies and pick one to be displayed on the website. With the help of an API from The Movie Database, we were able to attach features like film trailers, descriptions, release dates, and run times for highly rated films from several genres and countries."
            />
            <br />
            <Projects
              title="The Reserve"
              description="The Reserve is a room reservation app that allows college campus library managers to create a log of study rooms. In doing so, it's easier for the manager to keep track of which rooms are in use, empty, or in need of cleaning."
              link="https://github.com/Aikeh2021/conference-room-booker"
              site="https://immense-refuge-69876.herokuapp.com/"
              siteName="Visit The Reserve"
              updated="Last updated December 2020"
              image={Reserve}
              alt="The Reserve Thumbnail"
              contribution="I believe in this project I was able to wear many hats. It was the second project I completed during my coding bootcamp and I was able to get involved with more aspects of the process. I sketched the wireframes used to design the site, as well as, completed the design of most of the elements on the website's main page. I also sought out the SweetAlert2 NPM package and proposed the use of it to my team to make the alerts on the page more fun. I did so with the idea being that the small things are often what make the biggest impact for users. I really enjoyed this project and worked with an awesome team!"
            />
            <br />
            <Projects
              title="Employee Encrypted Password Generator"
              description="Let us create your password, so you can just worry about getting through the onboarding process!"
              link="https://github.com/Aikeh2021/Employee-Encrypted-Password-Generator"
              site="https://aikeh2021.github.io/Employee-Encrypted-Password-Generator/"
              siteName="Visit Employee Encrypted Password Generator"
              updated="Last updated January 2021"
              image={Encrypted}
              alt="The Employee Encrypted Password Generator Thumbnail"
              skills="Understanding of vanilla Javascript"
            />
            <br />
            <Projects
              title="The Weather Dashboard"
              description="This site was created for travelers who want the most up-to-date information regarding the weather in any city around the globe."
              link="https://github.com/Aikeh2021/Weather-Dashboard-App"
              site="https://aikeh2021.github.io/Weather-Dashboard-App/"
              siteName="Visit The Weather Dashboard"
              updated="Last updated January 2021"
              image={Weather}
              alt="The Weather Dasbhoard Thumbnail"
              skills="Dynamic element generation, knowledge of jQuery, bootstrap styling"
            />
            <br />
            <Projects
              title="The Workday Scheduler"
              description="With so many of the tools we use migrating to online platforms, I think it's time your planner did the same. The Workday Scheduler is perfect for you to plan the average work shift hour by hour."
              link="https://github.com/Aikeh2021/work-day-scheduler"
              site="https://aikeh2021.github.io/work-day-scheduler/"
              siteName="Visit The Workday Scheduler"
              updated="Last updated January 2021"
              image={Scheduler}
              alt="The Worday Scheduler Thumbnail"
              skills="Incorporation of modules like moment, implementation of local storage"
            />
            <br />
            <Projects
              title="Budget Tracker"
              description="This service allows users to input a name or short description of a purchase and add or subtract the amount spent. The website provides users with a graph that contains nodes that allow the user to see what was purchased or added to an account over a certain period of time. In addition, this application can be downloaded and used offline!"
              link="https://github.com/Aikeh2021/Budget-Tracker-PWA"
              site="https://young-peak-40815.herokuapp.com/"
              siteName="Visit Budget Tracker"
              updated="Last updated January 2021"
              image={Budget}
              alt="Budget Tracker Thumbnail"
              skills="Making an application progressive through use of a manifest, service-working, and API cacheing"
            />
            <br />
            <Projects
              title="Employee Directory"
              description="There's nothing more helpful than having a directory of your employees' information complete with a picture of each of their smiling faces! The Employee Directory gives you a way to store information about your staff in a neat and easy to follow website. "
              link="https://github.com/Aikeh2021/employee-directory"
              site="https://aikeh2021.github.io/employee-directory/"
              siteName="Visit Employee Directory"
              updated="Last updated February 2021"
              image={Directory}
              alt="Employee Directory Thumbnail"
              skills="React front end development, axios npm for use with API calls, effective use of useState and useEffect hooks "
            />
          </div>
        </div>
        <br />
        <br />
        <br />
      </div>
    </div>
  );
};

export default ProjectsPage;
