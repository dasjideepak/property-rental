import React, {useEffect, useState} from 'react';
import {ScrollView} from 'react-native';
import MainContainer from '../components/layout/MainContainer';
import Header from '../components/Header';
import SelectCategory from '../components/SelectCategory';
import RentingAs from '../components/RentingAs';
import PropertyType from '../components/PropertyType';

export default function Home() {
  const [category, setCategory] = useState('');
  const [rentingAs, setRentingAs] = useState('');
  const [propertyType, setPropertyType] = useState('');

  useEffect(() => {
    setPropertyType('');
  }, [category]);

  return (
    <MainContainer topMargin={0}>
      <ScrollView>
        <Header />
        <SelectCategory category={category} setCategory={setCategory} />
        <RentingAs rentingAs={rentingAs} setRentingAs={setRentingAs} />
        {category && (
          <PropertyType
            category={category}
            propertyType={propertyType}
            setPropertyType={setPropertyType}
          />
        )}
      </ScrollView>
    </MainContainer>
  );
}
