import React, { Component } from 'react';
import {
  Button,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View
} from 'react-native';
import t from 'tcomb-form-native';

class Login extends Component {
  constructor(props){
    super(props)

    const User = t.struct({
      username: t.String,
      password: t.String
    })
  }


  render() {
    return(

      <ScrollView>
        <TextInput>



        </TextInput>
        <Button></Button>
      </ScrollView>

      )
  }

}

export default Login;


//Register with:
  // Username
  // Password (hashed)
  // Email
  // Emoji (menu to pick Emoji)

//Login with:
  //username
  //password