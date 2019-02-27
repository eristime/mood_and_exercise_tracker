/* eslint-disable no-unused-vars */
import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import { WebBrowser } from 'expo';

import {
  VictoryBar,
  VictoryChart,
} from 'victory-native';
import {
  Container,
  Header,
  Title,
  Content,
  Right,
  Body,
  Text,
} from 'native-base';

import { VictoryTheme } from 'victory-core';


export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };


  render() {
    return (
      <Container>
        <Header>
          <Body>
            <Title>Mood and exercise tracker</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <Text>
              This is Content Section
          </Text>
          <VictoryChart
            theme={VictoryTheme.material}
            domainPadding={10}
          >
            <VictoryBar
              style={{ data: { fill: '#c43a31' } }}
              data={[
                {
                  x: 15, y: 20, label: 1, fill: 'red',
                },
                {
                  x: 25, y: 30, label: 2, fill: 'orange',
                },
                {
                  x: 35, y: 65, label: 3, fill: 'gold',
                },
                {
                  x: 40, y: 50, label: 4, fill: 'blue',
                },
                {
                  x: 45, y: 40, label: 5, fill: 'cyan',
                },
                {
                  x: 50, y: 30, label: 6, fill: 'green',
                },
              ]}
            />
          </VictoryChart>
        </Content>
      </Container>

    );
  }

  _maybeRenderDevelopmentModeWarning() {
    if (__DEV__) {
      const learnMoreButton = (
        <Text onPress={this._handleLearnMorePress} style={styles.helpLinkText}>
          Learn more
        </Text>
      );

      return (
        <Text style={styles.developmentModeText}>
          Development mode is enabled, your app will be slower but you can use useful development
          tools.
          {' '}
          {learnMoreButton}
        </Text>
      );
    }
    return (
      <Text style={styles.developmentModeText}>
          You are not in development mode, your app will run at full speed.
      </Text>
    );
  }

  _handleLearnMorePress = () => {
    WebBrowser.openBrowserAsync('https://docs.expo.io/versions/latest/guides/development-mode');
  };

  _handleHelpPress = () => {
    WebBrowser.openBrowserAsync(
      'https://docs.expo.io/versions/latest/guides/up-and-running.html#can-t-see-your-changes',
    );
  };
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//   },
//   developmentModeText: {
//     marginBottom: 20,
//     color: 'rgba(0,0,0,0.4)',
//     fontSize: 14,
//     lineHeight: 19,
//     textAlign: 'center',
//   },
//   contentContainer: {
//     paddingTop: 30,
//   },
//
//   getStartedContainer: {
//     alignItems: 'center',
//     marginHorizontal: 50,
//   },
//
//   helpLinkText: {
//     fontSize: 14,
//     color: '#2e78b7',
//   },
// });
