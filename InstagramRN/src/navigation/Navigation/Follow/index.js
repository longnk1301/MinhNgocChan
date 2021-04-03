import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {styles} from './styles';
import Icon from 'react-native-vector-icons/FontAwesome5';

export default function index() {
  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row', flex: 1}}>
        <View
          style={{
            flexDirection: 'column',
            flex: 2,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Image
            style={styles.avt}
            source={{
              uri:
                'https://pyxis.nymag.com/v1/imgs/630/6e0/eb215ad90cd826b9e57ff505f54c5c7228-07-avatar.rsquare.w700.jpg',
            }}
          />
          <Text style={styles.number}>Wanda </Text>
          <Text style={styles.follow}>Photograph/NewYork</Text>
        </View>
        <View
          style={{
            flex: 3,
          }}>
          <View
            style={{
              flexDirection: 'row',

              justifyContent: 'space-around',
            }}>
            <View style={{alignItems: 'center'}}>
              <Text style={styles.number}>150</Text>
              <Text style={styles.follow}>Post</Text>
            </View>
            <View style={{alignItems: 'center'}}>
              <Text style={styles.number}>5K</Text>
              <Text style={styles.follow}>Followers</Text>
            </View>
            <View style={{alignItems: 'center'}}>
              <Text style={styles.number}>100</Text>
              <Text style={styles.follow}>Following</Text>
            </View>
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-evenly',

              top: 20,
            }}>
            <View>
              <TouchableOpacity
                style={{
                  fontSize: 14,

                  backgroundColor: 'blue',
                  borderRadius: 20,
                  width: 90,
                  height: 27,
                }}>
                <Text style={{color: 'white', textAlign: 'center', top: 5}}>
                  Follow
                </Text>
              </TouchableOpacity>
            </View>

            <View>
              <Icon
                style={{fontSize: 30}}
                name="check-circle"
                color="#4F8EF7"
              />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}
