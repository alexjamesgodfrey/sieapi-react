import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Home from './Home.js';
import Commission from './Commission.js';
import Blog from './Blog.js';
import About from './About.js';
import './styles/App.scss';

function App() {

  

  return (
    <Router>
      <Switch>
      <Route path="/commission">
          <Commission />
        </Route>
        <Route path="/blog">
          <Blog />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
    
  );

}

export default App;
