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
  Container,
  Header,
  Content,
  Tab,
  Tabs,
  Text
} from 'native-base';
import BarChartContainer from '../components/BarChartContainer';
import ChartOption from '../components/ChartOption';
import Fab from '../components/Fab';


export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  constructor (props) {
    super(props)
    this.state = {
    };
  }


  render () {
    return (
      <Container>
        <Header fixed hasTabs style={{ height: 0 }} />
        <Content>
          <Tabs locked>
            <Tab heading="Week">
              <BarChartContainer />
            </Tab>
            <Tab heading="Month">
              <BarChartContainer />
            </Tab>
            <Tab heading="3 Months">
              <BarChartContainer />
            </Tab>
            <Tab heading="Year">
              <BarChartContainer />
            </Tab>
          </Tabs>
          <ChartOption text="Exercise" color="blue" />
          <ChartOption text="Activity" color="green" />
          <ChartOption text="Happiness" color="red" />
        </Content>
        <Fab />

      </Container>
    );
  }
}

const styles = StyleSheet.create({
  fabButton: {
    position: 'absolute',
  },
  actionButtonIcon: {
    fontSize: 20,
    height: 30,
    color: 'white'
  }
});
