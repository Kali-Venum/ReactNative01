import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ScreenTwo({navigation}) {
  return (
    <View>
      <Text>Screen Two</Text>
      <Button title="Back" onPress={()=>navigation.goBack()} />
    </View>
  )
}

const styles = StyleSheet.create({})