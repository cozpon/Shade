import React, { Component } from 'react';
import { Animated, ScrollView, Image, Dimensions, StyleSheet, Text, View } from 'react-native';
import Home from './app/components/home' //Import the component file

export default class App extends Component {

  render() {
    return (
      <View style={styles.container}>
      <Home/>


        <Text>Back</Text>
        <Text>Yard</Text>
        <Text>Boiz</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
