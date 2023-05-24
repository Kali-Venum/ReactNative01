import {StyleSheet, Text, View, Linking, Image} from 'react-native';
import React from 'react';

export default function ActionCard() {
  function openWebsite(websiteLink: string) {
    Linking.openURL(websiteLink);
  }
  return (
    <View>
      <Text style={styles.headingText}>Action Card</Text>
      <View style={[styles.card, styles.elevetedCard]}>
        <View style={styles.headingContainer}>
          <Text style={styles.headerText}>Image 2</Text>
        </View>
        <Image
          source={{
            uri: 'https://images.pexels.com/photos/2382705/pexels-photo-2382705.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
          }}
          style={styles.cardImage}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {},
  card: {},
  elevetedCard: {},
  headingContainer: {},
  headerText: {},
  cardImage: {
    height: 100
  }
});
