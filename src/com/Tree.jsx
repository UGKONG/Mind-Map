import React from 'react';
import Styled from 'styled-components';

const TreeComponent = () => {
  return (
    <Tree>
      <Title></Title>
      <Sub></Sub>
    </Tree>
  )
}

export default TreeComponent;

const Tree = Styled.section`
  display: flex;
  align-items: center;
`;
const Title = Styled.div`
  padding: 10px;
  margin: 5px 20px;
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
    background-color: #ffff00;
  }
`;
const Sub = Styled.div`

`;