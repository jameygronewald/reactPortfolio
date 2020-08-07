import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css'
import About from "./containers/About/About";
import Contact from "./containers/Contact/Contact";
import Portfolio from "./containers/Portfolio/Portfolio";
import NoMatch from "./containers/NoMatch/NoMatch";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Router>
        <Switch>
          <Route exact path="/" component={About} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route component={NoMatch} />
        </Switch>
      </Router>
      <Footer />
    </>
  );
}

export default App;
