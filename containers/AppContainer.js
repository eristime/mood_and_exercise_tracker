import React from 'react';
import { Pedometer } from "expo";
import AppNavigator from '../navigation/AppNavigator';
import { Record } from '../services/localDB';

export default class AppContainer extends React.Component {
  state = {
    isPedometerAvailable: "checking",
    pastStepCount: 0,
    currentStepCount: 0,
    records: []
  };

  async componentDidMount() {
    this._subscribe();
    Record.init();  // create table if doesn't exist
    //await Record.removeRecords();

    await Record.addRecord(steps=44, activiness=5, happiness=3)
    //.catch( e => console.log(e) );

    const records = await Record.getRecords();
    console.log('records from appcontainer', records);
    this.setState({ records });

  }

  componentWillUnmount() {
    this._unsubscribe();
  }

  _subscribe = () => {
    this._subscription = Pedometer.watchStepCount(result => {
      this.setState({
        currentStepCount: result.steps
      });
    });

    Pedometer.isAvailableAsync().then(
      result => {
        this.setState({
          isPedometerAvailable: String(result)
        });
      },
      error => {
        this.setState({
          isPedometerAvailable: "Could not get isPedometerAvailable: " + error
        });
      }
    );

    const end = new Date();
    const start = new Date();
    start.setDate(end.getDate() - 1);
    Pedometer.getStepCountAsync(start, end).then(
      result => {
        console.log('stepcount', result);
        this.setState({ pastStepCount: result.steps });
      },
      error => {
        this.setState({
          pastStepCount: "Could not get stepCount: " + error
        });
      }
    );
  };

  _unsubscribe = () => {
    this._subscription && this._subscription.remove();
    this._subscription = null;
  };

  render() {
    return (
      <AppNavigator />
    );
  }
}