import React from 'react';
import { Route, Switch, Redirect } from "react-router-dom";

import About from "./views/About/About.js";
import NearMe from "./views/NearMe/NearMe.js";
import NotFound from "./views/NotFound/NotFound.js";
import Resources from "./views/Resources/Resources.js";
import SafetyTips from "./views/SafetyTips/SafetyTips.js";

import NavBar from "./components/NavBar/NavBar.js";

const App = () => {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/about" component={About} />
        <Route exact path="/nearme" component={NearMe} />
        <Route exact path="/resources" component={Resources} />
        <Route exact path="/safetytips" component={SafetyTips} />
        <Route exact path="/">
          <Redirect to="/nearme" />
        </Route>
        <Route component={NotFound} />
        {/* The switch case allows us to go through the different views as directed by the routes.*/}
      </Switch>
    </div>
  );
};

export default App;
