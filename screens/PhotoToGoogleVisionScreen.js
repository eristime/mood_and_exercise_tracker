/* eslint-disable linebreak-style */
/* eslint-disable no-multiple-empty-lines */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable semi */
/* eslint-disable no-unused-vars */


import React from 'react';
import {
  View,
  StyleSheet,
  Image,
  Alert
} from 'react-native';
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

  detectMood = async (photoURI) => {
    // TODO: get google vision mood
    // TODO: save mood

    Alert.alert(
      'A new mood added',
      'Your mood was detected successfully. See "Journal" for more information.'
    )

    if (false){
      Alert.alert(
        'Mood detection error',
        'We couldn\'t detect your mood.\
        Please check your Internet connection and try again.\
        You can also add your mood manually.'
      )
    }
  }

  render () {
    const photoURI = this.props.navigation.getParam('uri');

    // console.log('photoURI', photoURI);
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
                onPress={this.detectMood}
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
  }
});
