/* eslint-disable linebreak-style */
/* eslint-disable no-multiple-empty-lines */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable semi */
/* eslint-disable no-unused-vars */

import React from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity
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
  H3
} from 'native-base';
import RecordsContext from '../contexts/RecordsContext';

export default class ChooseMoodInput extends React.Component {

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
              <Title>Choose mood input</Title>
            </Body>
          </Header>
          <RecordsContext.Consumer>
            {({ records, getRecordForToday }) => {

              const todaysRecord = getRecordForToday(records);
              return (
                <Content style={styles.mainContainer}>
                  <View style={styles.textStyle}>
                    <TouchableOpacity
                      style={styles.buttonStyle}
                      onPress={
                        () => {
                          this.props.navigation.navigate('JournalDetail',
                        {
                          journalItem: todaysRecord,
                          navigation: this.props.navigation
                        })}
                      }
                    >
                      <H3>Rate your mood manually.</H3>
                    </TouchableOpacity>
        
                    <H1 style={styles.textStyle}>OR</H1>
        
                    <TouchableOpacity
                      style={styles.buttonStyle}
                      onPress={() => this.props.navigation.navigate('AddCameraMood')}
                    >
                      <H3>Rate your mood by taking a picture. Google Vision will detect how your feeling today.</H3>
                    </TouchableOpacity>
                  </View>
                </Content>
              );
            }}
          </RecordsContext.Consumer>
        </Container>
      );
  }

}



const styles = StyleSheet.create({
  mainContainer: {
    padding: 15,
    flex: 1
  },
  textStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 30
  },
  buttonStyle: {
    height: 200,
    width: '100%',
    backgroundColor: '#CDCDCD',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30,
    borderRadius: 5
  },
  rowContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center'
  }

});
