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
            // backgroundColor: 'rgba(0, 0, 255, .25)'
          },
          {
            label: '10% cap',
            data: expectedAverageOfRolls.map(val => val + (val * 10 / 100)),
            borderColor: 'green',
            // backgroundColor: 'rgba(255, 0, 0, .25)'
          },
          {
            label: '10% floor',
            data: expectedAverageOfRolls.map(val => val - (val * 10 / 100)),
            borderColor: 'green',
          },
          {
            label: '20% cap',
            data: expectedAverageOfRolls.map(val => val + (val * 20 / 100)),
            borderColor: 'yellow',
            // backgroundColor: 'rgba(255, 0, 0, .25)'
          },
          {
            label: '20% floor',
            data: expectedAverageOfRolls.map(val => val - (val * 20 / 100)),
            borderColor: 'yellow',
          },
          {
            label: '30% cap',
            data: expectedAverageOfRolls.map(val => val + (val * 30 / 100)),
            borderColor: 'red',
            // backgroundColor: 'rgba(255, 0, 0, .25)'
          },
          {
            label: '30% floor',
            data: expectedAverageOfRolls.map(val => val - (val * 30 / 100)),
            borderColor: 'red',
          }
        ],
        labels: Object.getOwnPropertyNames(countOfGroupedRolls)
      }
    })
  }, [rolls, ref])
  return <div style={{width: '90%'}}>
    <canvas ref={ref}/>
  </div>
};

DiceGraph.propTypes = {
  rolls: PropTypes.arrayOf(PropTypes.number)
};

export {DiceGraph};
