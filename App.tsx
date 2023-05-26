import React, {useEffect} from 'react';
import {View, Text, SafeAreaView, ScrollView} from 'react-native';

// Components.
import FlatCards from './components/FlatCards';
import ElevatedCards from './components/ElevatedCards';
import FancyCards from './components/FancyCards';
import ActionCard from './components/ActionCard';
import SplashScreen from 'react-native-splash-screen';
import LoginScreen from './screens/LoginScreen';
import ProductsScreen from './screens/ProductsScreen';
import TestScreen from './screens/TestScreen';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  });

  return (
    <SafeAreaView>
      {/* <ScrollView> */}
        {/* <FlatCards /> */}
        {/* <ElevatedCards /> */}
        {/* <FancyCards /> */}
        {/* <ActionCard /> */}

        {/* <LoginScreen /> */}

        {/* <ProductsScreen /> */}
      {/* </ScrollView> */}
      <TestScreen/>
    </SafeAreaView>
  );
};

export default App;
