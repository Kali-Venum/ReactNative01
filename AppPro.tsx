import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  useColorScheme,
} from 'react-native';

// Styles.
const styles = StyleSheet.create({
    
})

const AppPro = (): JSX.Element => {
    const isDarkMode = useColorScheme() === "dark";
  return (
    <SafeAreaView>
      <View>
        <Text>Hello</Text>
        <Text>Hello</Text>
        <Text>Hello</Text>
      </View>
    </SafeAreaView>
  );
};

export default AppPro;
