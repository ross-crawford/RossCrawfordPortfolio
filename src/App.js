import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";
import Background from "./components/Background";

const App = () => {
  return (
    <div>
      <div className="nav">
        <Router>
          <ul>
            <li>
              <Link to={process.env.PUBLIC_URL + "/"} className="nav-link">
                Home
              </Link>
            </li>
            <li>
              <Link
                to={process.env.PUBLIC_URL + "/projects"}
                className="nav-link"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link to={process.env.PUBLIC_URL + "/about"} className="nav-link">
                About
              </Link>
            </li>
            <li>
              <Link
                to={process.env.PUBLIC_URL + "/contact"}
                className="nav-link"
              >
                Contact
              </Link>
            </li>
          </ul>

          <div className="content">
            <Switch>
              <Route exact path={process.env.PUBLIC_URL + "/"}>
                <Home />
              </Route>
              <Route exact path={process.env.PUBLIC_URL + "/projects"}>
                <Projects />
              </Route>
              <Route path={process.env.PUBLIC_URL + "/about"}>
                <About />
              </Route>
              <Route path={process.env.PUBLIC_URL + "/contact"}>
                <Contact />
              </Route>
            </Switch>
          </div>
        </Router>
      </div>
      <Background />
    </div>
  );
};

export default App;
