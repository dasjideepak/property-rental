import React from 'react';
import {View} from 'react-native';
import {propertyTypes} from '../../utils/enums';
import Cards from '../Cards';

export default function PropertyType({
  category,
  propertyType,
  setPropertyType,
}) {
  return (
    <View>
      <Cards
        heading={'Property type*'}
        data={propertyTypes[category]}
        activeCard={propertyType}
        setActiveCard={setPropertyType}
      />
    </View>
  );
}
