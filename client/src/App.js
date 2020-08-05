import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from './containers/About/About';
import Contact from './containers/Contact/Contact';
import Portfolio from './containers/Portfolio/Portfolio';
import NoMatch from './containers/NoMatch/NoMatch';

function App() {
  return (
      <Router>
        <Switch>
          <Route exact path='/' component={About} />
          <Route exact path='/contact' component={Contact} />
          <Route exact path='/portfolio' component={Portfolio} />
          <Route component={NoMatch} />
        </Switch>
      </Router>
  );
}

export default App;
