import React from 'react';
import {View, Image} from 'react-native';
import {styles} from './styles';
export default function index() {
  return (
    <View>
      <Image
        style={styles.image}
        source={{
          uri:
            'https://pyxis.nymag.com/v1/imgs/630/6e0/eb215ad90cd826b9e57ff505f54c5c7228-07-avatar.rsquare.w700.jpg',
        }}
      />
    </View>
  );
}
