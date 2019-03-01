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


export default class AddReminderScreen extends React.Component {

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
            <Title>Add a reminder</Title>
          </Body>
        </Header>
        <Content style={styles.mainContainer}>
          <Form>
            <H1 style={styles.itemContainer}>How are you feeling today?</H1>


            <H3 style={styles.itemContainer}>Describe your day in words:</H3>


          </Form>
          <View style={[styles.itemContainer, styles.bottomItem]}>
            <Button block success><Text>SAVE</Text></Button>
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
