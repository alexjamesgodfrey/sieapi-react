import React from 'react';
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import PrivateRoute from './PrivateRoute.js';
import Home from './Home.js';
import Commission from './Commission.js';
import Blog from './Blog.js';
import About from './About.js';
import './styles/App.scss';
import Admin from './Admin.js';
import AuthProvider from './contexts/AuthContext.js';
import Login from './Login.js';

function App() {

  return (
    <Router>
      <AuthProvider>
        <Switch>
        <PrivateRoute path="/admin" component={Admin} exact />
        <Route path="/login">
            <Login />
        </Route>
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
      </AuthProvider>
    </Router>  
  );

}

export default App;
