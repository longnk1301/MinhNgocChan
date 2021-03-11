import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import Home from './src/screens/Home';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.warraper}>
        <Home />
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
