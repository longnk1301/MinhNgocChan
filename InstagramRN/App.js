import React from 'react';
import 'react-native-gesture-handler';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import Home from './src/screens/Home';
import {NavigationContainer} from '@react-navigation/native';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.warraper}>
        <NavigationContainer>
          <Home />
        </NavigationContainer>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  warraper: {
    flex: 1,
  },
});

export default App;
