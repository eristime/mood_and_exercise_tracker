/* eslint-disable linebreak-style */
/* eslint-disable no-multiple-empty-lines */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable semi */
/* eslint-disable no-unused-vars */
import React from 'react';
import BarChart from './BarChart';
import RecordsContext from '../contexts/RecordsContext';

export default class BarChartContainer extends React.Component {


  getData (records, key) {
    /*
    Handle possible nulls in the data.
    */
    const l = records.map((item) => {
      if (
        item &&
        item[key] &&
        parseFloat(item[key]) &&
        item['date'] &&
        new Date(item['date'])
      ) {
        return {
          y: parseFloat(item[key]),
          x: new Date(item.date)
        }
      } else {
        return {
          y: 0,
          x: new Date(item.date)
        }
      }
    })

    // repeat first object since victorgraph doesn't allow only one value
    if (l.length === 1) {
      l.push(l[0]);
    }

    return l;
  }

  render () {

    return (
      <RecordsContext.Consumer>
        {({ records }) => {
          const exerciseData = this.getData(records, 'exercise');
          const happinessData = this.getData(records, 'happiness');
          const activinessData = this.getData(records, 'activiness');
          return <BarChart
            exerciseData={exerciseData}
            happinessData={happinessData}
            activinessData={activinessData}
            title="This week"
          />
        }

        }
      </RecordsContext.Consumer>

    );
  }
}
