import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import BoasVindas from './components/BoasVindas';

export default class App extends Component{
  render(){
    return (
      <View style={styles.container}>
        <BoasVindas saudacao='Bom dia!' />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
     backgroundColor: '#fff'
  },
});
