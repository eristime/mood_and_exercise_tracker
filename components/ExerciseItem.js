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
  Text,
  H2
} from 'native-base';
import InfoModal from './InfoModal';


const ExerciseItem = (props) => {
  const { 
    exercise = 0,
    steps = 0
  } = props;
  return (
    <View style={styles.mainContainer}>
      <View style={styles.itemContainer}>
        <H2>Exercise</H2>
        <InfoModal
          text="THis is exercise"
        />
      </View>
      <View style={styles.itemContainer}>
        <Text>{exercise} km</Text>
        <Text>{steps} steps</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center'
  },
  itemContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 5
  }
});

export default ExerciseItem;
