import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import HeaderNavi from './HeaderNavi';
import Story from '../../components/Story';
import NewFeedNavi from './NewFeedNavi';
import Follow from './Follow';
import EmailSite from './EmailSite';
import PeopleHeart from './PeopleHeart';
import Status from '../../components/NewFeed/Status';

export default function index() {
  return (
    <View style={styles.container}>
      <HeaderNavi />
      <Follow />

      <Story />
      <EmailSite />
      <PeopleHeart />
      <NewFeedNavi />
      <Status />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {},
});
