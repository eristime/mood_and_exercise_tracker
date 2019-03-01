import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { Root } from 'react-native';
import MainTabNavigator from './MainTabNavigator';
import React from 'react';
import AddMoodScreen from '../screens/AddMoodScreen';

// export default AppNavigator () =>
//   <Root>
//     <Navigator />
//   </Root>;
// 
// const Navigator = createAppContainer(createSwitchNavigator({
//   // You could add another route here for authentication.
//   // Read more at https://reactnavigation.org/docs/en/auth-flow.html
//   Main: MainTabNavigator,
// }));
// 
export default createAppContainer(createSwitchNavigator({
  // You could add another route here for authentication.
  // Read more at https://reactnavigation.org/docs/en/auth-flow.html
  Main: MainTabNavigator,
  AddMood: AddMoodScreen
}));
