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

export default class ChangeReminderScreen extends React.Component {

  static navigationOptions = {
    header: null
  };

  constructor (props) {
    super(props)
    this.state = {
      isTimePickerVisible: false,
      chosenTime: new Date()
    };
  }

  async componentDidMount () {
    // asking for Notification permissions for ios devices
    const result = await Permissions.askAsync(Permissions.NOTIFICATIONS);

    if (Constants.isDevice && result.status === 'granted') {
      console.log('Notification permissions granted.')
    }

    Notifications.addListener(this.handleNotification);

    // TODO: get previous notifications from db
  }

  _showTimePicker = () => this.setState({ isTimePickerVisible: true });

  _hideTimePicker = () => this.setState({ isTimePickerVisible: false });

  _handleTimePicked = (time) => {
    this.setState({ chosenTime: time });
    this._hideTimePicker();
  };


  deleteReminder = async () => {
    await Notifications.cancelAllNotificationsAsync()
      .then((result) => {
        Alert.alert(
          'Reminder notification removed successfully.',
          result
        );
        this.props.navigation.replace('AddReminder');
      })
      .catch((e) => {
        Alert.alert(
          'Removing previous notifications failed.',
          e
        );
      });
  };

  saveReminder = async () => {
    /* Cancel all previous notifications and add a new one. */
    try {
      await Notifications.cancelAllNotificationsAsync();
    } catch (e) {
      console.log(e);
      Alert.alert(
        'Removing previous notifications failed.'
      );
    }


    const localNotification = {
      title: 'Mood and exercise tracker',
      body: 'Remember to rate your mood today'
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

    // TODO: save notification id and time
    this.setState({ previousNotification: true});
    Alert.alert(
      'A reminder added',
      `You will now receive a reminder notification at \
       ${convertToHoursMinutes(this.state.chosenTime)} everyday.`
    );
  };

  handleNotification = () => {
    this.props.navigation.navigate('ChooseMoodInput');
    console.warn('ok! got your notif');
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
            <Title>Change a reminder</Title>
          </Body>
        </Header>
        <Content style={styles.mainContainer}>
          <Form>
            <H3
              style={[styles.itemContainer]}
            >
              You have already set a reminder. Here you can change or remove it.
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
          <View style={[styles.itemContainer, styles.bottomItem, styles.rowContainer]}>
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
    justifyContent: 'space-around'
  },
  bottomItem: {
    marginBottom: 20
  },
  timePickerText: {
    fontSize: 26,
    fontWeight: 'bold'
  }
});
