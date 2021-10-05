import React from 'react';
import { Switch, Route, Redirect } from 'react-router';
import Title from './components/TitleScreen/Title.jsx';
import Planets from './components/Planets/Planets.jsx';
import IndividualPlanet from './components/Planets/individualPlanet/IndividualPlanet.jsx';
import Selector from './components/Selector/Selector.jsx';

const Routes = () => {
  return (
    <Switch>
      <Route exact path='/' component={Title} />
      <Route exact path='/planets' component={Planets} />
      <Route path={`/planets/:planetId`} component={IndividualPlanet} />
      <Route
        exact
        path='/people'
        render={() => <Selector route='people' title='People' />}
      />
      <Route
        exact
        path='/species'
        render={() => <Selector route='species' title='Species' />}
      />
      <Route
        exact
        path='/films'
        render={() => <Selector route='films' title='Films' />}
      />
      <Route
        exact
        path='/vehicles'
        render={() => <Selector route='vehicles' title='Vehicles' />}
      />
      <Route
        exact
        path='/starships'
        render={() => <Selector route='starships' title='Starships' />}
      />
      <Redirect from='*' to='/' />
    </Switch>
  );
};

export default Routes;
