import React from 'react';
import {View} from 'react-native';
import {RENTING_AS} from '../../utils/enums';
import Stack from '../Stack';

export default function RentingAs({rentingAs, setRentingAs}) {
  const ownerType = [RENTING_AS.TENANT, RENTING_AS.OWNER];
  return (
    <View>
      <Stack
        heading={'Renting as'}
        data={ownerType}
        activeItem={rentingAs}
        setActiveItem={setRentingAs}
      />
    </View>
  );
}
