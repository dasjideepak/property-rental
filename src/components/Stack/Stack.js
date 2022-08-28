import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import styles from './Stack.styles';
import NeuMorph from '../NeuMorph';
import Heading from '../Heading';

export default function Stack({heading, data, activeItem, setActiveItem}) {
  return (
    <View>
      <Heading label={heading} />
      <View style={styles.row}>
        {data?.map((item, index) => {
          return (
            <TouchableOpacity key={index} onPress={() => setActiveItem(item)}>
              <NeuMorph
                style={[
                  styles.button,
                  activeItem === item ? styles.activeButton : {},
                ]}>
                <Text style={styles.cardLabel}>{item}</Text>
              </NeuMorph>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}
