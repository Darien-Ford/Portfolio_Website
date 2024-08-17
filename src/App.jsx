import "./App.css";
import {
  Header,
  Hero,
  About,
  Experience,
  Projects,
  Contact,
  Footer,
} from "./components";

function App() {
  return (
    <div className="app">
      <div className="background1">
        <Header />
        <Hero />
        <About />
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
