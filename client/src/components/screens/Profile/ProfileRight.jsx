import React, { useEffect } from "react";
import About from "./subscreens/About";
import Certifications from "./subscreens/Certifications";
import Education from "./subscreens/Education";
import Interests from "./subscreens/Interests";
import ProfileHome from "./subscreens/ProfileHome";
import Projects from "./subscreens/Projects";
import Skills from "./subscreens/Skills";

const ProfileRight = ({ choice }) => {
  const component = () => {
    return choice === "home" ? (
      <ProfileHome />
    ) : choice === "skills" ? (
      <Skills />
    ) : choice === "projects" ? (
      <Projects />
    ) : choice === "interests" ? (
      <Interests />
    ) : choice === "education" ? (
      <Education />
    ) : choice === "about" ? (
      <About />
    ) : (
      <Certifications />
    );
  };
  useEffect(() => {
    component();
  }, [choice]);

  return (
    <>
      {/* <h1>I am Srinath</h1> */}
      {component()}
    </>
  );
};

export default ProfileRight;
