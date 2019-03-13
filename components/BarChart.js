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
import { withNavigation } from 'react-navigation';
import {
  VictoryLine,
  VictoryChart,
  VictoryGroup,
  VictoryAxis,
  VictoryZoomContainer,
  VictoryAxisdependentAxis
} from 'victory-native';
import { VictoryTheme } from 'victory-core';
import { Svg } from 'expo';

export default class BarChart extends React.Component{
  
  constructor() {
    super();
    this.state = {
      zoomDomain: { x: [new Date(2019, 3, 1), new Date(2019, 3, 10)] }
    };
  }

  handleZoom(domain) {
    this.setState({ zoomDomain: domain });
  }
  render(){
    return (
      <View style={{ flex: 1 }}>
        <View style={styles.titleContainer}>
          <Icon name="arrow-dropleft" />
          <H2>{this.props.title}</H2>
          <Icon name="arrow-dropright" />
        </View>
  
        <VictoryChart
          theme={VictoryTheme.material}
          domainPadding={5}
          interpolation="cardinal"
          scale={{ x: "time" }}
          //containerComponent={
          //  <VictoryZoomContainer
          //    zoomDimension="x"
          //    zoomDomain={this.state.zoomDomain}
          //    //onZoomDomainChange={this.handleZoom.bind(this)}
          //  />
          //}
        >
          <VictoryGroup>
            {/*
          <Svg width={400} height={400}>
            
            <VictoryAxis
              scale="time"
              standalone={false}
              //style={styles.axisYears}
              tickValues={[
                new Date('2019-03-11'),
                new Date('2019-03-10'),
                new Date('2019-03-09'),
                new Date('2019-03-08'),
                new Date('2019-03-07'),
                new Date('2019-03-06'),
                new Date('2019-03-05')
              ]}
              tickFormat={x => x.toLocaleString()}
          />
              </Svg>
                
                    
          <VictoryAxisdependentAxis
                domain={[0, 5]}
                offsetX={50}
                orientation="left"
                standalone={false}
            />
             */}
         
            
     
            <VictoryLine
              data={this.props.exerciseData}
              style={{
                data: {
                  stroke: "#5FAD56", strokeWidth: "2"
                }
              }}
            />

            <VictoryLine
              data={this.props.activinessData}
              style={{
                data: {
                  stroke: "#F78154", strokeWidth: "2"
                }
              }
            }
            />
            <VictoryLine
              data={this.props.happinessData}
              style={{
                data: {
                  stroke: "#F2C14E", strokeWidth: "2"
                }
              }}
            />


          </VictoryGroup>
        </VictoryChart>
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

//export default withNavigation(BarChart);
const TICKVALUES = [
  new Date('2019-03-11'),
  new Date('2019-03-10'),
  new Date('2019-03-09'),
  new Date('2019-03-08'),
  new Date('2019-03-07'),
  new Date('2019-03-06'),
  new Date('2019-03-05')
]