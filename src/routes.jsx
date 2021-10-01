import React from "react";
import { Switch, Route, Redirect } from "react-router";

import Title from "./components/TitleScreen/Title.jsx";
import Planets from "./components/Planets/Planets.jsx";
import IndividualPlanet from "./components/Planets/individualPlanet/IndividualPlanet.jsx";
const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Title} />
      <Route path="/planets" component={Planets} />
      <Route exact path="/planets/:id" component={IndividualPlanet} />
      <Redirect from="*" to="/" />
    </Switch>
  );
};

export default Routes;
