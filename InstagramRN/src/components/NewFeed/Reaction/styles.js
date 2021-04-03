import {StyleSheet} from 'react-native';
export const styles = StyleSheet.create({
  Container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    flexDirection: 'row',
  },
  icon: {
    width: 30,
    height: 30,
    top: 10,
  },
  icon_Heart: {
    fontSize: 20,
    top: 10,
    right: 20,
    color: 'red',
  },
  icon_Message: {
    fontSize: 20,
    top: 10,
    color: 'grey',
  },
  icon_Find: {
    fontSize: 25,
    top: 10,
    color: 'grey',
  },
  icon_Home: {
    fontSize: 15,
    top: 10,
    left: 20,
    color: 'grey',
  },
  View: {
    top: 20,
    marginBottom: 50,
  },
  text: {
    color: 'red',
  },
  text_comment: {
    fontSize: 12,
  },
});
