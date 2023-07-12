import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView, TextInput } from 'react-native';
import React from 'react';
import CatFullName from './src/common/components/ShowCatName/Index';
import Cat from './src/common/components/ShowTitleAndInput/Index';
import CatApp from './src/common/components/ShowCatImage/Index';
import Cafe from './src/common/components/FoodCat/Index';
import PizzaTranslator from './src/common/components/PizzaTranslator/Index';
import SuperScrollView from './src/common/components/SuperScrollView/Index';
import SuperBasicFlatList from './src/common/components/SuperBasicFlatList';


export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <SuperBasicFlatList></SuperBasicFlatList>
      
    
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f7f7',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
