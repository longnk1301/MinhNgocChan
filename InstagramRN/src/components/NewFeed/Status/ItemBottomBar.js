import React, {Component} from 'react';
import {Text, StyleSheet, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

export default class ItemBottomBar extends Component {
  render() {
    return (
      <View
        style={{
          alignItems: 'center',
        }}>
        <Icon
          style={{
            fontSize: 20,
            color: 'red',
          }}
          name={this.props.Icon}
        />
        <Text>{this.props.title}</Text>
      </View>
    );
  }
}
