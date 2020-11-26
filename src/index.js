import React, {useState} from 'react';
import PropTypes from 'prop-types';
import ReactDom from 'react-dom';
import {DiceGraph} from "./DiceGraph";
import {RollInput} from "./RollInput";

const Index = ({...props}) => {
  let [rolls, setRolls] = useState([]);
  return <div style={{display: 'flex', flexFlow: 'row', width: '100%'}}>
    <RollInput update={setRolls}/>
    <DiceGraph rolls={rolls}/>
  </div>;
};

Index.propTypes = {

};

ReactDom.render(<Index/>, document.getElementById("root"));
