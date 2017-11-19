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

const Form = t.form.Form;

const User = t.struct({
    username: t.String,
    password: t.String,
    email: t.String,
    emoji: t.list(t.String), //emoji name
    terms: t.Boolean
});


class Register extends Component {
  constructor(props){
    super(props)
  }


  render() {
    return(

      <View style={styles.container}>
        <Form type={User}/>
      </View>

    );
  }
}

export default Register;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    marginTop: 50,
    padding: 20,
    backgroundColor: #ffb6c1,
  }
});


//Register with:
  // Username
  // Password (hashed)
  // Email
  // Emoji (menu to pick Emoji)

//Login with:
  //username
  //password