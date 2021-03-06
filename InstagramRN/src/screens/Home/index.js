import React from 'react';
import {View, Text} from 'react-native';
import Header from '../../components/Header';
import Search from '../../components/Search';
import Story from '../../components/Story';
import {styles} from './styles';

const Home = () => {
  return (
    <View style={styles.container}>
      <Header />
      <Search />
      <Story />

      {/* TODO <Newfeed /> */}
    </View>
  );
};

export default Home;
