import React from "react";
import { Switch, Route, Redirect } from "react-router";

import Title from "./components/TitleScreen/Title.jsx";
import Planets from "./components/Planets/Planets.jsx";
const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Title} />
      <Route path="/planets" component={Planets} />
      <Redirect from="*" to="/" />
    </Switch>
  );
};

export default Routes;
