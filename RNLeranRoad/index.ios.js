/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';


//================================================================
//state学习
// class Blink extends Component {
//   constructor (props){
//     super(props);
//     this.state= {showText:true};
//
//     setInterval(()=>{
//       this.setState({showText:!this.state.showText});
//     },1000);
//   }
//   render(){
//     let display = this.state.showText ? this.props.text :'';
//     return (
//         <Text>{display}</Text>
//     );
//   }
//
// }
//  class flexDemo extends Component {
//
//   render(){
//     return(
//       <View>
//         <Blink text = '这是第一行'/>
//         <Blink text = '这是第二行'/>
//         <Blink text = '这是第三行'/>
//         <Blink text = '这是第四行'/>
//
//       </View>
//
//
//     );
//   }
// }
//
// //================================================================
// //默认学习*/
// class flexDemo extends Component {
//
//     render(){
//         return(
//             <View>
//
//
//             </View>
//
//
//         );
//     }
// }

//================================================================
//style 样式学习
//js对大小写敏感，使用文本需大写
//居后的样式比居前的样式优先级高
export class RNLeranRoad extends Component {

    render(){
        return(
            <View>

              <Text style={styles.red}> just red</Text>
              <Text style={styles.bigblue}> just bigblue</Text>

              <Text style={[styles.bigblue, styles.red]}>bigblue ,then red</Text>
              <Text style={[styles.red, styles.bigblue]}> red ,then bigblue</Text>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    bigblue:{
        color:'blue',
        fontWeight:'bold',
        fontSize:30,
    },
    red:{
        color:'red',
    }
});
AppRegistry.registerComponent('RNLeranRoad', () => RNLeranRoad);
