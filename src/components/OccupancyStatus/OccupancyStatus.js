import React from 'react';
import {View} from 'react-native';
import Stack from '../Stack';

export default function OccupancyStatus({occupancyStatus, setOccupancyStatus}) {
  const occupancyStatuses = [
    'Vacant',
    'Rented',
    'Leased',
    'Self occupied',
    'Under construction',
    'Newly constructed/Ready to move in',
  ];
  return (
    <View>
      <Stack
        heading={'Occupancy status'}
        data={occupancyStatuses}
        activeItem={occupancyStatus}
        setActiveItem={setOccupancyStatus}
      />
    </View>
  );
}
