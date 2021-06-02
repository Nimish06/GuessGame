import React, {useState} from 'react';
import Colors from '../constants/colors';
import {
  ProgressViewIOSComponent,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  View,
} from 'react-native';

const Input = props => {
  return (
    <TextInput
      {...props}
      style={{...styles.inputs, ...props.style}}></TextInput>
  );
};
const styles = StyleSheet.create({
  inputs: {
    height: 40,
    borderBottomColor: 'grey',
    borderBottomWidth: 1,

    marginVertical: 10,
  },
});
export default Input;
