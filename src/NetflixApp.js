import React from "react";
import HomeScreen from "./component/HomeScreen";
import "./NetflixApp.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "./component/Dashboard/Dashboard";

const NetflixApp = () => {
  return (
    <div className="netflixApp">
      <Router>
        <Switch>
          <Route exact path="/">
            <Dashboard />
          </Route>
          <Route exact path="/netflix">
            <HomeScreen />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default NetflixApp;
