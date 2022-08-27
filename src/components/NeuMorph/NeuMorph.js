import React from 'react';
import {View} from 'react-native';
import styles from './NeuMorph.styles';

export default function NeuMorph({
  children,
  width,
  height,
  borderRadius,
  style,
}) {
  return (
    <View style={styles.topShadow}>
      <View style={styles.bottomShadow}>
        <View
          style={[
            styles.inmer,
            {
              borderRadius: borderRadius || 10,
            },
            style,
          ]}>
          {children}
        </View>
      </View>
    </View>
  );
}
