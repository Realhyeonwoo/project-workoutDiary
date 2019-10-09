import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import styled from "styled-components";

import Navigation from "./components/Navigation";
import Home from "./containers/HomeContainer";
import SportsList from "./containers/SportsListContainer";

const Div = styled.div`
  width: 100%;
  height: 100vh;
`;
function App() {
  return (
    <Router>
      <Div>
        <Navigation />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/sportslist" component={SportsList} />
          <Route component={Home} />
        </Switch>
      </Div>
    </Router>
  );
}

export default App;
