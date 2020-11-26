import React, {useEffect, useRef} from 'react';
import Chart from 'chart.js';
import PropTypes from 'prop-types';
import {getRollGrouping} from "./getRollGrouping";

const DiceGraph = ({rolls = [2, 2, 3, 4, 5, 2, 2, 2, 2, 2, 2, 2, 2]}) => {
  const countOfGroupedRolls = getRollGrouping(rolls);

  const expectedAverageOfRolls = Object.entries(countOfGroupedRolls).map(() => {
    return rolls.length / Math.max(...rolls);
  })

  console.log(countOfGroupedRolls, expectedAverageOfRolls)
  const ref = useRef(null);
  useEffect(() => {
    console.log(ref);
    new Chart(ref.current, {
      type: "line",
      data: {
        datasets: [
          {
            label: 'Actual rolls',
            data: Object.values(countOfGroupedRolls),
            borderColor: 'rgb(0, 0, 255)',
            backgroundColor: 'rgba(0, 0, 255, .25)'
          },
          {
            label: 'expected average',
            data: expectedAverageOfRolls,
            // type: 'line',
            borderColor: 'red',
            backgroundColor: 'rgba(255, 0, 0, .25)'
          }
        ],
        labels: Object.getOwnPropertyNames(countOfGroupedRolls)
      }
    })
  }, [rolls, ref])
  return <div style={{width: '100%'}}>
    <canvas ref={ref}/>
  </div>
};

DiceGraph.propTypes = {
  rolls: PropTypes.arrayOf(PropTypes.number)
};

export {DiceGraph};
