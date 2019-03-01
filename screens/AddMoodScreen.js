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
  Body,
  Title,
  Button,
  Container,
  Header,
  Content,
  Left,
  Icon,
  H1,
  H3,
  Text,
  Textarea,
  Form
} from 'native-base';
import CustomSlider from '../components/Slider'


export default class AddMoodScreen extends React.Component {

  static navigationOptions = {
    header: null
  };

  constructor (props) {
    super(props)
    this.state = {
    };
  }


  render () {
    return (
      <Container style={{ flex: 1 }}>
        <Header>
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>Rate your day</Title>
          </Body>
        </Header>
        <Content style={styles.mainContainer}>
          <Form>
            <H1 style={styles.itemContainer}>How are you feeling today?</H1>

            <View style={styles.itemContainer}>
              <CustomSlider
                text="Happiness"
                minText="Sad"
                maxText="Happy"
                minValue={1}
                maxValue={5}
                infoText="Happiness is being happyy."
              />
            </View>

            <View style={styles.itemContainer}>
              <CustomSlider
                text="Activiness"
                minText="Passive"
                maxText="Active"
                minValue={1}
                maxValue={5}
                infoText="Activiness describes how active you felt during the day."
              />
            </View>

            <H3 style={styles.itemContainer}>Describe your day in words:</H3>
            <View style={styles.itemContainer}>

              <Textarea
                style={{ alignSelf: 'stretch' }}
                rowSpan={4}
                bordered
                placeholder="Add a note"
              />
            </View>

          </Form>
          <View style={[styles.itemContainer, styles.bottomItem]}>
            <Button block success><Text>Save</Text></Button>
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
  }
});
