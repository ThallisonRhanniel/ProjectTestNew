
import * as React from 'react';
import { Button,Text }  from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

console.log("hei");
console.log(`teste ${createNativeStackNavigator}`);
const { Navigator, Screen } = createNativeStackNavigator();

const HomeNavigator = () => (
    <Navigator>
        <Screen name='Home' component={HomeScreen}/>
        <Screen name='Profile' component={ProfileScreen}/>
    </Navigator>
)


export const AppNavigator = () => (
    <NavigationContainer>
        <HomeNavigator/>
    </NavigationContainer>
)


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

const ProfileScreen = ({navigation, route}:any) => {
    return <Text>This is {route.params.name}'s profile</Text>;
};