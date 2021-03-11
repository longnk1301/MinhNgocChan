import React from 'react';
import {View, Text, Image, FlatList, TouchableOpacity} from 'react-native';
import {styles} from './styles';

const DATA = [
  {
    id: '1',
    name: 'Kenneth',
    avatar:
      'https://pyxis.nymag.com/v1/imgs/630/6e0/eb215ad90cd826b9e57ff505f54c5c7228-07-avatar.rsquare.w700.jpg',
    image:
      'https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510__340.jpg',
  },
  {
    id: '2',
    name: 'Jose',
    avatar:
      'https://pyxis.nymag.com/v1/imgs/630/6e0/eb215ad90cd826b9e57ff505f54c5c7228-07-avatar.rsquare.w700.jpg',

    image:
      'https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510__340.jpg',
  },
  {
    id: '3',
    name: 'Kha',
    avatar:
      'https://pyxis.nymag.com/v1/imgs/630/6e0/eb215ad90cd826b9e57ff505f54c5c7228-07-avatar.rsquare.w700.jpg',

    image:
      'https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510__340.jpg',
  },
  {
    id: '4',
    name: 'Kenny',
    avatar:
      'https://pyxis.nymag.com/v1/imgs/630/6e0/eb215ad90cd826b9e57ff505f54c5c7228-07-avatar.rsquare.w700.jpg',

    image:
      'https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510__340.jpg',
  },
  {
    id: '5',
    name: 'Sonny',
    avatar:
      'https://pyxis.nymag.com/v1/imgs/630/6e0/eb215ad90cd826b9e57ff505f54c5c7228-07-avatar.rsquare.w700.jpg',

    image:
      'https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510__340.jpg',
  },
];

const Story = () => {
  return (
    <View style={styles.container}>
      <FlatList
        horizontal
        data={DATA}
        ListHeaderComponent={
          <TouchableOpacity style={styles.item}>
            <View style={styles.add}>
              <Text style={styles.text}>+</Text>
            </View>
            <Text style={styles.name}>Add</Text>
          </TouchableOpacity>
        }
        renderItem={({item}) => (
          <TouchableOpacity style={styles.item}>
            <View style={styles.backgroundImage}>
              <Image style={styles.logo} source={{uri: item.image}} />
            </View>
            <Text style={styles.name}>{item.name}</Text>
            <Image style={styles.avatar} source={{uri: item.avatar}} />
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default Story;
