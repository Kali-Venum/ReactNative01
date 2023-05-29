import React, {useEffect} from 'react';
import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// Components.
import FlatCards from './components/FlatCards';
import ElevatedCards from './components/ElevatedCards';
import FancyCards from './components/FancyCards';
import ActionCard from './components/ActionCard';
import SplashScreen from 'react-native-splash-screen';
import LoginScreen from './screens/LoginScreen';
import ProductsScreen from './screens/ProductsScreen';
import TestScreen from './screens/TestScreen';
import ScreenOne from './screens/ScreenOne';
import ScreenTwo from './screens/ScreenTwo';

const App = () => {
  const Stack = createNativeStackNavigator();

  useEffect(() => {
    SplashScreen.hide();
  });

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="One"
        screenOptions={{headerShown: false, animation: 'none'}}>
        <Stack.Screen name="One" component={ScreenOne} />
        <Stack.Screen name="Two" component={ScreenTwo} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
