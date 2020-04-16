import React from 'react';
import RandomGame from './components/RandomGame';
import styled from 'styled-components';

const Content = styled.div`
  background-color: blue;

`
function App() {
  return (
    <Content className="App">
      <RandomGame/>
    </Content>
  );
}

export default App;
