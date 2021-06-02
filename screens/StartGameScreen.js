import React, {useState} from 'react';

import {
  Button,
  ProgressViewIOSComponent,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  Keyboard,
  TextInput,
  useColorScheme,
  View,
  Alert,
  Touchable,
} from 'react-native';
import Card from '../components/Card';
import Colors from '../constants/colors';
import MainGame from './MainGame';
import Input from '../components/Input';
import NumberContainer from '../components/NumberContainer';
const StartGameScreen = props => {
  const [enteredvalue, setEnteredValue] = useState('');
  const [confirmed, setConfirmed] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState();
  const numberInputHandler = inputText => {
    setEnteredValue(inputText.replace(/[^0-9]/g, ''));
  };
  const resetInputHandler = () => {
    setEnteredValue('');
  };
  const confirmInputHandler = () => {
    const chosenNumber = parseInt(enteredvalue);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert('Invalid Number!', 'Number has to be in between 1 and 99', [
        {text: 'Okay', style: 'destructive'},
      ]);
      return;
    }
    setConfirmed(true);

    setSelectedNumber(parseInt(enteredvalue));
    setEnteredValue('');
    Keyboard.dismiss();
  };
  let confirmedOutput;
  if (confirmed) {
    confirmedOutput = (
      <Card style={styles.chosen}>
        <Text>You selected</Text>
        <NumberContainer>{selectedNumber}</NumberContainer>
        <Button
          title="Start Game"
          onPress={() => props.onStartGame(selectedNumber)}
        />
      </Card>
    );
  }
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}>
      <View style={styles.screen}>
        <Text style={styles.title}> Start a new game</Text>
        <Card style={styles.inputContainer}>
          <Text>Select a Number</Text>
          <Input
            style={styles.input}
            blurOnSubmit
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="numeric"
            maxLength={2}
            onChangeText={numberInputHandler}
            value={enteredvalue}
          />
          <View style={styles.buttonContainer}>
            <View style={styles.buttons}>
              <Button title="Reset" onPress={resetInputHandler} color="black" />
            </View>
            <View style={styles.buttons}>
              <Button
                title="Confirm"
                onPress={confirmInputHandler}
                color="red"
              />
            </View>
          </View>
        </Card>
        {confirmedOutput}
      </View>
    </TouchableWithoutFeedback>
  );
};
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
  },
  inputContainer: {
    width: 300,
    maxWidth: '80%',
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },
  input: {
    width: 50,
  },
  title: {
    fontSize: 20,
    marginVertical: 10,
  },
  buttons: {
    width: 100,
  },
  chosen: {
    marginTop: 20,
    alignItems: 'center',
  },
  numberSelect: {
    fontSize: 20,
    padding: 10,
  },
  startButton: {},
  numberCard: {
    height: 90,
    margin: 10,
    borderWidth: 0.6,
    borderColor: 'grey',
  },
});
export default StartGameScreen;
