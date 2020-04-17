import React from 'react';
import styled from 'styled-components';
import SwitchGame from './components/SwitchGame';
import SuperNavbar from './components/SuperNavbar'

const Content = styled.div`
  background-color: blue;

`
function App() {
  return (
    <Content className="App">
      <SuperNavbar/>
      <SwitchGame/>
    </Content>
  );
}

export default App;
