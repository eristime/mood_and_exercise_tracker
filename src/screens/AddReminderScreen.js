/* eslint-disable linebreak-style */
/* eslint-disable no-multiple-empty-lines */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable semi */
/* eslint-disable no-unused-vars */

import React from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Alert
} from 'react-native';
import {
  Constants,
  Notifications,
  Permissions
} from 'expo';
import {
  Body,
  Title,
  Button,
  Container,
  Header,
  Content,
  Left,
  Icon,
  H3,
  Text,
  Form
} from 'native-base';
import DateTimePicker from 'react-native-modal-datetime-picker';
import { convertToHoursMinutes } from '../services/utils';
import DefaultText from '../components/text/DefaultText';
import deviceStorage from '../services/deviceStorage';

export default class AddReminderScreen extends React.Component {

  static navigationOptions = {
    header: null
  };

  constructor (props) {
    super(props)
    this.state = {
      isTimePickerVisible: false,
      chosenTime: new Date(),
      previousReminder: false,
      loading: true
    };
  }

  async componentDidMount () {
    // asking for Notification permissions for ios devices
    const result = await Permissions.askAsync(Permissions.NOTIFICATIONS);

    if (Constants.isDevice && result.status === 'granted') {
      console.log('Notification permissions granted.')
    }

    Notifications.addListener(this.handleNotification);

    // get previous notification from db
    const reminder = await deviceStorage.loadReminder();
    console.log('reminder componentdidmount', reminder);

    if (reminder){
      this.setState({chosenTime: new Date(reminder['chosenTime'])});
      this.setState({previousReminder: true});
    }
    this.setState({loading: false})
  }

  _showTimePicker = () => this.setState({ isTimePickerVisible: true });

  _hideTimePicker = () => this.setState({ isTimePickerVisible: false });

  _handleTimePicked = (time) => {
    this.setState({ chosenTime: time });
    this._hideTimePicker();
  };


  saveReminder = async () => {
    /* Cancel all previous notifications and add a new one. */


    await Notifications.cancelAllScheduledNotificationsAsync()
    .catch(e => {
      console.log(e);
      Alert.alert(
        'Removing previous notifications failed.'
      );
    })

    const localNotification = {
      title: 'Mood and exercise tracker',
      body: 'Remember to rate your mood today.'
    };

    const schedulingOptions = {
      time: this.state.chosenTime.getTime(),
      repeat: 'day'
    }

    const notificationId = await Notifications.scheduleLocalNotificationAsync(
      localNotification, schedulingOptions
    ).catch(e => Alert.alert(
      'Adding reminder failed.',
      e
    ));
    console.log('notIfication id', notificationId);

    
    await deviceStorage.saveReminder({
      id: notificationId, 
      chosenTime: this.state.chosenTime.toUTCString()
    });

    const reminder = await deviceStorage.loadReminder();
    console.log('id from db', reminder['id']);
    console.log('reminder', reminder);

    // TODO: save notification id and time
    Alert.alert(
      'A reminder added',
      `You will now receive a reminder notification at ${convertToHoursMinutes(this.state.chosenTime)} everyday.`
    );
    this.setState({previousReminder: true})
    //this.props.navigation.replace('ChangeReminder');
  };

  

  deleteReminder = async () => {
    await Notifications.cancelAllScheduledNotificationsAsync()
    .catch((e) => {
      Alert.alert(
        'Removing previous notifications failed.',
        e
      );
    });

    await deviceStorage.removeReminder();
    Alert.alert(
      'Reminder removed',
      'You will not recieve notification anymore.'
    );

    this.setState({ chosenTime: new Date() });
    this.setState({ previousReminder: false });


  };


  handleNotification = () => {
    this.props.navigation.replace('ChooseMoodInput');
    console.log('OK, got your notification.');
  }


  renderButton = () => {
    // if reminder exists, show two buttons
    if (this.state.loading){
      return null;
    }

    if (this.state.previousReminder ) {
      return (
        <View style={[styles.itemContainer, styles.bottomItem, {
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-around'
        }]}>
          <Button
            danger
            onPress={this.deleteReminder}
          >
            <Text>DELETE</Text>
          </Button>
          <Button
            success
            onPress={this.saveReminder}
          >
            <Text>SAVE</Text>
          </Button>
    
        </View>
      );
    } else {
      return (
        <View style={[styles.itemContainer, styles.bottomItem]}>
          <Button
            block
            success
            onPress={this.saveReminder}
          >
            <Text>SAVE</Text>
          </Button>
        </View>
      );

    }
  }

  render () {
    return (
      <Container style={{ flex: 1 }}>
        <Header>
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>Add a reminder</Title>
          </Body>
        </Header>
        <Content style={styles.mainContainer}>
          <Form>
            <H3
              style={[styles.itemContainer]}
            >
              Add a reminder so that you remember to evaluate your mood daily.
            </H3>
            <View style={styles.rowContainer}>
              <DefaultText style={[styles.itemContainer]}>Select time for daily notifications: </DefaultText>
            </View>
            <View style={[styles.itemContainer, styles.rowContainer]}>
              <TouchableOpacity onPress={this._showTimePicker}>
                <Text style={styles.timePickerText}>{convertToHoursMinutes(this.state.chosenTime)}</Text>
              </TouchableOpacity>

              <DateTimePicker
                date={this.state.chosenTime}
                isVisible={this.state.isTimePickerVisible}
                onConfirm={this._handleTimePicked}
                onCancel={this._hideTimePicker}
                mode="time"
              />
            </View>

          </Form>
          { this.renderButton() }
        </Content>

      </Container>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    paddingHorizontal: 15,
    flex: 1
  },
  itemContainer: {
    marginVertical: 15
  },
  rowContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  bottomItem: {
    marginBottom: 20
  },
  timePickerText: {
    fontSize: 26,
    fontWeight: 'bold'
  }
});
