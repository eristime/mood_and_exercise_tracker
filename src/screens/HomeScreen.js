/* eslint-disable no-multiple-empty-lines */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable semi */
/* eslint-disable no-unused-vars */
/* eslint-disable linebreak-style */
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
    header: null
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
          <ChartOption
            text="Exercise"
            color="#5FAD56"
            infoText="This is exercise. It's though"
          />
          <ChartOption
            text="Activiness"
            color="#F78154"
            infoText="Activiness describes how active you felt during the day."
          />
          <ChartOption
            text="Happiness"
            color="#F2C14E"
            infoText="Happiness is being happy."
          />
          <View style={{ height: 100 }} />
        </Content>
        <Fab />

      </Container>
    );
  }
}
