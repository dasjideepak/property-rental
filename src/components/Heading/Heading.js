import React from 'react';
import {Text, View} from 'react-native';
import styles from './Heading.styles';

export default function Heading({label}) {
  return (
    <View>
      <Text style={styles.heading}>{label}</Text>
    </View>
  );
}
