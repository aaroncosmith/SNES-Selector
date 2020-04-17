import React from 'react';
import styled from 'styled-components';
import RandomGame from './components/RandomGame';
import GenesisGame from './components/GenesisGame';
import PCGame from './components/PCGame';
import PlaystationFourGame from './components/PlaystationFourGame';
import SwitchGame from './components/SwitchGame';
import XboxOneGame from './components/XboxOneGame';
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom"

const Content = styled.div`
  background-color: blue;

`
function App() {
  return (
    <Router>
      <Content className="App">
        <ul>
          <li>
            <Link to='/'>SNES</Link>
          </li>
          <li>
            <Link to='/genesis'>Genesis</Link>
          </li>
          <li>
            <Link to='/pc'>PC</Link>
          </li>
          <li>
            <Link to='/ps4'>PS4</Link>
          </li>
          <li>
            <Link to='/switch'>Switch</Link>
          </li>
          <li>
            <Link to='/xboxone'>Xbox One</Link>
          </li>
        </ul>
        <hr />
        <Switch>
          <Route exact path="/">
            <SNES/>
          </Route>
          <Route exact path="/genesis">
            <Genesis/>
          </Route>
          <Route exact path="/pc">
            <PC/>
          </Route>
          <Route exact path="/ps4">
            <PS4/>
          </Route>
          <Route exact path="/switch">
            <NinSwitch/>
          </Route>
          <Route exact path="/xboxone">
            <XboxOne/>
          </Route>
        </Switch>
      </Content>
    </Router>
  );
}

function SNES() {
  return (
    <RandomGame/>
  );
}

function Genesis() {
  return (
    <GenesisGame/>
  );
}

function PC() {
  return (
    <PCGame/>
  )
}

function PS4() {
  return (
    <PlaystationFourGame/>
  )
}

function NinSwitch() {
  return (
    <SwitchGame/>
  )
}

function XboxOne() {
  return (
    <XboxOneGame/>
  )
}
export default App;
