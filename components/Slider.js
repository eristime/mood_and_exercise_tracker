/* eslint-disable linebreak-style */
/* eslint-disable no-multiple-empty-lines */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable semi */
/* eslint-disable no-unused-vars */
import React from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Toast,
  Slider,
  ToastAndroid
} from 'react-native';

import {
  Button,
  Text,
  Icon,
  H2,
  H3
} from 'native-base';
import { withNavigation } from 'react-navigation';
import Modal from 'react-native-modal';

/*
export default class CustomSlider extends React.Component {
  state = {
    isModalVisible: false,
  };

  _toggleModal = () =>
    this.setState({ isModalVisible: !this.state.isModalVisible });

  render() {
    return (
      <View style={{ flex: 1 }}>
        <TouchableOpacity onPress={this._toggleModal}>
          <Text>Show Modal</Text>
        </TouchableOpacity>
        <Modal
          style={styles.bottomModal}
          isVisible={this.state.isModalVisible}
          onBackdropPress={this._toggleModal}
        >
          <View style={{ flex: 1, }}>
            <View style={{ backgroundColor: 'white' }}>
              <Text>Hello!</Text>
              <TouchableOpacity onPress={this._toggleModal}>
                <Text>Hide me!</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}
*/
export default class CustomSlider extends React.Component {
  state = {
    isModalVisible: false,
  };

  _toggleModal = () =>
    this.setState({ isModalVisible: !this.state.isModalVisible });

  render() {
    const { minValue, maxValue, text, minText, maxText, style } = this.props;
    return (
      <View style={[style, styles.mainContainer]}>
        <Modal
          style={styles.bottomModal}
          isVisible={this.state.isModalVisible}
          onBackdropPress={this._toggleModal}
        >
          <View style={{ flex: 1}}>
            <View style={{ backgroundColor: 'white' }}>
              <Text>Info</Text>
              <TouchableOpacity onPress={this._toggleModal}>
                <Text>Hide me!</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>

        <View style={styles.itemContainer}>
          <H2>{text}</H2>
          <Button
            icon
            transparent
            onPress={this._toggleModal}
          >
            <Icon name="information-circle-outline" />
          </Button>
        </View>
        
        <View style={styles.itemContainer}>
          <Text>{minText}</Text>
          <Text>{maxText}</Text>
        </View>
        <Slider
          style={{ alignSelf: 'stretch', marginVertical: 10 }}
          minimumValue={minValue}
          maximumValue={maxValue}
          value={3}
          step={1}
          onValueChange={val => console.log(val)}
          onSlidingComplete={ val => console.log('SLide completed')}
        />

        <View style={styles.itemContainer}>
          <Text>{minValue}</Text>
          <Text>{maxValue}</Text>
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
  },
  bottomModal: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 30,
  },
});

//export default withNavigation(CustomSlider);
