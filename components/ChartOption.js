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
  CheckBox,
  ListItem,
  Text,
  Body,
  Icon
} from 'native-base';
import { withNavigation } from 'react-navigation';

const ChartOption = (props) => {
  const checked = props.checked || true;

  return (
    <ListItem>
      <CheckBox checked={checked} color={props.color} />
      <Body>
        <View style={styles.itemContainer}>
          <Text style={{ width: 80 }}>{ props.text }</Text>
          <View>
            <View
              style={{
                height: 5,
                width: 40,
                backgroundColor: props.color,
                marginLeft: 10,
                marginRight: 20
              }}
            />
          </View>
          <Icon name="information-circle-outline" />
        </View>
      </Body>
    </ListItem>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center'
  }
});


export default withNavigation(ChartOption);
