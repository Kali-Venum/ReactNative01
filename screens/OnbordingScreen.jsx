import {StyleSheet, Text, View, Image, Button} from 'react-native';
import React from 'react';
import Onboarding from 'react-native-onboarding-swiper';

// const SkipButton = ({...props}) => {
//   <Button title="Skip" color="#000000" {...props} />;
// };

// const NextButton = ({...props}) => {
//   <Button title="Next" color="#000000" {...props} />;
// };

// const DoneButton = ({...props}) => {
//   <Button title="Done" color="#000000" {...props} />;
// };

export default function OnbordingScreen({navigation}) {
  return (
    <Onboarding
      // SkipButtonComponent={SkipButton}
      // NextButtonComponent={NextButton}
      // DoneButtonComponent={DoneButton}
      onSkip={() => navigation.replace('LoginScreen1')}
      onDone={() => navigation.navigate('LoginScreen1')}
      pages={[
        {
          backgroundColor: '#a6e4d0',
          image: (
            <Image
              source={require('../assets/onboarding/onboarding-img1.png')}
            />
          ),
          title: 'Onboarding 1',
          subtitle: 'Done with React Native Onboarding Swiper',
        },
        {
          backgroundColor: '#fdeb93',
          image: (
            <Image
              source={require('../assets/onboarding/onboarding-img2.png')}
            />
          ),
          title: 'Onboarding 2',
          subtitle: 'Done with React Native Onboarding Swiper',
        },
        {
          backgroundColor: '#e9bcbe',
          image: (
            <Image
              source={require('../assets/onboarding/onboarding-img3.png')}
            />
          ),
          title: 'Onboarding 3',
          subtitle: 'Done with React Native Onboarding Swiper',
        },
      ]}
    />
  );
}

const styles = StyleSheet.create({});
