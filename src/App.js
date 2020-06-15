import React from 'react';
import ResponsiveDrawer from './components/Navigation/ResponsiveDrawer';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import LineGraph from './components/Charts/LineGraph';
import PieChart from './components/Charts/PieChart';
import PieChartRight from './components/Charts/PieChartRight';
import Faction from './components/Charts/Faction';
import Qualities from './components/Charts/Qualities'
import Types from './components/Charts/Types';
import HomePage from './components/SetsPage/HomePage';


  function App() {
    return (
      <div className="Routes">
          <Router>
          <ResponsiveDrawer/>
  
          <Switch>
            <Route path="/Sets" component={LineGraph} >
                <LineGraph />
            </Route>
            <Route path="/Classes" component={PieChart}>
                <PieChart />
            </Route>
            <Route path="/Races" component={PieChartRight}>
                <PieChartRight />
            </Route>
            <Route path="/Factions" component={Faction}>
                <Faction />
            </Route>
            <Route path="/Qualities" component={Qualities}>
                <Qualities />
            </Route>
            <Route path="/Types" component={Types}>
                <Types />
            </Route>
            <Route path="/HomePage" component={HomePage}>
                <HomePage />
            </Route>
            
          </Switch>

      </Router>
      </div>
    );
  }



export default App;
