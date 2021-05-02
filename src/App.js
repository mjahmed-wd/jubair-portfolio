import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Particles from "react-particles-js";
import particlesConfig from "./components/particle-config/particlesjs-config";
import Headers from "./components/Headers/Headers";
import Introduction from "./components/Introduction/Introduction";
import Projects from "./components/Projects/Projects";
import Contacts from "./components/Contacts/Contacts";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import Blog from "./components/Blog/Blog";
import AllProjects from "./components/Projects/AllProjects";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <div style={{ position: "relative", overflow: "hidden" }}>
            <div style={{ position: "absolute" }}>
              <Particles height="100%" width="100vw" params={particlesConfig} />
            </div>
            <Headers />
            <Introduction />
            <Projects />
            <Contacts />
            <Blog />
            <About />
            <Footer />
          </div>
        </Route>
        <Route path="/projects">
          <Headers />
          <AllProjects />
          <Footer />
        </Route>
        <Route path="/blog">
          <Headers />
          <Blog />
          <Footer />
        </Route>
        <Route path="/about">
          <Headers />
          <About />
          <Footer />
        </Route>
        <Route path="/contact">
          <Headers />
          <Contacts />
          <Footer />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
