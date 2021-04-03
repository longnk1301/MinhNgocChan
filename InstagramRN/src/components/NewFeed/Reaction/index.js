import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {styles} from './styles';
export default function index() {
  return (
    <View>
      <View style={styles.Container}>
        <View style={styles.iconContainer}>
          <TouchableOpacity>
            <Icon style={styles.icon_Heart} name="heart" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconContainer}>
            <Icon style={styles.icon_Message} name="comment-dots" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconContainer}>
            <Icon style={styles.icon_Find} name="caret-right" />
          </TouchableOpacity>
        </View>
        <View style>
          <TouchableOpacity style={styles.iconContainer}>
            <Icon style={styles.iconSave} name="clipboard" />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.View}>
        <Text style={styles.text}>125 Like</Text>
        <Text style={styles.text_comment}>Wanda S.NewYork is Wonderful</Text>
        <Text style={styles.text_comment}>See all 200 comments</Text>
      </View>
    </View>
  );
}
