/* eslint-disable linebreak-style */
/* eslint-disable no-multiple-empty-lines */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable semi */
/* eslint-disable no-unused-vars */

import React from 'react';
import {
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
import RecordsContext from '../contexts/RecordsContext';

export default class JournalScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  renderEmpty = () => {
    return (
      <Content>
        <H3>The journal is empty</H3>
      </Content>
    );
  };


  render () {
    return (
      <Container>
        <Header>
          <Body>
            <Title>Journal</Title>
          </Body>
        </Header>
        <Content>
          <RecordsContext.Consumer>
            {({ records }) => 
              <FlatList
              data={records}
              renderItem={({ item }) => (
                <Journaltem
                  journalItem={item}
                />
              )}
              keyExtractor={item => item.date}
              ListEmptyComponent={this.renderEmpty}
            />
            }
          </RecordsContext.Consumer>
        </Content>

        <Fab />
      </Container>
    );
  }
}

