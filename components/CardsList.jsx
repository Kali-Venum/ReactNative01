import {ScrollView, StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

export default function CardsList() {
  return (
    <ScrollView>
      <View style={styles.cardView}>
        <View style={styles.card}>
          <Image
            source={{
              uri: 'https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            }}
            width={190}
            height={135}
          />
          <Text style={{fontWeight: 'bold', padding: 5}}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod,
            illum?
          </Text>
          <Text style={{fontWeight: 'bold', padding: 5}}>Rs:- 100</Text>
        </View>
        <View style={styles.card}>
          <Image
            source={{
              uri: 'https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            }}
            width={190}
            height={135}
          />
          <Text style={{fontWeight: 'bold', padding: 5}}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod,
            illum?
          </Text>
          <Text style={{fontWeight: 'bold', padding: 5}}>Rs:- 100</Text>
        </View>
      </View>

      <View style={styles.cardView}>
        <View style={styles.card}>
          <Image
            source={{
              uri: 'https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            }}
            width={190}
            height={135}
          />
          <Text style={{fontWeight: 'bold', padding: 5}}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod,
            illum?
          </Text>
          <Text style={{fontWeight: 'bold', padding: 5}}>Rs:- 100</Text>
        </View>
        <View style={styles.card}>
          <Image
            source={{
              uri: 'https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            }}
            width={190}
            height={135}
          />
          <Text style={{fontWeight: 'bold', padding: 5}}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod,
            illum?
          </Text>
          <Text style={{fontWeight: 'bold', padding: 5}}>Rs:- 100</Text>
        </View>
      </View>

      <View style={styles.cardView}>
        <View style={styles.card}>
          <Image
            source={{
              uri: 'https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            }}
            width={190}
            height={135}
          />
          <Text style={{fontWeight: 'bold', padding: 5}}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod,
            illum?
          </Text>
          <Text style={{fontWeight: 'bold', padding: 5}}>Rs:- 100</Text>
        </View>
        <View style={styles.card}>
          <Image
            source={{
              uri: 'https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            }}
            width={190}
            height={135}
          />
          <Text style={{fontWeight: 'bold', padding: 5}}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod,
            illum?
          </Text>
          <Text style={{fontWeight: 'bold', padding: 5}}>Rs:- 100</Text>
        </View>
      </View>

      <View style={styles.cardView}>
        <View style={styles.card}>
          <Image
            source={{
              uri: 'https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            }}
            width={190}
            height={135}
          />
          <Text style={{fontWeight: 'bold', padding: 5}}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod,
            illum?
          </Text>
          <Text style={{fontWeight: 'bold', padding: 5}}>Rs:- 100</Text>
        </View>
        <View style={styles.card}>
          <Image
            source={{
              uri: 'https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            }}
            width={190}
            height={135}
          />
          <Text style={{fontWeight: 'bold', padding: 5}}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod,
            illum?
          </Text>
          <Text style={{fontWeight: 'bold', padding: 5}}>Rs:- 100</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  cardView: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  card: {
    width: 190,
    height: 210,
    // backgroundColor: 'red',
    margin: 10,
  },
});
