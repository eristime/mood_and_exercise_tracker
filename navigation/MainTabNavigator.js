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
import AddMoodScreen from '../screens/AddMoodScreen';
import AddReminderScreen from '../screens/AddReminderScreen';


const HomeStack = createStackNavigator({
  Home: HomeScreen,
  AddMood: AddMoodScreen,
  AddReminder: AddReminderScreen
});


const JournalsStack = createStackNavigator({
  Journal: JournalScreen,
  AddMood: AddMoodScreen,
  AddReminder: AddReminderScreen
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
