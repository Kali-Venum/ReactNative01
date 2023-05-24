import React from 'react';
import {View, Text, SafeAreaView, ScrollView} from 'react-native';

// Components.
import FlatCards from './components/FlatCards';
import ElevatedCards from './components/ElevatedCards';
import FancyCards from './components/FancyCards';
import ActionCard from './components/ActionCard';

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <FlatCards />
        <ElevatedCards />
        <FancyCards />
        <ActionCard />
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
