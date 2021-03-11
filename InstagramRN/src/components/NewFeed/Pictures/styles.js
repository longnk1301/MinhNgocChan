import {StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

export const styles = StyleSheet.create({
  image: {
    width: width - 30,
    height: 250,
    borderRadius: 15,
  },
});
