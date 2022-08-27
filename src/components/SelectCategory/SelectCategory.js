import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import styles from './SelectCategory.styles';
import NeuMorph from '../NeuMorph';
import {categories} from '../../utils/enums';

export default function SelectCategory({category, setCategory}) {
  return (
    <View>
      <View>
        <Text style={styles.heading}>Select category</Text>
      </View>
      <View style={[styles.row, styles.justifyBetween]}>
        {categories?.map((item, index) => {
          return (
            <TouchableOpacity
              style={styles.categoryCard}
              key={index}
              onPress={() => setCategory(item?.name)}>
              <NeuMorph
                style={category === item?.name ? styles.activeCategory : {}}>
                <Image
                  source={item?.image}
                  style={
                    category === item?.name ? styles.activeCategoryImage : {}
                  }
                />
                <Text
                  style={[
                    styles.cardLabel,
                    category === item?.name ? styles.activeLabel : {},
                  ]}>
                  {item?.name}
                </Text>
              </NeuMorph>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}
