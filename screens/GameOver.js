import React from 'react';
import Colors from '../constants/colors';
import {
  Button,
  ProgressViewIOSComponent,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import Card from '../components/Card';

const GameOver = props => {
  return (
    <View style={styles.screen}>
      <Card style={styles.gameCard}>
        <Text style={styles.text}>Game Over..!!!! </Text>
        <Text style={styles.text}>Number of rounds:{props.roundsNumber}</Text>
        <Text style={styles.text}>Your Number was:{props.userNumber}</Text>
      </Card>
      <View style={styles.button}>
        <Button title="Restart" onPress={props.onRestart}></Button>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    marginTop: 20,
    borderColor: 'grey',
    borderWidth: 3,

    borderRadius: 5,
  },

  text: {
    fontSize: 20,
    color: 'black',
  },
  gameCard: {
    alignItems: 'center',
    borderColor: 'red',
    borderWidth: 3,
    borderStyle: 'dotted',
  },
});
export default GameOver;
