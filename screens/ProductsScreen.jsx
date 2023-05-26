import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import {SearchBar} from 'react-native-elements';
// import * as Icon from "react-native-feather";
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import CardsList from '../components/CardsList';

export default function ProductsScreen() {
  mySearchIcon = <Icon name="rocket" size={30} color="#900" />;

  return (
    <View>
      <View>
        <Text style={styles.productHeadingText}>Products Screen</Text>
      </View>
      <View style={{flex: 1, flexDirection: 'row'}}>
        <View style={styles.searchContainer}>
          <TextInput style={styles.searchBar} />
          <Icon.Button
            name="search"
            backgroundColor="#FFFFFF00"
            color="#000000"
            borderRadius={50}
            marginTop={5}
            padding={5}
          />
        </View>
        <View style={styles.iconView}>
          <Icon.Button
            name="filter"
            backgroundColor="#FFFFFF00"
            color="#000000"
            borderRadius={50}
            margin={'auto'}
            padding={5}
          />
          <Icon.Button
            name="filter"
            backgroundColor="#FFFFFF00"
            color="#000000"
            borderRadius={50}
            margin={'auto'}
            padding={5}
          />
        </View>
      </View>
      <CardsList />
    </View>
  );
}

const styles = StyleSheet.create({
  productHeadingText: {
    fontWeight: 'bold',
    padding: 10,
    marginTop: 20,
    fontSize: 25,
  },
  searchContainer: {
    flexDirection: 'row',
    borderWidth: 1,
    borderRadius: 50,
    flex: 3,
    marginLeft: 10,
    height: 40
  },
  searchBar: {
    marginLeft: 10,
    flex: 1,
    paddingLeft: 5,
    height: 40
  },
  iconView: {
    flex: 1,
    flexDirection: 'row',
    marginLeft: 10,
    marginTop: 5,
  },
});
