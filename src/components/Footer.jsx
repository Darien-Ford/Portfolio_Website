import "./styles/Footer.css";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import hostingerLogo from "./assets/hostinger.svg";

const Footer = () => {
  return (
    <div className="footer">
      <div className="credits">
        <h4>Technologies Used: </h4>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://www.hostinger.com" target="_blank">
          <img src={hostingerLogo} className="logo" alt="Vite logo" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
