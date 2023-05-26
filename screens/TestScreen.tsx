import {FlatList, StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';

export default function TestScreen() {
  return (
    <View>
      <Text style={{fontWeight: 'bold', fontSize: 24, padding: 8}}>
        Test Screen
      </Text>
      <View>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              height: 60,
              width: '60%',
              borderRadius: 50,
              marginLeft: 8,
              borderWidth: 1,
              backgroundColor: 'black',
            }}>
            <TextInput
              style={{
                height: 50,
                width: '80%',
                borderRadius: 50,
                backgroundColor: 'white',
              }}
            />
            <View
              style={{
                height: 50,
                width: 50,
                borderRadius: 50,
                backgroundColor: 'gray',
                marginLeft: 5,
              }}></View>
          </View>

          <View
            style={{
              height: 50,
              borderWidth: 1,
              width: 50,
              borderRadius: 50,
              padding: 10,
              backgroundColor: 'red',
              marginLeft: 10,
              marginRight: 10,
            }}></View>
          <View
            style={{
              height: 50,
              borderWidth: 1,
              width: 50,
              borderRadius: 50,
              padding: 10,
              backgroundColor: 'blue',
              marginRight: 10,
            }}></View>
        </View>

        <View style={{marginTop: 80}}>
          <FlatList
            // style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}
            data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 6, 2, 4, 5, 67, 67]}
            numColumns={2}
            renderItem={({item}) => (
              <View
                style={{
                  width: '45%',
                  height: 200,
                  backgroundColor: 'green',
                  borderWidth: 1,
                  margin: 10,
                }}></View>
            )}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
