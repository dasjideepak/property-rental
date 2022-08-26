import React from 'react';
import {ScrollView} from 'react-native';
import MainContainer from '../components/layout/MainContainer';
import Header from '../components/Header';
import styles from './Home.styles';

export default function Home() {
  return (
    <MainContainer topMargin={0}>
      <ScrollView>
        <Header />
      </ScrollView>
    </MainContainer>
  );
}
