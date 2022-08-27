import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import styles from './SelectCategory.styles';
import NeuMorph from '../NeuMorph';
import ImageLinks from '../../utils/ImagesLinks';
import {CATEGORY} from '../../utils/enums';

export default function SelectCategory({category, setCategory}) {
  const categories = [CATEGORY.RESEDENTIAL, CATEGORY.COMMERCIAL];
  return (
    <View>
      <View>
        <Text style={styles.heading}>Select category</Text>
      </View>
      <View style={[styles.row, styles.justifyBetween]}>
        {categories?.map((catg, index) => {
          return (
            <TouchableOpacity key={index} onPress={() => setCategory(catg)}>
              <NeuMorph style={category === catg ? styles.activeCategory : {}}>
                <Image
                  source={ImageLinks.residentialProperty}
                  style={category === catg ? styles.activeCategoryImage : {}}
                />
                <Text
                  style={[
                    styles.cardLabel,
                    category === catg ? styles.activeLabel : {},
                  ]}>
                  {catg}
                </Text>
              </NeuMorph>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}
