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
  Text
} from 'native-base';
import { withNavigation } from 'react-navigation';
import InfoModal from './InfoModal';


const ChartOption = (props) => {
  const checked = props.checked || true;

  return (
    <ListItem style={styles.itemContainer}>
      <CheckBox checked={checked} color={props.color} />
      <Text style={{ width: 80 }}>{ props.text }</Text>
      <InfoModal
        text={props.infoText}
      />
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
    </ListItem>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  }
});


export default withNavigation(ChartOption);
