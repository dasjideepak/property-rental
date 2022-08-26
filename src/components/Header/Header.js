import React from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import styles from './Header.styles';
import ImageLinks from '../../utils/ImagesLinks';

export default function Home() {
  const NeuMorph = ({children, size, style}) => {
    return (
      <View style={styles.topShadow}>
        <View style={styles.bottomShadow}>
          <View
            style={[
              styles.inmer,
              {
                width: size || 48,
                height: size || 48,
                borderRadius: size / 2 || 20 / 2,
              },
              style,
            ]}>
            {children}
          </View>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={() => {}}>
        <NeuMorph>
          <Image source={ImageLinks.headerArrowBack} />
        </NeuMorph>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => {}}>
        <NeuMorph>
          <Image source={ImageLinks.headerCallCalling} />
        </NeuMorph>
      </TouchableOpacity>
    </View>
  );
}
