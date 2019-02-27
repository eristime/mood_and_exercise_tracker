/* eslint-disable linebreak-style */
/* eslint-disable no-multiple-empty-lines */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable semi */
/* eslint-disable no-unused-vars */
import React from 'react';

import BarChart from './BarChart';


export default class BarChartContainer extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      exerciseData: exerciseData,
      happinessData: happinessData
    };
  }

  render () {
    return (
      <BarChart
        exerciseData={this.state.exerciseData}
        happinessData={this.state.happinessData}
        title="January"
      />
    );
  }
}


const exerciseData = [
  {
    x: 15, y: 20
  },
  {
    x: 25, y: 30
  },
  {
    x: 35, y: 65
  },
  {
    x: 40, y: 50
  },
  {
    x: 45, y: 40
  },
  {
    x: 50, y: 30
  }
];

const happinessData = [
  {
    x: 2, y: 3
  },
  {
    x: 4, y: 5
  },
  {
    x: 10, y: 20
  },
  {
    x: 33, y: 22
  },
  {
    x: 45, y: 40
  },
  {
    x: 50, y: 30
  }
];
