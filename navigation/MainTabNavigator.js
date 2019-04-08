/* eslint-disable no-multiple-empty-lines */
/* eslint-disable semi */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import {
  createStackNavigator,
  createBottomTabNavigator
} from 'react-navigation';
import {
  Footer,
  FooterTab,
  Button,
  Icon,
  Text
} from 'native-base';
import HomeScreen from '../screens/HomeScreen';
import JournalScreen from '../screens/Journal';
import AddReminderScreen from '../screens/AddReminderScreen';
import ChangeReminderScreen from '../screens/ChangeReminderScreen';
import ChooseMoodInputScreen from '../screens/ChooseMoodInputScreen';
import JournalDetailScreen from '../screens/JounalDetailScreen';
import AddCameraMoodScreen from '../screens/AddCameraMoodScreen';
import PhotoToGoogleVisionScreen from '../screens/PhotoToGoogleVisionScreen';


const HomeStack = createStackNavigator({
  Home: HomeScreen,
  AddReminder: AddReminderScreen,
  ChangeReminder: ChangeReminderScreen,
  ChooseMoodInput: ChooseMoodInputScreen,
  AddCameraMood: AddCameraMoodScreen,
  JournalDetail: JournalDetailScreen,
  PhotoToGoogleVision: PhotoToGoogleVisionScreen
});


const JournalsStack = createStackNavigator({
  Journal: JournalScreen,
  JournalDetail: JournalDetailScreen,
  AddReminder: AddReminderScreen,
  ChangeReminder: ChangeReminderScreen,
  ChooseMoodInput: ChooseMoodInputScreen,
  AddCameraMood: AddCameraMoodScreen,
  PhotoToGoogleVision: PhotoToGoogleVisionScreen
});

// show tabBar only in Home and Journal Screens
HomeStack.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;
  if (navigation.state.index > 0) {
    tabBarVisible = false;
  }

  return {
    tabBarVisible,
  };
};

JournalsStack.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;
  if (navigation.state.index > 0) {
    tabBarVisible = false;
  }

  return {
    tabBarVisible,
  };
};


export default createBottomTabNavigator({
  HomeStack,
  JournalsStack
},
{
  tabBarComponent: props => (
    <Footer>
      <FooterTab>
        <Button
          vertical
          // active={props.navigationState.index === 0}
          onPress={() => props.navigation.navigate('Home')}
        >
          <Icon name="home" />
          <Text>Home</Text>
        </Button>

        <Button
          vertical
          // active={props.navigationState.index === 1}
          onPress={() => props.navigation.navigate('Journal')}
        >
          <Icon name="paper" />
          <Text>Journal</Text>
        </Button>
      </FooterTab>
    </Footer>
  )
});
