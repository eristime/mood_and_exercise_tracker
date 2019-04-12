/* eslint-disable no-multiple-empty-lines */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable semi */
/* eslint-disable no-unused-vars */
/* eslint-disable linebreak-style */
import { AsyncStorage } from 'react-native';

const deviceStorage = {

  saveRecords: async (item) => {
    try {
      await AsyncStorage.setItem('records', JSON.stringify(item));
      console.log('item saved to storage');
    } catch (error) {
      console.log('AsyncStorage Error: ' + error.message);
    }
  },

  loadRecords: async () => {
    try {
      const retrievedItem = await AsyncStorage.getItem('records');
      const result = retrievedItem ? JSON.parse(retrievedItem) : [];
      return result;
    } catch (error) {
      console.log('AsyncStorage Error: ' + error.message);
    }
    return [];
  },

  removeRecords: async () => {
    try {
      await AsyncStorage.removeItem('records');
      console.log('item removed');
    } catch (error) {
      console.log('AsyncStorage Error: ' + error.message);
    }
  },

  saveReminder: async (item) => {
    try {
      await AsyncStorage.setItem('reminder', JSON.stringify(item));
      console.log('reminder saved to storage');
    } catch (error) {
      console.log('AsyncStorage Error: ' + error.message);
    }
  },

  loadReminder: async () => {
    try {
      const retrievedItem = await AsyncStorage.getItem('reminder');
      const result = retrievedItem ? JSON.parse(retrievedItem) : false;
      return result;
    } catch (error) {
      console.log('AsyncStorage Error: ' + error.message);
    }
    return undefined;
  },

  removeReminder: async () => {
    try {
      await AsyncStorage.removeItem('reminder');
      console.log('reminder removed');
    } catch (error) {
      console.log('AsyncStorage Error: ' + error.message);
    }
  },

};

export default deviceStorage;
