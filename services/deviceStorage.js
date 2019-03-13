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
  }

};

export default deviceStorage;
