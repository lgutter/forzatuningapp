import React, { useState, Component, useRef, useEffect } from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
} from 'react-native';
import InputForm from '../components/FormInput';
import OutputTable from '../components/OutputTable';

const HomeScreen = () => {
  const [state, setState] = useState(null);
  const scrollViewEl = useRef(null);

  const updateState = (values) => {
    setState(values);
  };

  useEffect(() => {
    if (state) {
      if (scrollViewEl && scrollViewEl.current) {
        scrollViewEl.current.scrollToEnd({ animated: true });
      }
    }
  }, [state]);

  return (
    <View style={styles.container}>
      <ScrollView

        ref={scrollViewEl}
        style={styles.container}
        contentContainerStyle={styles.contentContainer}>
        <View style={styles.welcomeContainer}>
          <Image
            style={styles.welcomeImage}
            source={require('../assets/images/splash.png')} />
        </View>
        <View style={styles.inputContainer}>
          <InputForm onSubmit={updateState} state={state} />
          {state && <OutputTable inputTable={state} resetState={updateState} />}
        </View>
      </ScrollView>
    </View>
  )
};

HomeScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
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
    alignSelf: 'center',
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

export default HomeScreen;
