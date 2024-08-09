import React from "react";
import Links from "./Links";

function About({ bio, github, linkedin }) {
  let bioContent;
  if (bio) {
    bioContent = <p>{bio}</p>;
  }

  return (
    <div id="about">
      <h2>About</h2>
      {bioContent}
      <Links github={github} linkedin={linkedin} />
    </div>
  );
}

export default About;



