import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function FlatCards() {
  return (
    <View>
      <Text style={styles.headingText}> Flat Cards </Text>
      <View style={styles.container}>
        <View style={[styles.card, styles.cardOne]}>
          <Text style={{color: 'white', fontWeight: 'bold'}}>Red</Text>
        </View>
        <View style={[styles.card, styles.cardTwo]}>
          <Text style={{color: 'white', fontWeight: 'bold'}}>Blue</Text>
        </View>
        <View style={[styles.card, styles.cardThree]}>
          <Text style={{color: 'white', fontWeight: 'bold'}}>Green</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingHorizontal: 10,
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    padding: 8,
  },
  card: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: 100,
    borderRadius: 4,
    margin: 8,
  },
  cardOne: {
    backgroundColor: '#FF0000',
  },
  cardTwo: {
    backgroundColor: '#0000FF',
  },
  cardThree: {
    backgroundColor: '#008000',
  },
});
