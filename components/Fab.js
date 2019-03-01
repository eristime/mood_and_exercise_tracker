/* eslint-disable linebreak-style */
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
  Icon
} from 'native-base';
import ActionButton from 'react-native-action-button';

import { withNavigation } from 'react-navigation';


const Fab = (props) => {

  return (
    <ActionButton buttonColor="rgba(231,76,60,1)" style={styles.fabButton}>
      <ActionButton.Item 
        buttonColor="#9b59b6" 
        title="Add a reminder" 
        onPress={() => props.navigation.navigate('Home')}
      >
        <Icon name="md-time" style={styles.actionButtonIcon} />
      </ActionButton.Item>
      <ActionButton.Item
        buttonColor="#3498db"
        title="Rate your day"
        onPress={() => props.navigation.navigate('AddMood')}
      >
        <Icon name="md-body" style={styles.actionButtonIcon} />
      </ActionButton.Item>
    </ActionButton>
  );
};

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

export default withNavigation(Fab);
