import {Image, StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';

export default function LoginScreen() {
  return (
    <View>
      <View style={styles.headingView}>
        <Text style={{fontWeight: 'bold', fontSize: 20}}>Login Screen</Text>
      </View>
      <View style={styles.imageView}>
        <Image
          style={{height: 200, width: 200}}
          source={require('../assets/login-logo.jpg')}
        />
      </View>
      <View>
        <TextInput style={styles.textInput} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headingView: {
    flex: 1,
    alignItems: 'center',
    marginTop: 10,
  },
  imageView: {
    flex: 1,
    alignItems: 'center',
    margin: 30,
  },
  textInput: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
