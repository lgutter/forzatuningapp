import React, { useState, Fragment } from 'react';
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
import { DataTable } from 'react-native-paper';

const BumpStiffness = ({ resultFront, resultRear }) => {
  return (
    <DataTable.Row key='bump'>
      <DataTable.Cell>Bump</DataTable.Cell>
      <DataTable.Cell numeric>{Math.round(resultFront * 6) / 10}</DataTable.Cell>
      <DataTable.Cell numeric>{Math.round(resultRear * 6) / 10}</DataTable.Cell>
    </DataTable.Row>
  );
}

const NormalStiffness = ({ item, resultFront, resultRear }) => {
  return (
    <DataTable.Row key={item}>
      <DataTable.Cell>{item}</DataTable.Cell>
      <DataTable.Cell numeric>{Math.round(resultFront * 10) / 10}</DataTable.Cell>
      <DataTable.Cell numeric>{Math.round(resultRear * 10) / 10}</DataTable.Cell>
    </DataTable.Row>
  );
}

const OutputTable = ({ inputTable, resetState }) => {
  console.log(inputTable, resetState);
  onPress = (change) => {
    resetState(null);
  }

  const types = ['Springs', 'Rebound', 'AntirollBars'];

  const calc = (min, max, weight) => {
    return ((max - min) * weight / 100 + min);
  };

  var rearWeightDistribution = (100 - inputTable.weightDistribution);

  return (
    <View style={styles.container}>
      <DataTable>
        <DataTable.Header>
          <DataTable.Title>Setting</DataTable.Title>
          <DataTable.Title>Front</DataTable.Title>
          <DataTable.Title>Rear</DataTable.Title>
        </DataTable.Header>
        {types.map((item) => {
          const resultFront = calc(inputTable[`min${item}`], inputTable[`max${item}`], inputTable.weightDistribution);
          const resultRear = calc(inputTable[`min${item}`], inputTable[`max${item}`], rearWeightDistribution);

          if (item == 'Rebound'){
            var result = <><NormalStiffness item={item} resultFront={resultFront} resultRear={resultRear} />
            <BumpStiffness resultFront={resultFront} resultRear={resultRear} /></>
          }
          else {
            var result = <NormalStiffness item={item} resultFront={resultFront} resultRear={resultRear} />
          }
console.log(result);
          return (result);
        })}
      </DataTable>
      <TouchableHighlight style={styles.button} onPress={onPress} underlayColor='#99D9F4'>
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
    backgroundColor: '#E04E43',
    borderColor: '#C4392F',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
  contentContainer: {
    paddingTop: 10,
  },
  inputContainer: {
    alignContent: 'center',
    flexDirection: 'row',
    backgroundColor: '#fff',
  },
  navigationFilename: {
    marginTop: 5,
  },
});

export default OutputTable;
