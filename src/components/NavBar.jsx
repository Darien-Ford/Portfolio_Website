import "./styles/NavBar.css";
import {
  whiteLogo,
  githubWhiteLogo,
  linkedinWhiteLogo,
  resumeIcon,
} from "./assets";
import { Link } from "react-scroll";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import resume from "./assets/resume.pdf";

const NavBar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const closeMenu = () => setClick(false);

  return (
    <nav className="navbar">
      <a href="/" className="logo" onClick={closeMenu}>
        <img src={whiteLogo} />
      </a>

      <div className="hamburger" onClick={handleClick}>
        {click ? (
          <FaTimes size={30} style={{ color: "#ffffff" }} />
        ) : (
          <FaBars size={30} style={{ color: "#ffffff" }} />
        )}
      </div>
      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <ul className="nav-list">
          <li className="nav-element">
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              onClick={closeMenu}
            >
              ABOUT
            </Link>
          </li>
          <li className="nav-element">
            <Link
              to="experience"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              onClick={closeMenu}
            >
              EXPERIENCE
            </Link>
          </li>
          <li className="nav-element">
            <Link
              to="projects"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              onClick={closeMenu}
            >
              PROJECTS
            </Link>
          </li>
          <li className="nav-element">
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              onClick={closeMenu}
            >
              CONTACT
            </Link>
          </li>
        </ul>
        <ul className="nav-links">
          <a
            href={resume}
            className="icon"
            download="Darien_Ford_Resume.pdf"
            target="_blank"
            title="Download My Resume"
          >
            <img src={resumeIcon} />
          </a>

          <a
            href="https://www.linkedin.com/in/darien-ford-b46a1515b/"
            className="icon"
            title="My LinkedIn Profile"
          >
            <img src={linkedinWhiteLogo} />
          </a>
          <a
            href="https://github.com/Darien-Ford"
            className="icon"
            title="My GitHub Account"
          >
            <img src={githubWhiteLogo} />
          </a>
        </ul>
      </ul>
    </nav>
  );
};

export default NavBar;
