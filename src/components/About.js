import React from "react";

const About = () => {
  return (
    <div className="about">
      <h1 className="title">What I do</h1>
      <div className="divider"></div>
      <div className="description">
        Hi, I'm Ross, a front-end Web Developer and Designer based in Glasgow. I
        create responsive websites and deliver amazing user experiences from
        code. <br />
        Here's some of my skills...
      </div>
      <div className="skills">
        <div className="left">
          <p>HTML5</p>
          <p>JavaScript</p>
          <p>Node.js</p>
          <p>Firebase</p>
          <p>UI/UX Design</p>
        </div>
        <div className="right">
          <p>CSS3/SASS</p>
          <p>React</p>
          <p>Express.js</p>
          <p>Git</p>
          <p>Responsive Design</p>
        </div>
      </div>
    </div>
  );
};

export default About;
