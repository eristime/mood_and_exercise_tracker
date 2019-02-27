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
        <H2>February</H2>
        <Icon name="arrow-dropright" />
      </View>

      <VictoryChart
        theme={VictoryTheme.material}
        domainPadding={5}
      >
        <VictoryGroup>
          <VictoryLine
            data={[
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
            ]}
          />
          <VictoryLine
            data={[
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
            ]}
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
