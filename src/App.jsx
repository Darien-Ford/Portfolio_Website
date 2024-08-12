import "./App.css";
import {
  Header,
  Hero,
  Experience,
  Projects,
  Contact,
  Footer,
} from "./components";

function App() {
  return (
    <div>
      <div className="background1">
        <Header />
        <Hero />
        <Experience />
      </div>
      <div className="background2">
        <Projects />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
