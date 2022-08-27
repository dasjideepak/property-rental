import React from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import styles from './Header.styles';
import ImageLinks from '../../utils/ImagesLinks';
import NeuMorph from '../NeuMorph';
import {Linking} from 'react-native';

export default function Home() {
  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={() => {}}>
        <NeuMorph width={48} height={48}>
          <Image source={ImageLinks.headerArrowBack} />
        </NeuMorph>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => Linking.openURL('tel:+919457369439')}>
        <NeuMorph width={48} height={48}>
          <Image source={ImageLinks.headerCallCalling} />
        </NeuMorph>
      </TouchableOpacity>
    </View>
  );
}
