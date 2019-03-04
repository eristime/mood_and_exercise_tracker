/* eslint-disable linebreak-style */
/* eslint-disable no-multiple-empty-lines */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable semi */
/* eslint-disable no-unused-vars */

import React from 'react';
import {
  View,
  StyleSheet,
  Alert
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
  H3,
  Text,
  Textarea,
  Form
} from 'native-base';
import CustomSlider from '../components/Slider';
import ExerciseItem from '../components/ExerciseItem';
import { formatDate } from '../services/utils';


export default class JournalDetailScreen extends React.Component {

  static navigationOptions = {
    header: null
  };

  constructor (props) {
    super(props);
    const { navigation } = props;
    this.journalItem = navigation.getParam('journalItem');
    this.navigation = navigation.getParam('navigation');
    this.state = {
      disabled: true
    };
  }

  toggleEditable = () => {
    this.setState((state) => {
      return { disabled: !state.disabled };
    });
  }

  onSaveButtonPress = () => {
    this.toggleEditable();
    // TODO: save the results
    Alert.alert(
      'Mood successfully changed.'
    )
  }

  renderButton = () => {
    if (this.state.disabled) {
      return (
        <Button
          block
          primary
          onPress={this.toggleEditable}
        >
          <Text>EDIT</Text>
        </Button>
      );
    }

    return (
      <Button
        block
        success
        onPress={this.onSaveButtonPress}
      >
        <Text>SAVE</Text>
      </Button>
    );
  }


  render () {
    // set default values to 0 or '--'
    const disabled = this.state.disabled;
    const {
      exercise = 0,
      happiness = 0,
      activiness = 0,
      steps = 0
    } = this.journalItem;
    const note = this.journalItem.note || '--';
    const date = formatDate(this.journalItem.date) || '--';

    return (
      <Container style={{ flex: 1 }}>
        <Header>
          <Left>
            <Button transparent onPress={() => this.navigation.goBack()}>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>{date}</Title>
          </Body>
        </Header>
        <Content style={styles.mainContainer}>
          <Form>
            <View style={styles.itemContainer}>
              <ExerciseItem
                steps={steps}
                exercise={exercise}
              />
            </View>
            <View style={styles.itemContainer}>
              <CustomSlider
                text="Happiness"
                minText="Sad"
                maxText="Happy"
                value={happiness}
                minValue={1}
                maxValue={5}
                infoText="Happiness is being happy."
                disabled={disabled}
              />
            </View>

            <View style={styles.itemContainer}>
              <CustomSlider
                text="Activiness"
                minText="Passive"
                maxText="Active"
                value={activiness}
                minValue={1}
                maxValue={5}
                infoText="Activiness describes how active you felt during the day."
                disabled={disabled}
              />
            </View>

            <H3 style={styles.itemContainer}>Describe your day in words:</H3>
            <View style={styles.itemContainer}>
              <Textarea
                style={{ alignSelf: 'stretch' }}
                rowSpan={4}
                bordered
                placeholder={note}
                disabled={disabled}
              />
            </View>

          </Form>
          <View style={[styles.itemContainer, styles.bottomItem]}>
            {this.renderButton()}
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
