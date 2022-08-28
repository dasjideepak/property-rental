import React from 'react';
import {View} from 'react-native';
import {propertyTypes} from '../../utils/enums';
import Stack from '../Stack';

export default function PropertyTypeTabs({
  category,
  propertyType,
  setPropertyType,
}) {
  let data = propertyTypes[category]?.map(property => property.name);
  return (
    <View>
      <Stack
        heading={'Property type*'}
        data={data}
        activeItem={propertyType}
        setActiveItem={setPropertyType}
      />
    </View>
  );
}
