import React from 'react';
import {View, Text, Image} from 'react-native';
import {TextInput} from 'react-native';
import {styles} from './styles';

const Search = () => {
  return (
    <View style={styles.container}>
      <TextInput
        placeholderTextColor="#000"
        placeholder="Search"
        style={styles.search}
      />
      <Image style={styles.logo} source={require('../../assets/find.png')} />
    </View>
  );
};

export default Search;
