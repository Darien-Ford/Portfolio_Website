import "./styles/Projects.css";
import { projects } from "../data";

const Projects = () => {
  return (
    <div className="projects" id="projects">
      <h2 className="heading">My Projects</h2>
      <div className="container">
        <div className="projectGrid">
          {projects.map((project, index) => (
            <div key={"project-$" + { index }} className="card">
              <h4>{project.title}</h4>
              <div className="card-contents">
                <a href={project.link}>
                  <img src={project.image} width="600px" height="auto" />
                </a>
                <div className="card-details">
                  {project.info.map((info, index) => (
                    <p key={"project-$" + { index }}>{info}</p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
