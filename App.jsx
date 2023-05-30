import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

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
import LoginScreen1 from './screens/LoginScreen1';

// All routes.
import Routes from './routes';

const App = () => {
  const [isFirstLaunch, setIsFirstLaunch] = useState(null);

  useEffect(() => {
    SplashScreen.hide();
    AsyncStorage.getItem('alreadyLaunched').then(value => {
      if (value === null) {
        AsyncStorage.setItem('alreadyLaunched', 'true');
        setIsFirstLaunch(true);
      } else {
        setIsFirstLaunch(false);
      }
    });
  }, []);

  if (isFirstLaunch === null) {
    return null;
  } else if (isFirstLaunch === true) {
    return (
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    );
  } else {
    return <LoginScreen1 />;
  }

  // return (
  //   <NavigationContainer>
  //     <Routes />
  //   </NavigationContainer>
  // );
};

export default App;
