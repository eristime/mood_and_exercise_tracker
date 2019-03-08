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
  Image
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
  H3,
  Content,
  Container
} from 'native-base';


export default class PhotoToGoogleVisionScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  constructor (props) {
    super(props);
    this.state = {

    };
  }
  

  render () {
    const photoURI = this.props.navigation.getParam('uri');
  
    console.log('photoURI', photoURI);
    return (
      <Container style={{ flex: 1 }}>
        <Header>
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>Detect mood </Title>
          </Body>
        </Header>
        <Content style={styles.mainContainer}>

          <Image
            style={[styles.itemContainer, styles.picture]}
            source={{ uri: photoURI }}
          />

          <View style={{ flex: 1 }}>
            <H3 style={[styles.itemContainer]}>
              Do you want to use this picture to detect your mood?
              You can also go back and take a new one.
            </H3>

            <View style={[styles.itemContainer, styles.bottomItem]}>
              <Button
                block
                primary
                onPress={this.takePicture}
              >
                <Text>DETECT MOOD</Text>
              </Button>
            </View>
          </View>
        </Content>
      </Container>

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
  },
  picture: {
    flex: 1,
    alignItems: 'stretch',
    height: 300
  },
  pictureWrapper: {
    width: 200,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5
  }
});
