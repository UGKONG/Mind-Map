import React from "react";
import Styled from 'styled-components';

function App() {
  return (
    <Main>
      
    </Main>
  );
}

export default App;

const Main = Styled.main`
  min-width: 100%;
  min-height: 100%;
  padding: 400px;
  position: absolute;
  box-sizing: content-box;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;