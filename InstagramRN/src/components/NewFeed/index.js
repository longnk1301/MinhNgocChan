import React from 'react';
import {View} from 'react-native';
import {styles} from './styles';
import User from './User';
import Pictures from './Pictures';
import Reaction from './Reaction';
import Status from './Status';

/*/
1. thay image chat icon thanh image khac co mau tuong tu app
2. them image bar menu trong user component
3. PIcture component chuyen thanh ScrollView
*/

export default function index() {
  return (
    <View style={styles.container}>
      <User />
      <Pictures />
      <Reaction />
      <Status />
    </View>
  );
}
