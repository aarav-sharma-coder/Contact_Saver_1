import React, { Component} from 'react';
import { Header } from 'react-native-elements';
import { View, Text, StyeSheet ,Alert} from 'react-native';

export default class MyHeader extends Component{
  
  render(){
  return (
    <Header
      leftComponent= {<Icon name = 'bars' type = 'font-awesome' color = '#696969' onPress = {()=>{this.props.navigation.toggleDrawer()}}/>}
      centerComponent={{ text: props.title, style: { color: '#90A5A9', fontSize:20,fontWeight:"bold", } }}
     
      backgroundColor = "green"
    />
  );
}
}
