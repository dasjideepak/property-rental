import React, {useState} from 'react';
import {ScrollView} from 'react-native';
import MainContainer from '../components/layout/MainContainer';
import Header from '../components/Header';
import SelectCategory from '../components/SelectCategory';
import RentingAs from '../components/RentingAs';

export default function Home() {
  const [category, setCategory] = useState('');
  const [rentingAs, setRentingAs] = useState('');
  return (
    <MainContainer topMargin={0}>
      <ScrollView>
        <Header />
        <SelectCategory category={category} setCategory={setCategory} />
        <RentingAs rentingAs={rentingAs} setRentingAs={setRentingAs} />
      </ScrollView>
    </MainContainer>
  );
}
