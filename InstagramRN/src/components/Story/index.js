import React from 'react';
import {View, Text, Image} from 'react-native';
import {styles} from './styles';

const Story = () => {
  return (
    <View style={styles.container}>
      {/* <Text>Story</Text>{' '} */}
      <Image style={styles.logo} source={require('../../assets/add.png')} />
      <Image style={styles.logo} source={require('../../assets/cloud.png')} />
      <Image style={styles.logo} source={require('../../assets/cloud.png')} />
      <Image style={styles.logo} source={require('../../assets/cloud.png')} />
      <Image style={styles.logo} source={require('../../assets/cloud.png')} />
    </View>
  );
};

export default Story;
