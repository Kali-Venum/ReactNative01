import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'

export default function ScreenOne({navigation}) {
  return (
    <View>
      <Text>Screen One</Text>
      <Button title="Next" onPress={() => navigation.navigate('Two')} />
    </View>
  )
}

const styles = StyleSheet.create({})