import React from 'react';
import {View} from 'react-native';
import {styles} from './styles';
import User from './User';
import Pictures from './Pictures';
import Reaction from './Reaction';

export default function index() {
  return (
    <View style={styles.container}>
      <User />
      <Pictures />
      <Reaction />
    </View>
  );
}
