import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import styles from './Cards.styles';
import NeuMorph from '../NeuMorph';

export default function Cards({heading, data, activeCard, setActiveCard}) {
  function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  return (
    <View>
      <View>
        <Text style={styles.heading}>{heading}</Text>
      </View>
      <View style={[styles.row, styles.justifyBetween]}>
        {data?.map((item, index) => {
          return (
            <TouchableOpacity
              style={styles.categoryCard}
              key={index}
              onPress={() => setActiveCard(item?.name)}>
              <NeuMorph
                style={activeCard === item?.name ? styles.activeCategory : {}}>
                <Image
                  source={item?.image}
                  style={
                    activeCard === item?.name ? styles.activeCategoryImage : {}
                  }
                />
                <Text
                  style={[
                    styles.cardLabel,
                    activeCard === item?.name ? styles.activeLabel : {},
                  ]}>
                  {capitalize(item?.name)}
                </Text>
              </NeuMorph>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}
