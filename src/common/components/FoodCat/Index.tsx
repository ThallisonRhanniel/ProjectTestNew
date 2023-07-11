import React, {useState} from 'react';
import {Button, Text, View} from 'react-native';

type CatProps = {
  name: string;
};

const CatFoodName = (props: CatProps) => {
  const [isHungry, setIsHungry] = useState(true);

  return (
    <View>
      <Text>
        I am {props.name}, and I am {isHungry ? 'hungry' : 'full'}!
      </Text>
      <Button
        onPress={() => {
          setIsHungry(false);
        }}
        disabled={!isHungry}
        title={isHungry ? 'Pour me some milk, please!' : 'Thank you!'}
      />
      
      <Button
        onPress={() => {
          setIsHungry(true);
        }}
        
        title={'Give more food to the cat'}
      />
    </View>
  );
};

const Cafe = () => {
  return (
    <>
      <CatFoodName name="Munkustrap" />
      <CatFoodName name="Spot" />
    </>
  );
};

export default Cafe;