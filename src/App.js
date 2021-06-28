import React from "react";
import ReactGA from 'react-ga';
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from "react-router-dom";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Confirm from "./components/Confirm";
import Stylists from "./components/Stylists";
import NotFoundPage from "./components/NotFoundPage";
import ScrollToTop from "./components/ScrollToTop";
import "./App.css";

function initializeReactGA() {
  ReactGA.initialize('UA-156043300-1');
  ReactGA.pageview('/');
}

function App() {
  initializeReactGA();
  return (      
    <Router>
      <ScrollToTop />
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/stylists" component={Stylists}/>
        <Route exact path="/request" component={Contact}/>
        <Route exact path="/confirm" component={Confirm}/>
        <Route path="/404" component={NotFoundPage} />
        <Redirect to="/404" />
      </Switch>
    </Router>
  );
}

export default App;