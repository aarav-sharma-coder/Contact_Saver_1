import React, { Component} from 'react';
import {StyleSheet, View, Text,TouchableOpacity} from 'react-native';
import { DrawerItems} from 'react-navigation-drawer'

export default class CustomSideBarMenu extends Component{
  render(){
    return(
      <View style={styles.drawerItemsContainer}>
      <DrawerItems {...this.props}/>
    </View>
    )
  }
}
var styles = StyleSheet.create({
  container : {
    flex:1
  },
  drawerItemsContainer:{
    flex:0.8
  },
})