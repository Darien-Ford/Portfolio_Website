import "./styles/Experience.css";
import { career, education } from "../data";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import {
  msuLogo,
  pythonLogo,
  cppLogo,
  cLogo,
  sqlLogo,
  linuxLogo,
  windowsLogo,
} from "./assets";

const Experience = () => {
  return (
    <div className="experience" id="experience">
      <h2 className="heading">My Experience</h2>
      <div className="career">
        <VerticalTimeline>
          {career.map((career, index) => (
            <VerticalTimelineElement
              key={"career-$" + { index }}
              className="vertical-timeline-element--work"
              contentStyle={{
                background: "--background-light",
                color: "white",
              }}
              date={career.tenure}
            >
              <h2 className="vertical-timeline-element-title">
                {career.title}
              </h2>
              <h3 className="vertical-timeline-element-subtitle">
                {career.organization}
              </h3>
              {career.info.map((info, index) => (
                <p
                  key={"career-$" + { index }}
                  className="vertical-timeline-element-info"
                >
                  {info}
                </p>
              ))}
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
      <div className="otherExperience">
        <div className="education">
          <div className="container">
            <div className="education-info">
              <div className="card">
                <a
                  href="https://engineering.msu.edu/about/departments/cse"
                  target="_blank"
                >
                  <img
                    className="msu-logo"
                    src={msuLogo}
                    width="auto"
                    height="120px"
                    title="MSU College of Engineering - CSE"
                  />
                </a>
              </div>
              <div className="education-details">
                <h2 className="education-institution">
                  {education.institution}
                </h2>
                <h3 className="education-major">
                  {education.degree} in {education.major}
                </h3>
                <h4 className="education-minor">Minor in {education.minor}</h4>
                <p className="education-date">
                  Graduated {education.graduated}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="skills">
          <div className="container">
            <div className="card">
              <a href="https://en.cppreference.com/w/cpp" target="_blank">
                <img
                  src={cppLogo}
                  width="auto"
                  height="80px"
                  title="cppreference.com"
                />
              </a>
            </div>
            <div className="card">
              <a href="https://en.cppreference.com/w/c" target="_blank">
                <img
                  src={cLogo}
                  width="auto"
                  height="80px"
                  title="cppreference.com/C"
                />
              </a>
            </div>
            <div className="card">
              <a href="https://www.python.org/" target="_blank">
                <img
                  src={pythonLogo}
                  width="auto"
                  height="80px"
                  title="python.org"
                />
              </a>
            </div>
            <div className="card">
              <a href="https://en.wikipedia.org/wiki/SQL" target="_blank">
                <img
                  src={sqlLogo}
                  width="auto"
                  height="70px"
                  title="SQL Wikipedia"
                />
              </a>
            </div>
            <div className="card">
              <a href="https://www.linux.org/" target="_blank">
                <img
                  src={linuxLogo}
                  width="auto"
                  height="80px"
                  title="linux.org"
                />
              </a>
            </div>
            <div className="card">
              <a
                href="https://www.microsoft.com/en-us/windows?r=1"
                target="_blank"
              >
                <img
                  src={windowsLogo}
                  width="auto"
                  height="70px"
                  title="microsoft.com"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
