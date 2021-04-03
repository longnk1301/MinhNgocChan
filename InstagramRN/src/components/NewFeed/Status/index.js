import React from 'react';
import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import ItemBottomBar from './ItemBottomBar';
import {styles} from './styles';

export default function index() {
  return (
    <View style={styles.container}>
      <ItemBottomBar title={'Home'} Icon={'home'} />
      <ItemBottomBar title={'Growing'} Icon={'chrome'} />

      <ItemBottomBar title={'Subject'} Icon={'comment-medical'} />

      <ItemBottomBar title={'Love'} Icon={'heart'} />

      <ItemBottomBar title={'Me'} Icon={'user'} />
    </View>
  );
}
