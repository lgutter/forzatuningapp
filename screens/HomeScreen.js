import React, { useState } from 'react';
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

const HomeScreen = () => {
  const [state, setState] = useState(null);

  const onFormSubmit = (values) => {
    setState(values);
  };
  return (
  <View style={styles.container}>
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}>
      <View style={styles.welcomeContainer}>
        <Image
          style={styles.welcomeImage}
          source={require('../assets/images/splash.png')} />
      </View>
      <InputForm onSubmit={onFormSubmit}/>
      {/* { state && <OutputTable /> } */}
    </ScrollView>
  </View>
)};

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

export default HomeScreen;
