import React from 'react';
import {View} from 'react-native';
import Stack from '../Stack';

export default function Bedrooms({bedroomSize, setBedroomSize}) {
  const bedroomSizes = ['1', '2', '2.5', '3', '3.5', '4', '5+', 'Studio'];
  return (
    <View>
      <Stack
        heading={'Bedrooms'}
        data={bedroomSizes}
        activeItem={bedroomSize}
        setActiveItem={setBedroomSize}
      />
    </View>
  );
}
