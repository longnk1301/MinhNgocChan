import React from 'react';
import {View, Text, Image} from 'react-native';
import {styles} from './styles';

export default function index() {
  return (
    <View style={styles.container}>
      <View style={styles.info}>
        <Image
          style={styles.avt}
          source={{
            uri:
              'https://pyxis.nymag.com/v1/imgs/630/6e0/eb215ad90cd826b9e57ff505f54c5c7228-07-avatar.rsquare.w700.jpg',
          }}
        />
        <View>
          <Text style={styles.userName}>Wanda S</Text>
          <Text style={styles.address}>New York</Text>
        </View>
      </View>

      <View style={styles.right}>
        <Text>April 24</Text>
        <Image
          style={styles.dotImage}
          source={{
            uri:
              'https://apisproductions.com/wp-content/uploads/2020/02/istockphoto-957096060-170667a.jpg',
          }}
        />
      </View>
    </View>
  );
}
