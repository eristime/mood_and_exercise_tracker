/* eslint-disable linebreak-style */
/* eslint-disable no-multiple-empty-lines */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable semi */
/* eslint-disable no-unused-vars */
import React from 'react';
import {
  View,
  StyleSheet
} from 'react-native';
import {
  H2,
  Icon
} from 'native-base';
import {
  VictoryLine,
  VictoryChart,
  VictoryGroup,
  VictoryAxis,
  VictoryZoomContainer,
  VictoryAxisdependentAxis
} from 'victory-native';
import { VictoryTheme } from 'victory-core';


export default class BarChart extends React.Component {


  renderChart = () => {
    /*
    Render lines if data is available.
    */
    const exerciseData = this.props.exerciseData
    const happinessData = this.props.happinessData
    const activinessData = this.props.activinessData

    let exerciseChart = !(exerciseData && exerciseData.length !== 0) ? null:
      <VictoryLine
        data={exerciseData}
        style={{
          data: {
            stroke: "#5FAD56", strokeWidth: "2"
          }
        }}
      />;

      let happinessChart = !(happinessData && happinessData.length !== 0) ? null:
      <VictoryLine
        data={happinessData}
        style={{
          data: {
            stroke: "#F2C14E", strokeWidth: "2"
          }
        }}
      />;

      let activinessChart = !(activinessData && activinessData.length !== 0) ? null:
      <VictoryLine
        data={activinessData}
        style={{
          data: {
            stroke: "#F78154", strokeWidth: "2"
          }
        }}
      />;

    if (true) {
      return (
        <VictoryChart
          theme={VictoryTheme.material}
          domainPadding={5}
          interpolation="cardinal"
          scale={{ x: "time" }}
          domain={{x: [new Date('2019-04-01'), new Date('2019-04-30')], y: [0, 10]}}
        >
          <VictoryGroup>
            {/*   
                    
          <VictoryAxisdependentAxis
                domain={[0, 5]}
                offsetX={50}
                orientation="left"
                standalone={false}
            />
             */}
         
            {exerciseChart}
            {happinessChart}
            {activinessChart}

          </VictoryGroup>
        </VictoryChart>
      );
    }

  }

  render () {

    const e = this.props.exerciseData[0];
    return (
      <View style={{ flex: 1 }}>
        <View style={styles.titleContainer}>
          <Icon name="arrow-dropleft" />
          <H2>{this.props.title}</H2>
          <Icon name="arrow-dropright" />
        </View>
        { this.renderChart() }
        
      </View>
  
    );
  }

};

const styles = StyleSheet.create({
  titleContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 15,
    paddingHorizontal: 20
  }
});

const dummyData = [{
  y: 2,
  x: new Date('2019-04-08')
},
{
  y: 7.7,
  x: new Date('2019-04-07')
}]
