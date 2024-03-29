import React from 'react';
import Colors from '../constants/colors';
import {
  ProgressViewIOSComponent,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

const NumberContainer = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.number}>{props.children}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: 'grey',
    padding: 10,
    borderRadius: 10,
    marginVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  number: {
    color: 'black',
    fontSize: 20,
  },
});
export default NumberContainer;
