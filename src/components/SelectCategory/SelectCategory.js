import React from 'react';
import {View} from 'react-native';
import {categories} from '../../utils/enums';
import Cards from '../Cards';

export default function SelectCategory({category, setCategory}) {
  return (
    <View>
      <Cards
        heading={'Select category'}
        data={categories}
        activeCard={category}
        setActiveCard={setCategory}
      />
    </View>
  );
}
