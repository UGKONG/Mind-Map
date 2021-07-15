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
        <Title>부평 스마트 커뮤니티 플랫폼</Title>
        <Sub>
          <Tree>
            <Title>메뉴</Title>
            <Sub>
              
              <Tree>
                <Title>부평 11번가</Title>
                <Sub>

                  <Tree>
                    <Title>굴포천 재생사업</Title>
                    <Sub>

                    </Sub>
                  </Tree>
                  <Tree>
                    <Title>혁신센터 및 푸드플랫폼 구축 사업</Title>
                    <Sub>

                    </Sub>
                  </Tree>
                  <Tree>
                    <Title>굴포 먹거리타운 사업</Title>
                    <Sub>

                    </Sub>
                  </Tree>


                </Sub>
              </Tree>

              <Tree>
                <Title>뉴딜참여</Title>
                <Sub>

                  <Tree>
                    <Title>공지사항</Title>
                    <Sub>

                    </Sub>
                  </Tree>
                  <Tree>
                    <Title>도시재생대학</Title>
                    <Sub>

                    </Sub>
                  </Tree>
                  <Tree>
                    <Title>주민공모사업</Title>
                    <Sub>

                    </Sub>
                  </Tree>
                  <Tree>
                    <Title>설문조사</Title>
                    <Sub>

                    </Sub>
                  </Tree>
                  <Tree>
                    <Title>주민공동체</Title>
                    <Sub>

                    </Sub>
                  </Tree>

                </Sub>
              </Tree>

              <Tree>
                <Title>재생사업정보</Title>
                <Sub>

                </Sub>
              </Tree>

              <Tree>
                <Title>상권활성화</Title>
                <Sub>

                </Sub>
              </Tree>

              <Tree>
                <Title>스마트시티</Title>
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
  /* padding: 400px; */
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
  padding-bottom: 10px;
`;
const Title = Styled.div`
  padding: 4px 10px;
  margin: 4px 30px;
  white-space: nowrap;
  /* border: 1px solid red; */
  position: relative;
  &::before {
    content: '';
    display: block;
    width: 100%;
    height: 4px;
    border-radius: 10px;
    position: absolute;
    bottom: 0;
    left: 0;
    background-color: #efef00;
  }
`;
const Sub = Styled.div`

`;