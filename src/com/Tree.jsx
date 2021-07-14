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
  margin: 20px;
  border: 1px solid red;
`;
const Sub = Styled.div`

`;