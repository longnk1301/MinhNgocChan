import React from 'react';
import {View, Text, Image} from 'react-native';
import {styles} from './styles';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function index({user}) {
  return (
    <View style={styles.container}>
      <View style={styles.info}>
        <Image
          style={styles.avt}
          source={{
            uri: user.avatar,
          }}
        />
        <View>
          <Text style={styles.userName}>{user.name}</Text>
          <Text style={styles.address}>{user.city}</Text>
        </View>
      </View>

      <View style={styles.right}>
        <Text>{user.date}</Text>
        <Ionicons style={styles.dotImage} name="ellipsis-vertical-outline" />
      </View>
    </View>
  );
}
