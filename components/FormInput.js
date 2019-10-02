import React, { Component, useRef } from 'react';
import { View, StyleSheet, TouchableHighlight, Text } from 'react-native';

import t from 'tcomb-form-native';
import { statement } from '@babel/template';


const InputForm = ({ onSubmit, state }) => {
  const formEl = useRef(null);

  const Form = t.form.Form;

  var Defaults = t.struct({
    minSprings: t.Number,
    maxSprings: t.Number,
    minRebound: t.Number,
    maxRebound: t.Number,
    minAntirollBars: t.Number,
    maxAntirollBars: t.Number,
    weightDistribution: t.Number,
  });

  var options = {

  };

  const defaultValues = {
    minRebound: 3,
    maxRebound: 20,
    minAntirollBars: 1,
    maxAntirollBars: 65,
  }

  const onPress = () => {
    if (formEl && formEl.current) {
      var value = formEl.current.getValue();
      if (value) {
        onSubmit(value);
      }
    }
  }

  return (
    <View style={styles.container}>
      {/* <Text style={styles.title}>Please pro</Text> */}
      <Form
        ref={formEl}
        type={Defaults}
        options={options}
        value={{
          ...defaultValues,
          ...state,
        }}
      />
      <TouchableHighlight style={styles.button} onPress={onPress} underlayColor='#99d9f4'>
        <Text style={styles.buttonText}>Calculate</Text>
      </TouchableHighlight>
    </View>
  );
}

t.form.Form.stylesheet.textbox.normal.width = 175;
t.form.Form.stylesheet.textbox.error.width = 175;
t.form.Form.stylesheet.fieldset.justifyContent = 'space-around';
t.form.Form.stylesheet.fieldset.flexDirection = 'row';
t.form.Form.stylesheet.fieldset.flexWrap = 'wrap';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    marginTop: 0,
    padding: 20,
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
  title: {
    fontSize: 24,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  }
});

export default InputForm;
