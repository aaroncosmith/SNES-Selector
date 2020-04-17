import React from 'react';
import styled from 'styled-components';
import RandomGame from './components/RandomGame';
import GenesisGame from './components/GenesisGame';
import PCGame from './components/PCGame';
import PlaystationFourGame from './components/PlaystationFourGame';
import SwitchGame from './components/SwitchGame';
import XboxOneGame from './components/XboxOneGame';
import background from './background.jpg';
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom"

const Content = styled.div`
  background-image: url(${background});
  background-position: bottom;
  background-size: 100%;
  background-repeat: repeat-x;
  background-color: black;

`
const Nav = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow:hidden;
  background-color: black;
`

const NavItem = styled.li`
  float: left;
`
const StyledLink = styled(Link)`
    display: block;
    color: white;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
`;

const Logo = styled.h1`
  list-style-type: none;
  margin: 0;
  padding-top: 15px;
  padding-left: 15px;
  overflow:hidden;
  background-color: black;
  color: white;
  font-family: 'Press Start 2P', cursive;
  font-size: 24px;
`


function App() {
  return (
    <Router>
      <Content className="App">
        <Logo>What Game?</Logo>
        <Nav>
          <NavItem>
            <StyledLink to='/'>SNES</StyledLink>
          </NavItem>
          <NavItem>
            <StyledLink to='/genesis'>Genesis</StyledLink>
          </NavItem>
          <NavItem>
            <StyledLink to='/pc'>PC</StyledLink>
          </NavItem>
          <NavItem>
            <StyledLink to='/ps4'>PS4</StyledLink>
          </NavItem>
          <NavItem>
            <StyledLink to='/switch'>Switch</StyledLink>
          </NavItem>
          <NavItem>
            <StyledLink to='/xboxone'>Xbox One</StyledLink>
          </NavItem>
        </Nav>
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
