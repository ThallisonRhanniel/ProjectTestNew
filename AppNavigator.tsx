
import * as React from 'react';
import { Button,Text }  from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const { Navigator, Screen } = createNativeStackNavigator();

const HomeNavigator = () => (
    <Navigator>
        <Screen name='Home' component={HomeScreen} options={{title: "Pagina 1"}} />
        <Screen name='Profile' component={ProfileScreen} options={{title: "Pagina 2"}}/>
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
          //console.log("teste", navigation)
          navigation.navigate('Profile', {name: 'Jane'})
        }
      />
    );
};

const ProfileScreen = ({navigation, route}:any) => {
    console.log("opaaa", route);
    return <Text>This is {route.params.name}'s profile</Text>;
};