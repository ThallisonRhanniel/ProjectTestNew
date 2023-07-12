import React from 'react';
import {Platform , FlatList, StyleSheet, Text, View, TextInput} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    ...Platform.select({
        ios: {
          backgroundColor: '#97111132',
        },
        android: {
          backgroundColor: 'green',
        },
        default: {
          // other platforms, web for example
          backgroundColor: 'blue',
        },
      }),
  },
  item: {
    padding: 10,
    fontSize: 28,
    height: 44,
    alignContent: "center",
    alignItems: "center",
    alignSelf: "center", 
    
    
    
  },
});

const SuperBasicFlatList = () => {
  return (
    <View style={styles.container}>
      <TextInput/>
      <FlatList
        data={[
          {key: 'Devin'},
          {key: 'Dan'},
          {key: 'Dominic'},
          {key: 'Jackson'},
          {key: 'James'},
          {key: 'Joel'},
          {key: 'John'},
          {key: 'Jillian'},
          {key: 'Jimmy'},
          {key: 'Julie'},
        ]}
        renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
      />
    </View>
  );
};

export default SuperBasicFlatList;