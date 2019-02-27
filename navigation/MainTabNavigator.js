/* eslint-disable react/jsx-filename-extension */
import React from 'react';
// import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import {
  Footer,
  FooterTab,
  Button,
  Icon,
  Text,
} from 'native-base';
// import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';


const HomeStack = createStackNavigator({
  Home: HomeScreen,
});


const LinksStack = createStackNavigator({
  Links: HomeScreen,
});


export default createBottomTabNavigator({
  HomeStack,
  LinksStack,
},
{
  tabBarComponent: (props) => {
    return (
      <Footer>
        <FooterTab>
          <Button
            vertical
            // active={props.navigationState.index === 0}
            onPress={() => props.navigation.navigate("LucyChat")}>
            <Icon name="bowtie" />
            <Text>Home</Text>
          </Button>
          <Button
            vertical
            // active={props.navigationState.index === 1}
            onPress={() => props.navigation.navigate("JadeChat")}>
            <Icon name="briefcase" />
            <Text>Journal</Text>
          </Button>
        </FooterTab>
      </Footer>
    );
  }
});
