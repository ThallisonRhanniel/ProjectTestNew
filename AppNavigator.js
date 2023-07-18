
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/native-stack'

// import { IndexScreen } from './screens/index.screen'
// import { DetailsScreen } from './screens/details.screen'

const { Navigator, Screen } = createStackNavigator()

const HomeNavigator = () => (
    <Navigator headerMode='none'>
        <Screen name='Home' component={HomeScreen}/>
        <Screen name='Profile' component={ProfileScreen}/>
    </Navigator>
)

export const AppNavigator = () => (
    <NavigationContainer>
        <HomeNavigator/>
    </NavigationContainer>
)


const HomeScreen = ({navigation}) => {
    return (
      <Button
        title="Go to Jane's profile"
        onPress={() =>
          navigation.navigate('Profile', {name: 'Jane'})
        }
      />
    );
};

const ProfileScreen = ({navigation, route}) => {
    return <Text>This is {route.params.name}'s profile</Text>;
};