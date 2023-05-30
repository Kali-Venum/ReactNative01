import {createNativeStackNavigator} from '@react-navigation/native-stack';

// Screens.
import LoginScreen1 from '../screens/LoginScreen1';
import OnbordingScreen from '../screens/OnbordingScreen';

const Routes = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="OnbordingScreen">
      <Stack.Screen name="OnbordingScreen" component={OnbordingScreen} />
      <Stack.Screen name="LoginScreen1" component={LoginScreen1} />
    </Stack.Navigator>
  );
};

export default Routes;
