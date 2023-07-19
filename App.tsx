import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView, TextInput, Button } from 'react-native';
import React from 'react';
import CatFullName from './src/common/components/ShowCatName/Index';
import Cat from './src/common/components/ShowTitleAndInput/Index';
import CatApp from './src/common/components/ShowCatImage/Index';
import Cafe from './src/common/components/FoodCat/Index';
import PizzaTranslator from './src/common/components/PizzaTranslator/Index';
import SuperScrollView from './src/common/components/SuperScrollView/Index';
import SuperBasicFlatList from './src/common/components/SuperBasicFlatList';
import DirectionFlexBox from './src/common/components/SuperFlexBox/DirectionFlexBox/Index';
import JustifyFlexBox from './src/common/components/SuperFlexBox/JustifyFlexBox/Index';
import SuperImageView from './src/common/components/SuperImagens/Index';
import ButtonBasics from './src/common/components/ButtonBasics/Index';
import Touchables from './src/common/components/ButtonTouchables/Index';

import { AppNavigator } from './AppNavigator';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (

    <AppNavigator></AppNavigator>

    // <NavigationContainer>
    //   <Stack.Navigator>
    //     <Stack.Screen
    //       name="Home"
    //       component={HomeScreen}
    //       options={{title: 'Welcomes'}}
    //     />
    //     <Stack.Screen name="Profile" component={ProfileScreen} />
    //   </Stack.Navigator>
    // </NavigationContainer>

    // <View style={styles.container}>
    //   <StatusBar style="auto" />
    //   <Cat></Cat>
    //   {/* <ButtonBasics></ButtonBasics> */}
    //   {/* <Touchables></Touchables> */}
    //   {/* <SuperImageView></SuperImageView> */}
    //   {/* <SuperBasicFlatList></SuperBasicFlatList> */}
    //   <PizzaTranslator></PizzaTranslator>
    // </View>
    
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


const HomeScreen = ({navigation}:any) => {
  return (
    <Button
      title="Go to Jane's profile"
      onPress={() =>
        navigation.navigate('Profile', {name: 'Jane'})
      }
    />
  );
};
const ProfileScreen = ({navigation, route}: any) => {
  return <Text>This is {route.params.name}'s profile</Text>;
};


