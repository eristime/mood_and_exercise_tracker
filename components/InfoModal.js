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
  Button,
  Text,
  Icon
} from 'native-base';
import Modal from 'react-native-modal';


export default class InfoModal extends React.Component {
  state = {
    isModalVisible: false
  };

  _toggleModal = () =>
    this.setState({ isModalVisible: !this.state.isModalVisible });

  render() {
    const { text } = this.props;
    return (
      <View>
        <Button
          icon
          transparent
          onPress={this._toggleModal}
        >
          <Icon name="information-circle-outline" />
        </Button>
        <View style={styles.container}>
          <Modal
            style={styles.bottomModal}
            isVisible={this.state.isModalVisible}
            onBackdropPress={this._toggleModal}
          >
            <View style={{ backgroundColor: 'white' }}>
              <View style={styles.modalContent}>
                <Text>{text}</Text>
                <View>
                  <Button
                    transparent
                    info
                    onPress={this._toggleModal}
                  >
                    <Text>OKAY</Text>
                  </Button>
                </View>
              </View>
            </View>
          </Modal>
        </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  bottomModal: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 30
  },
  modalContent: {
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 15
  },
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center'
  }
});
