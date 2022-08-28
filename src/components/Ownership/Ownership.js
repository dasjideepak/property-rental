import React from 'react';
import {View} from 'react-native';
import Stack from '../Stack';

export default function Ownership({ownership, setOwnership}) {
  const ownerType = ['Owned by self', 'Owned by a family member'];
  return (
    <View>
      <Stack
        heading={'Ownership'}
        data={ownerType}
        activeItem={ownership}
        setActiveItem={setOwnership}
      />
    </View>
  );
}
