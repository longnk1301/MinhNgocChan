import React from 'react';
import {View, Text, Image} from 'react-native';
import {styles} from './styles';

export default function index() {
  return (
    <View>
      <View style={{flexDirection: 'row'}}>
        <Image
          style={styles.tinyLogo}
          source={{
            uri:
              'https://media-cdn.tripadvisor.com/media/photo-s/0e/9a/e3/1d/freedom-tower.jpg',
          }}
        />
        <Image
          style={styles.tinyLogo}
          source={{
            uri:
              'https://media-cdn.tripadvisor.com/media/photo-s/0e/9a/e3/1d/freedom-tower.jpg',
          }}
        />
        <Image
          style={styles.tinyLogo}
          source={{
            uri:
              'https://media-cdn.tripadvisor.com/media/photo-s/0e/9a/e3/1d/freedom-tower.jpg',
          }}
        />
        <Image
          style={styles.tinyLogo}
          source={{
            uri:
              'https://media-cdn.tripadvisor.com/media/photo-s/0e/9a/e3/1d/freedom-tower.jpg',
          }}
        />
      </View>

      <View style={{flexDirection: 'row'}}>
        <Image
          style={styles.tinyLogo}
          source={{
            uri:
              'https://media-cdn.tripadvisor.com/media/photo-s/0e/9a/e3/1d/freedom-tower.jpg',
          }}
        />
        <Image
          style={styles.tinyLogo}
          source={{
            uri:
              'https://media-cdn.tripadvisor.com/media/photo-s/0e/9a/e3/1d/freedom-tower.jpg',
          }}
        />
        <Image
          style={styles.tinyLogo}
          source={{
            uri:
              'https://media-cdn.tripadvisor.com/media/photo-s/0e/9a/e3/1d/freedom-tower.jpg',
          }}
        />
        <Image
          style={styles.tinyLogo}
          source={{
            uri:
              'https://media-cdn.tripadvisor.com/media/photo-s/0e/9a/e3/1d/freedom-tower.jpg',
          }}
        />
      </View>
    </View>
  );
}
