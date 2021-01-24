import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {TextComponent} from './components';

//class component  =>> function componment

//1. Class component
// class Main extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       count: 0,
//     };
//   }

//   _onCountNumber = () => {
//     this.setState({
//       count: this.state.count + 1,
//     });
//   };
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text>{this.state.count}</Text>
//         <TouchableOpacity onPress={this._onCountNumber}>
//           <Text>Click</Text>
//         </TouchableOpacity>
//       </View>
//     );
//   }
// }

//2. function component - hooks

//state: de thay doi 1 gia tri trong chinh component day

//props: tach component ra cho ro rang hon,
//      va chi nhan gia tri, khong thay doi duoc

const Main = () => {
  const [count, setCount] = useState(0);

  _onCountNumber = () => {
    setCount(count + 1);
  };

  //useEffect dung de call api
  useEffect(() => {
    alert('called api');
    //call api
    //refresh data
  }, []);

  //alert number count after click
  useEffect(() => {
    alert(JSON.stringify(count));
  }, [count]);

  return (
    <View style={styles.container}>
      <TextComponent text={count} />
      <TouchableOpacity onPress={_onCountNumber}>
        <Text>Click</Text>
      </TouchableOpacity>
      <TextComponent text={count} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default Main;
