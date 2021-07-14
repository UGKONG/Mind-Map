import React, { useState, useEffect, useContext } from 'react';
import Styled from 'styled-components';
import TreeComponent from './com/Tree';

function App () {
  
  const [mousePosition, setMousePosition] = useState([0, 0]);
  const [mouseStart, setMouseStart] = useState([0, 0]);
  const [mouseDown, setMouseDown] = useState(false);

  const MouseDown = () => {
    setMouseStart([0, 0]);
    setMouseDown(true);
  }

  const MouseUp = () => {
    setMouseStart([0, 0]);
    setMouseDown(false);
  }

  const MouseMove = (event) => {
    let x = event.pageX;
    let y = event.pageY;
    setMousePosition([x, y]);
  }

  return (
    <Main id="main"
      onMouseDown={MouseDown}
      onMouseUp={MouseUp}
      onMouseMove={MouseMove}
    >

      <Tree>
        <Title>시작</Title>
        <Sub>
          <Tree>
            <Title>다시 시작</Title>
            <Sub>
              <Tree>
                <Title>List1</Title>
                <Sub>

                </Sub>
              </Tree>
              <Tree>
                <Title>List2</Title>
                <Sub>

                </Sub>
              </Tree>
              <Tree>
                <Title>List3</Title>
                <Sub>

                </Sub>
              </Tree>
            </Sub>
          </Tree>
        </Sub>
      </Tree>

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
  display: flex;
  align-items: center;
  justify-content: center;
  & * {
    transition: .3s;
  }
`;
const Tree = Styled.section`
  display: flex;
  align-items: center;
`;
const Title = Styled.div`
  padding: 10px;
  margin: 20px;
  border: 1px solid red;
`;
const Sub = Styled.div`

`;