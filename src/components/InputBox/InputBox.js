import React from 'react';
import {Image, TextInput, View} from 'react-native';
import styles from './InputBox.styles';

export default function InputBox({
  icon,
  style,
  value,
  onChangeText,
  placeholder,
}) {
  return (
    <View style={styles.topShadow}>
      <View style={styles.bottomShadow}>
        <View style={[styles.inmer, style, icon ? styles.row : {}]} />
        {icon && <Image style={styles.icon} source={icon} />}
        <TextInput
          style={styles.input}
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
        />
      </View>
    </View>
  );
}
