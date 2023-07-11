import React from 'react';
import {Text, View} from 'react-native';

type CatProps = {
    name: string;
};

const CatName = (catProps: CatProps) => {
    return (
      <View>
        <Text>Hello, I am {catProps.name}!</Text>
      </View>
    );
  };


const getFullName = (firstName: string,  secondName: string,  thirdName: string,) => {
  return firstName + ' ' + secondName + ' ' + thirdName;
};

const CatFullName = () => {
    return (
        <View>
          <CatName name="Maru" />
          <CatName name="Jellylorum" />
          <CatName name="Spot" />
        </View>
      );
    //   return <Text>Hello, I am {getFullName('Rum', 'Tum', 'Tuggerrr')}!</Text>;
};

export default CatFullName;