'use strict';

import React, { Component } from 'react';
const { StyleSheet, ListView, View, Text,
        ActivityIndicator, Animated, ScrollView } = require('react-native');

import { connect } from 'react-redux';

import * as Actions from '../actions'; //Import your actions

class Home extends Component {
  constructor(props) {
        super(props);

      };


  componentDidMount() {
        this.props.getData(); //call our action
    }



  render() {
    return(
      <View style={styles.container}>
        <Text style={styles.paragraph}>
          Welcome to SHADE, the greatest app created by the Backyard Boiz
        </Text>
        <Image style={styles.logo} source={require("../assets/logo.jpg")}/>
      </View>
    );
  };
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  paragraph: {
    margin: 24,
    marginTop: 0,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#ffb6c1',
  },
  logo: {
    backgroundColor: "#ffffff",
    height: 128,
    width: 128,
  }
});

