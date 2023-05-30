import {StyleSheet, Image, View, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';

// components.
import FormButton from '../components/FormButton';
import FormInput from '../components/FormInput';
import SocialButton from '../components/SocialButton';

export default function LoginScreen1() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/login-images/rn-social-logo.png')}
        style={styles.logo}
      />
      <Text style={styles.text}>Login Screen</Text>
      <FormInput
        labelValue={email}
        onChangeText={userEmail => setEmail(state => userEmail)}
        placeholderText="Email"
        iconType="user"
        keyboardType="email-address"
        autoCapetalize="none"
        autoCorrect={false}
      />
      <FormInput
        labelValue={password}
        onChangeText={userPassword => setPassword(state => userPassword)}
        placeholderText="Password"
        iconType="lock"
        secureTextEntry={true}
      />
      <FormButton
        buttonTitle="Login"
        onPress={() => alert('Login button clicked.')}
      />
      <TouchableOpacity style={styles.forgotButton} onPress={() => {}}>
        <Text style={styles.navButtonText}>Forgot Password ?</Text>
      </TouchableOpacity>

      <SocialButton
        buttonTitle="Sign in with facebook"
        btnType="facebook"
        color="#4867aa"
        backgroundColor="#e6eaf4"
        onPress={() => {}}
      />

      <SocialButton
        buttonTitle="Sign in with google"
        btnType="google"
        color="#de4d41"
        backgroundColor="#f5e7ea"
        onPress={() => {}}
      />

      <TouchableOpacity style={styles.forgotButton} onPress={() => {}}>
        <Text style={styles.navButtonText}>
          Don't have an account ? Create One
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f9fafd',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  logo: {
    height: 150,
    width: 150,
    resizeMode: 'cover'
  },
  text: {
    fontSize: 28,
    marginBottom: 10,
    color: '#051d5f',
  },
  forgotButton: {
    marginVertical: 35
  },
  navButtonText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#2e64e5'
  },
});
