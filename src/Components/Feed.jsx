import React from "react";
import Home from "./Home"
import AboutMe from "./AboutMe";
import Skills from "./Skills";
import Project from "./Project";
import Experience from "./Experience";
import Education from "./Education";
import EmailSection from "./EmailSection";

const Feed = () => {
  return (
    <div className="relative">
      <Home/>
      <AboutMe/>
      <Skills/>
      <Project/>
      <Education/>
      <Experience/>
      <EmailSection/>
    </div>
  );
};

export default Feed;
