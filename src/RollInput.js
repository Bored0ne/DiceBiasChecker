import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';

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
    <div style={{display: 'flex', flexFlow: 'row nowrap'}}>
      <input type="number"
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
      <button onClick={add}>add</button>
      <button onClick={clear}>clear</button>
    </div>
    <table>
      <thead>
      <th>roll</th>
      <th>delete</th>
      </thead>
      <tbody>
      {rolls.map((roll, index) => {
        return <tr key={index}>
          <td>{roll}</td>
          <td>
            <button onClick={() => {
              deleteRoll(index);
            }}>X
            </button>
          </td>
        </tr>
      })}
      </tbody>
    </table>
  </div>;
};

RollInput.propTypes = {};

export {RollInput};
