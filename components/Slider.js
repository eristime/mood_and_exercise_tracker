/* eslint-disable linebreak-style */
/* eslint-disable no-multiple-empty-lines */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable semi */
/* eslint-disable no-unused-vars */
import React from 'react';
import {
  View,
  StyleSheet,
  Slider
} from 'react-native';
import {
  Text,
  H2
} from 'native-base';
import InfoModal from './InfoModal';


export default class CustomSlider extends React.Component {
  state = {
    isModalVisible: false,
  };

  _toggleModal = () => {
    this.setState({ isModalVisible: !this.state.isModalVisible });
  }


  render() {
    const { 
      minValue,
      maxValue,
      text,
      minText,
      maxText,
      style,
      infoText
    } = this.props;
    const defaultValue = this.props.defaultValue || 3;
    const disabled = this.props.disabled ? true : false;

    return (
      <View>

        <View style={[style, styles.mainContainer]}>
          <View style={styles.itemContainer}>
            <H2>{text}</H2>
            <InfoModal
              text={infoText}
            />
          </View>

          <View style={styles.itemContainer}>
            <Text>{minText}</Text>
            <Text>{maxText}</Text>
          </View>
          <Slider
            style={{ alignSelf: 'stretch', marginVertical: 10 }}
            minimumValue={minValue}
            maximumValue={maxValue}
            value={defaultValue}
            step={1}
            onValueChange={val => console.log(val)}
            onSlidingComplete={ val => console.log('SLide completed')}
            disabled={disabled}
          />

          <View style={styles.itemContainer}>
            <Text>{minValue}</Text>
            <Text>{maxValue}</Text>
          </View>
        </View>
      </View>
    );
  }
}


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
