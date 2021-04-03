import React from 'react';
import {View, Text} from 'react-native';

export default function index() {
  return (
    <View
      style={{
        paddingVertical: 30,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 25,
        borderColor: 'grey',
        // borderTopWidth: 'black',
      }}>
      <Text style={{color: 'blue'}}>Email</Text>
      <Text>|</Text>
      <Text style={{color: 'blue'}}>Site</Text>
      <Text>|</Text>
      <Text style={{color: 'blue'}}>Phone</Text>
    </View>
  );
}
