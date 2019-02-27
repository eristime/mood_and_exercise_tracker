/* eslint-disable linebreak-style */
/* eslint-disable no-multiple-empty-lines */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable semi */
/* eslint-disable no-unused-vars */

/* eslint-disable no-multiple-empty-lines */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable semi */
/* eslint-disable no-unused-vars */
import React from 'react';
import {
  View,
  StyleSheet,
  FlatList
} from 'react-native';

import {
  Container,
  Header,
  Title,
  Content,
  H3,
  Body
} from 'native-base';
import Fab from '../components/Fab';
import Journaltem from '../components/Journaltem';


export default class HomeScreen extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      data: []
    };
  }

  componentDidMount () {
    this.loadData();
  }

  loadData = () => {
    /* Mock sqlite behaviour */
    this.setState({
      data: [
        {
          exercise: 4.5,
          happiness: 4,
          activity: 3,
          date: new Date()

        },
        {
          exercise: 4.5,
          happiness: 4,
          activity: 3,
          date: new Date()
        },
        {
          exercise: 4.5,
          happiness: 4,
          activity: 3,
          date: new Date()
        },
        {
          exercise: 4.5,
          happiness: 4,
          activity: 3,
          date: new Date()
        }
      ]
    });
  }

  renderEmpty = () => {
    return (
      <Content>
        <H3>The journal is empty</H3>
      </Content>
    );
  };

  renderHeader = () => {
    return (
      <Header fixed>
        <Body>
          <Title>Journal</Title>
        </Body>
      </Header>
    );
  }


  render () {
    return (
      <Container>
        <Header>
          <Body>
            <Title>Journal</Title>
          </Body>
        </Header>
        <Content>
          <FlatList
            data={this.state.data}
            renderItem={({ item }) => (
              <Journaltem
                journalItem={item}
              />
            )}
            keyExtractor={item => item.date}
            ListEmptyComponent={this.renderEmpty}
            // ListHeaderComponent={this.renderHeader}
          />

        </Content>

        <Fab />
      </Container>
    );
  }
}

