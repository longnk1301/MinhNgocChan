import React, {Component} from 'react';
import {Text, View} from 'react-native';

const TextComponent = ({text}) => {
  return (
    <View>
      <Text>{text}</Text>
    </View>
  );
};

export default TextComponent;
