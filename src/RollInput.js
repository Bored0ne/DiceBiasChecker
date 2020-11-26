import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {MOBILE_SIZE} from "./index";

const InputContainer = styled.div`
 display: flex;
 flex-flow: row nowrap;
 @media(max-width: 650px){
  flex-flow: column nowrap; 
 }
`;
const ResponsiveInput = styled.input`
  @media(max-width: 650px){
    width: 95vw;
    height: 5vh;
  }
`;
const ResponsiveButton = styled.button`
  @media(max-width: 650px){
    height: 5vh;
    font-size: 4vh;
    //width: 100vw;
  }
`
const ResponsiveTableContainer = styled.div`
  @media(max-width: 650px){
    max-height: 40vh;
    width: 100%;
    overflow-y: scroll;
  }
  width: 100%;
  height: fit-content;
`
const BorderedTD = styled.td`
border: 1px solid gray;
`;

const ResponsiveTable = styled.table`
 @media(max-width: 650px){
  font-size: 4vh;
  width: 100%;
 }
  text-align: center;
`

const RollInput = ({update}) => {
  let [rolls, setRolls] = useState([]);
  useEffect(() => {
    update(rolls);
  }, [rolls])

  let [currentRoll, setCurrentRoll] = useState("");

  const deleteRoll = (index) => {
    rolls.splice(index, 1)
    setRolls([...rolls]);
  }
  const clear = () => {
    setRolls([]);
  }
  const add = () => {
    if (currentRoll != "") {
      setRolls([...rolls, currentRoll]);
      setCurrentRoll('');
    }
  }

  return <div>
    <InputContainer>
      <ResponsiveInput type="number"
                       value={currentRoll}
                       onChange={({target}) => {
                         setCurrentRoll(target.value)
                       }}
                       onKeyDown={event => {
                         if (event.keyCode == '13') {
                           add()
                         }
                       }}
      />
      <ResponsiveButton onClick={add}>add</ResponsiveButton>
      <ResponsiveButton onClick={clear}>clear</ResponsiveButton>
    </InputContainer>
    <ResponsiveTableContainer>
      <ResponsiveTable>
        <thead>
        <th>roll</th>
        <th>delete</th>
        </thead>
        <tbody>
        {rolls.map((roll, index) => {
          return <tr key={index}>
            <BorderedTD>{roll}</BorderedTD>
            <BorderedTD>
              <ResponsiveButton onClick={() => {
                deleteRoll(index);
              }}>X
              </ResponsiveButton>
            </BorderedTD>
          </tr>
        })}
        </tbody>
      </ResponsiveTable>
    </ResponsiveTableContainer>
  </div>;
};

RollInput.propTypes = {};

export {RollInput};
