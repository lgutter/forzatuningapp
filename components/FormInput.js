import React, { Component } from 'react';
import { View, StyleSheet, TouchableHighlight, Text } from 'react-native';

import t from 'tcomb-form-native';

const Form = t.form.Form;

const Defaults = t.struct({
  minSprings: t.Number,
  maxSprings: t.Number,
  minRebound: t.maybe(t.Number),
  maxRebound: t.maybe(t.Number),
  minAntirollBars: t.maybe(t.Number),
  maxAntirollBars: t.maybe(t.Number),
});

var options = {
  label: 'Your Car\'s min/max values',
  auto: 'placeholders',
  fields: {
    minRebound: {
      placeholder: 'Min rebound (default 3)'
    },
    maxRebound: {
      placeholder: 'Max rebound (default 20)'
    },
    minSprings: {
      error: 'please provide the minimum spring stiffness'
    },
    maxSprings: {
      error: 'please provide the maximum spring stiffness'
    },
    minAntirollBars: {
      placeholder: 'Min antiroll bars (default 1)'
    },
    maxAntirollBars: {
      placeholder: 'Max antiroll bars (default 65)'
    },
  }
};

export default class InputForm extends Component {
  onPress = () => {
    var value = this.refs.form.getValue();
    if (value) {
      this.props.onSubmit(value);
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Form
          ref="form"
          type={Defaults}
          options={options}
        />
        <TouchableHighlight style={styles.button} onPress={this.onPress} underlayColor='#99d9f4'>
          <Text style={styles.buttonText}>Calculate</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

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
  }
});
