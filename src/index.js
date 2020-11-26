import React, {useState} from 'react';
import PropTypes from 'prop-types';
import ReactDom from 'react-dom';
import {DiceGraph} from "./DiceGraph";
import {RollInput} from "./RollInput";
import styled from 'styled-components';

// export const MOBILE_SIZE = 650;

const Container = styled.div`
  display:flex;
  flex-flow: row;
  width:100%;
  @media(max-width: 650px){
    flex-flow: column;
    align-items: center;
  }
`;

const Index = ({...props}) => {
  let [rolls, setRolls] = useState([]);
  return <Container>
    <RollInput update={setRolls}/>
    <DiceGraph rolls={rolls}/>
  </Container>;
};

Index.propTypes = {};

ReactDom.render(<Index/>, document.getElementById("root"));
