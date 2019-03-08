/* eslint-disable linebreak-style */
/* eslint-disable no-multiple-empty-lines */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable semi */
/* eslint-disable no-unused-vars */
import React from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

import {
  ListItem,
  Text,
  Icon
} from 'native-base';
import { withNavigation } from 'react-navigation';
import { formatDate } from '../services/utils';


const JournalItem = (props) => {
  const { exercise = '--', happiness = '--', activiness = '--' } = props.journalItem;
  const date = formatDate(props.journalItem.date) || '--';
  return (
    <TouchableOpacity
      onPress={
        () => props.navigation.navigate('JournalDetail',
          { journalItem: props.journalItem })
      }
    >

      <ListItem button itemDivider>
        <Text>{date}</Text>
      </ListItem>

      <ListItem
        button
        onPress={
          () => props.navigation.navigate(
            'JournalDetail',
            {
              journalItem: props.journalItem,
              navigation: props.navigation
            }
          )
        }
      >
        <View style={styles.itemContainer}>
          <Icon name="walk" />
          <Text>Exercise</Text>
          <View>
            <Text>{exercise}</Text>
            <Text note>km</Text>
          </View>
        </View>
      </ListItem>

      <ListItem
        onPress={
          () => props.navigation.navigate(
            'JournalDetail',
            {
              journalItem: props.journalItem,
              navigation: props.navigation
            }
          )
        }
      >
        <View style={styles.itemContainer}>
          <Icon name="happy" />
          <Text>Happiness</Text>
          <View>
            <Text>{happiness}</Text>
            <Text note>/ 5</Text>
          </View>
        </View>
      </ListItem>

      <ListItem
        onPress={
          () => props.navigation.navigate(
            'JournalDetail',
            {
              journalItem: props.journalItem,
              navigation: props.navigation
            }
          )
        }
      >
        <View style={styles.itemContainer}>
          <Icon name="trending-up" />
          <Text>Activiness</Text>
          <View>
            <Text>{activiness}</Text>
            <Text note>/ 5</Text>
          </View>
        </View>
      </ListItem>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  }
});

export default withNavigation(JournalItem);
