import "./styles/Footer.css";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import hostingerLogo from "./assets/hostinger.svg";

const Footer = () => {
  return (
    <div className="footer">
      <div className="credits">
        <div className="technologies">
          <h4>Made With</h4>
          <ul>
            <li>
              <a href="https://react.dev" target="_blank">
                <img
                  src={reactLogo}
                  className="logo react"
                  alt="React logo"
                  title="React"
                />
              </a>
            </li>
            <li>
              <a href="https://vitejs.dev" target="_blank">
                <img
                  src={viteLogo}
                  className="logo"
                  alt="Vite logo"
                  title="Vite"
                />
              </a>
            </li>
          </ul>
        </div>
        <div className="hosting">
          <h4>Hosted With</h4>
          <a href="https://www.hostinger.com" target="_blank">
            <img
              src={hostingerLogo}
              className="logo"
              alt="Hostinger logo"
              title="Hostinger"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
