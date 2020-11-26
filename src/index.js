import React, {useState} from 'react';
import PropTypes from 'prop-types';
import ReactDom from 'react-dom';
import {DiceGraph} from "./DiceGraph";
import {RollInput} from "./RollInput";
import styled from 'styled-components';
import {isMobile} from 'react-device-detect';
// export const MOBILE_SIZE = 650;

const Container = styled.div`
  display:flex;
  flex-flow: row;
  width:100%;
  ${({isMobile}) => isMobile && `  
    flex-flow: column;
    align-items: center;
  `}
`;

const Index = ({...props}) => {
  let [rolls, setRolls] = useState([]);

  return <Container isMobile={isMobile}>
    <RollInput update={setRolls} isMobile={isMobile}/>
    <DiceGraph rolls={rolls} isMobile={isMobile}/>
  </Container>;
};

Index.propTypes = {};

ReactDom.render(<Index/>, document.getElementById("root"));
