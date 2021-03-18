import React from 'react';
import {View, Image, Text, Slider} from 'react-native';
import {styles} from './styles';
import Swiper from 'react-native-swiper';
import Slide from '../../Slide';

const sliders = [
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvH0nByLtKT3_KyaOg2VVdRe6wmhBlLTjmhg&usqp=CAU',
  'https://pyxis.nymag.com/v1/imgs/630/6e0/eb215ad90cd826b9e57ff505f54c5c7228-07-avatar.rsquare.w700.jpg',
];

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
        {sliders.map((slide) => {
          return <Slide slide={slide} />;
        })}
      </Swiper>
    </View>
  );
}
