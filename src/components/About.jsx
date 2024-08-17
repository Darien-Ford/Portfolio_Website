import "./styles/About.css";
import { about } from "../data";

const About = () => {
  return (
    <div className="about" id="about">
      <h2 className="heading">About Me</h2>
      <div className="content">
        {about.map((about, index) => (
          <h4 key={"about-$" + { index }}>{about}</h4>
        ))}
      </div>
    </div>
  );
};

export default About;
