import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const InputContainer = styled.div`
 display: flex;
 flex-flow: row nowrap;
 ${({isMobile}) => isMobile && `  
  flex-flow: column nowrap; 
 `}
`;
const ResponsiveInput = styled.input`
  ${({isMobile}) => isMobile && `
    width: 95vw;
    height: 5vh;
  `}
`;
const ResponsiveButton = styled.button`
  ${({isMobile}) => isMobile && `
    height: 5vh;
    font-size: 4vh;
    //width: 100vw;
  `}
`
const ResponsiveTableContainer = styled.div`
  width: 100%;
  height: fit-content;
  ${({isMobile}) => isMobile && `
    max-height: 40vh;
    width: 100%;
    overflow-y: scroll;
  `}
`
const BorderedTD = styled.td`
border: 1px solid gray;
`;

const ResponsiveTable = styled.table`
  text-align: center;
  ${({isMobile}) => isMobile && `
    font-size: 4vh;
    width: 100%;
 `}
  
`

const RollInput = ({update, isMobile}) => {
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
    <InputContainer
      isMobile={isMobile}>
      <ResponsiveInput
        isMobile={isMobile}
        type="number"
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
      <ResponsiveButton
        isMobile={isMobile}
        onClick={add}>add</ResponsiveButton>
      <ResponsiveButton
        isMobile={isMobile}
        onClick={clear}>clear</ResponsiveButton>
    </InputContainer>
    <ResponsiveTableContainer
      isMobile={isMobile}>
      <ResponsiveTable
        isMobile={isMobile}>
        <thead>
        <th>roll</th>
        <th>delete</th>
        </thead>
        <tbody>
        {rolls.map((roll, index) => {
          return <tr key={index}>
            <BorderedTD
              isMobile={isMobile}>{roll}</BorderedTD>
            <BorderedTD>
              <ResponsiveButton
                isMobile={isMobile}
                onClick={() => {
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
