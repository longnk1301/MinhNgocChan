import React from 'react';
import {View, Image, Text} from 'react-native';
import {styles} from './styles';
import Swiper from 'react-native-swiper';

export default function index() {
  return (
    <View style={styles.container}>
      <Swiper
        style={styles.wrapper}
        height={250}
        dot={<View style={styles.dots} />}
        activeDot={<View style={styles.Dot} />}
        paginationStyle={styles.paginationStyle}
        loop>
        <View style={styles.slide}>
          <Image
            style={styles.image}
            source={{
              uri:
                'https://pyxis.nymag.com/v1/imgs/630/6e0/eb215ad90cd826b9e57ff505f54c5c7228-07-avatar.rsquare.w700.jpg',
            }}
          />
        </View>
        <View style={styles.slide}>
          <Image
            style={styles.image}
            source={{
              uri:
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvH0nByLtKT3_KyaOg2VVdRe6wmhBlLTjmhg&usqp=CAU',
            }}
          />
        </View>
        <View style={styles.slide}>
          <Image
            style={styles.image}
            source={{
              uri:
                'https://cdn.mos.cms.futurecdn.net/znJTFDTemj3st5vMC9KxnB.jpg',
            }}
          />
        </View>
        <View style={styles.slide}>
          <Image
            style={styles.image}
            source={{
              uri:
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRT6M2dnvH86kpi0_rIh8287M5l2zf2B1CGBg&usqp=CAU',
            }}
          />
        </View>
      </Swiper>
    </View>
  );
}
