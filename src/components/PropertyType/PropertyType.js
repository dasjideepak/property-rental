import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import styles from './PropertyType.styles';
import NeuMorph from '../NeuMorph';
import {propertyTypes} from '../../utils/enums';

export default function PropertyType({
  category,
  propertyType,
  setPropertyType,
}) {
  return (
    <View>
      <View>
        <Text style={styles.heading}>Property type*</Text>
      </View>
      <View style={[styles.row, styles.justifyBetween]}>
        {propertyTypes[category]?.map((item, index) => {
          return (
            <TouchableOpacity
              style={styles.categoryCard}
              key={index}
              onPress={() => setPropertyType(item?.name)}>
              <NeuMorph
                style={
                  propertyType === item?.name ? styles.activeProperty : {}
                }>
                <Image
                  source={item?.image}
                  style={
                    propertyType === item?.name
                      ? styles.activePropertyImage
                      : {}
                  }
                />
                <Text
                  style={[
                    styles.cardLabel,
                    propertyType === item?.name ? styles.activeLabel : {},
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
