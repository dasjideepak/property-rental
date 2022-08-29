import React from 'react';
import {Alert, Image, TouchableOpacity, View} from 'react-native';
import styles from './Header.styles';
import ImageLinks from '../../utils/ImagesLinks';
import NeuMorph from '../NeuMorph';
import {Linking} from 'react-native';

export default function Home() {
  const handleButtonClick = type => Alert.alert(`${type} Button Pressed`);

  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={() => handleButtonClick('Back')}>
        <NeuMorph style={styles.headerButtons}>
          <Image source={ImageLinks.headerArrowBack} />
        </NeuMorph>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => Linking.openURL('tel:+919457369439')}>
        <NeuMorph style={styles.headerButtons}>
          <Image source={ImageLinks.headerCallCalling} />
        </NeuMorph>
      </TouchableOpacity>
    </View>
  );
}
