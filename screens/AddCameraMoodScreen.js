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
  Camera,
  Permissions,
  FileSystem
} from 'expo';
import {
  Body,
  Title,
  Button,
  Header,
  Left,
  Icon,
  Text,
  H3
} from 'native-base';

const PHOTOS_DIR = FileSystem.documentDirectory + 'photos';

export default class AddCameraMoodScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  state = {
    hasCameraPermission: null,
    type: Camera.Constants.Type.front,
    photos: []
  };

  async componentDidMount () {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === 'granted' });

    const dir = await FileSystem
      .makeDirectoryAsync(PHOTOS_DIR)
      .catch(e => {
        console.log(e, 'Directory exists');
      });


    const photos = await FileSystem
      .readDirectoryAsync(PHOTOS_DIR)
      .catch(e => {
        console.log(e, 'Directory cannot be found');
    });

    this.setState({ photos });

  }

  takePicture = () => {
    if (this.camera) {
      this.camera.takePictureAsync({ onPictureSaved: this.onPictureSaved });
    }
  };

  handleMountError = ({ message }) => console.error(message);

  onPictureSaved = async (photo) => {
    await FileSystem.moveAsync({
      from: photo.uri,
      to: `${FileSystem.documentDirectory}photos/${Date.now()}.jpg`
    });

    if (this.state.photos) {
      const file = this.state.photos[this.state.photos.length - 1];  // pick the latest photo
      const fileName = `${PHOTOS_DIR}/${file}`;
      
      this.props.navigation.navigate('PhotoToGoogleVision', { uri: fileName });
    }
  }


  render () {
    const { hasCameraPermission } = this.state;
    if (hasCameraPermission === null) {
      return <View />;
    } else if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    }
    return (
      <View style={{ flex: 1 }}>
        <Header>
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>Automatic mood detection</Title>
          </Body>
        </Header>
        <View style={styles.mainContainer}>
          <View style={{ flex: 1 }}>
            <H3 style={[styles.itemContainer]}>
            Take a picture of your face. 
            We use Google Vision to detect your mood for you.
            </H3>
            <Camera
              style={{ flex: 1 }}
              type={this.state.type}
              ref={ref => { this.camera = ref; }}
            >
              <View
                style={{
                  flex: 1,
                  backgroundColor: 'transparent',
                  flexDirection: 'row',
                  alignItems: 'stretch'
                }}
              />
            </Camera>
          </View>

          <View style={[styles.itemContainer, styles.bottomItem]}>
            <Button
              block
              primary
              onPress={this.takePicture}
            >
              <Text>TAKE A PICTURE</Text>
            </Button>
          </View>
        </View>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    paddingHorizontal: 15,
    flex: 1
  },
  itemContainer: {
    marginVertical: 15
  },
  rowContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  bottomItem: {
    marginBottom: 20
  }
});
