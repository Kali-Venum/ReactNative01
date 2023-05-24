import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function ElevatedCards() {
  return (
    <View>
      <Text style={styles.headingText}>Elevated Cards</Text>
      <ScrollView horizontal={true} style={styles.container}>
        <View style={[styles.card, styles.cardElevated]}>
          <Text style={{color: 'white', fontWeight: 'bold'}}>Tap</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text style={{color: 'white', fontWeight: 'bold'}}>Tap</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text style={{color: 'white', fontWeight: 'bold'}}>Tap</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text style={{color: 'white', fontWeight: 'bold'}}>Tap</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text style={{color: 'white', fontWeight: 'bold'}}>Tap</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text style={{color: 'white', fontWeight: 'bold'}}>Tap</Text>
        </View>
      </ScrollView>
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
    padding: 8,
  },
  card: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: 100,
    backgroundColor: '#DDE6ED',
    borderRadius: 4,
    margin: 8
  },
  cardElevated: {
    backgroundColor: '#9DB2BF',
    elevation: 4,
    shadowOffset: {
        width: 1,
        height: 1
    },
    shadowColor: '#526D82',
    shadowOpacity: 0.8,
    shadowRadius: 2
  },
});
