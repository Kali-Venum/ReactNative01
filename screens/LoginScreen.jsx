import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View>
      <View style={styles.headingView}>
        <Text style={{fontWeight: 'bold', fontSize: 20}}>Login Screen</Text>
      </View>
      <View style={styles.imageView}>
        <Image
          style={{height: 300, width: 300}}
          source={require('../assets/login-logo.jpg')}
        />
      </View>
      <View style={styles.loginView}>
        <TextInput
          style={styles.textInput}
          placeholder="Enter your email"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Enter your password"
          value={password}
          onChangeText={setPassword}
        />
        <View>
          <TouchableOpacity style={styles.buttonInput}>
            <Text style={{color: 'white'}}>Login</Text>
          </TouchableOpacity>
        </View>
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
  loginView: {
    marginVertical: 20
  },
  textInput: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 50,
  },
  buttonInput: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#83a300',
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 50,
  },
});
