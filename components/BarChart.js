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
  Left,
  Right,
  CheckBox,
  ListItem,
  Text,
  Body,
  H2,
  Icon
} from 'native-base';
import { withNavigation } from 'react-navigation';
import {
  VictoryBar,
  VictoryLine,
  VictoryChart,
  VictoryGroup
} from 'victory-native';
import { VictoryTheme } from 'victory-core';


const BarChart = (props) => {

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.titleContainer}>
        <Icon name="arrow-dropleft" />
        <H2>{props.title}</H2>
        <Icon name="arrow-dropright" />
      </View>

      <VictoryChart
        theme={VictoryTheme.material}
        domainPadding={5}
      >
        <VictoryGroup>
          <VictoryLine
            data={props.data1}
          />
          <VictoryLine
            data={props.data2}
          />
        </VictoryGroup>
      </VictoryChart>
    </View>

  );
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


export default withNavigation(BarChart);
