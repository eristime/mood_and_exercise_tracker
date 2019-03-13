/* eslint-disable linebreak-style */
/* eslint-disable no-multiple-empty-lines */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable semi */
/* eslint-disable no-unused-vars */
import React from 'react';

import BarChart from './BarChart';
import {formatDate} from '../services/utils';

export default class BarChartContainer extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      exerciseData: exerciseData,
      happinessData: happinessData,
      activinessData: activinessData
    };
  }

  render () {
    return (
      <BarChart
        exerciseData={this.state.exerciseData}
        happinessData={this.state.happinessData}
        activinessData={this.state.activinessData}
        title="March: week 10"
      />
    );
  }
}


const exerciseData = [{
  y: 1.1,
  x: new Date('2019-03-08')
},
{
  y: 7.7,
  x: new Date('2019-03-07')
},
{
  y: 2.3,
  x: new Date('2019-03-06')
},
{
  y: 4.4,
  x: new Date('2019-03-05')
}]


const happinessData = [{
  y: 4,
  x: new Date('2019-03-08')
},
{
  y: 3,
  x: new Date('2019-03-07')
},
{
  y: 4,
  x: new Date('2019-03-06')
},
{
  y: 3,
  x: new Date('2019-03-05')
}]


const activinessData = [{
  y: 3,
  x: new Date('2019-03-08')
},
{
  y: 3,
  x: new Date('2019-03-07')
},
{
  y: 3,
  x: new Date('2019-03-06')
},
{
  y: 2,
  x: new Date('2019-03-05')
}]