
import * as React from 'react';
import { Button,Text,StatusBar, NativeModules }  from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Cat from './src/common/components/ShowTitleAndInput/Index';

const { Navigator, Screen } = createNativeStackNavigator();

const {CalendarModule} = NativeModules;

const HomeNavigator = () => (
    <Navigator>
        <Screen name='Home' component={HomeScreen} options={{title: "Tela Inicial", headerRight: () => (
          
            <Button
              onPress={() => 
                // alert('This is a button!')
                CalendarModule.createCalendarEvent('testName', 'testLocation')
              }
              title="Info"
              color="#803434"
            />
          ),}} />
        <Screen name='Profile' component={ProfileScreen} options={{title: "Tela de Perfil"}}/>
    </Navigator>
)


export const AppNavigator = () => (
    <NavigationContainer>
        <HomeNavigator/>
    </NavigationContainer>
)


const HomeScreen = ({navigation}:any) => {
    return (
      <>
        <StatusBar barStyle="dark-content" backgroundColor="#d51616" />
        <Cat></Cat>
        <Button
        title="Go to Jane's profile"
        onPress={() =>
          //console.log("teste", navigation)
          navigation.navigate('Profile', {name: 'Jane'})
        }/>
      </>
    );
};

const ProfileScreen = ({navigation, route}:any) => {
  console.log("opaaa", route);
  console.log("navigation:route", navigation);
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#d51616" />  
      <Text>This is {route.params.name}'s profile</Text>
    </>
  );
};