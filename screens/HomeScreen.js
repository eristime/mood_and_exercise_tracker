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
  Button,
  Container,
  CheckBox,
  Header,
  Title,
  Content,
  Icon,
  Right,
  Body,
  Tab,
  Tabs,
  Fab,
  TabHeading,
  ListItem,
  Text,
} from 'native-base';
import ActionButton from 'react-native-action-button';
import BarChartContainer from '../components/BarChartContainer';
import ChartOption from '../components/ChartOption';


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

        <ActionButton buttonColor="rgba(231,76,60,1)" style={styles.fabButton}>
          <ActionButton.Item buttonColor='#9b59b6' title="Add a reminder" onPress={() => console.log("notes tapped!")}>
            <Icon name="time" style={styles.actionButtonIcon} />
          </ActionButton.Item>
          <ActionButton.Item buttonColor='#3498db' title="Rate your day" onPress={() => {}}>
            <Icon name="body" style={styles.actionButtonIcon} />
          </ActionButton.Item>
        </ActionButton>
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
