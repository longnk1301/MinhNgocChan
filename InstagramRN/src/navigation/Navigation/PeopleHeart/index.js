import React from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

export default function index() {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 40,

        paddingVertical: 20,
      }}>
      <Icon style={{fontSize: 20}} name="ad" color="#4F8EF7" />
      <Icon style={{fontSize: 20}} name="print" color="#4F8EF7" />
      <Icon style={{fontSize: 20}} name="user-graduate" color="#4F8EF7" />

      <Icon style={{fontSize: 20}} name="heart" color="#4F8EF7" />
    </View>
  );
}
