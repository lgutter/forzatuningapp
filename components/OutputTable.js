import React, { useState } from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  TextInput,
} from 'react-native';

const OutputTable = (input) => {
  console.log(input);
  return (
    <View style={styles.container}>
      <Text>HOI!</Text>
      <Text>{input.inputTable.minSprings}</Text>
      <TouchableHighlight style={styles.button} onPress={input.resetState('hoi')} underlayColor='#99d9f4'>
        <Text style={styles.buttonText}>Reset</Text>
      </TouchableHighlight>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    marginTop: 0,
    padding: 20,
    backgroundColor: '#ffffff',
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center'
  },
  button: {
    height: 36,
    backgroundColor: '#48BBEC',
    borderColor: '#48BBEC',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
  contentContainer: {
    paddingTop: 10,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 200,
    height: 125,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  inputContainer: {
    alignContent: 'center',
    flexDirection: 'row',
    backgroundColor: '#fff',
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
});

export default OutputTable;
