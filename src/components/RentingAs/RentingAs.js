import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import styles from './RentingAs.styles';
import NeuMorph from '../NeuMorph';
import {RENTING_AS} from '../../utils/enums';

export default function RentingAs({rentingAs, setRentingAs}) {
  const ownerType = [RENTING_AS.TENANT, RENTING_AS.OWNER];
  return (
    <View>
      <View>
        <Text style={styles.heading}>Renting as</Text>
      </View>
      <View style={styles.row}>
        {ownerType?.map((item, index) => {
          return (
            <TouchableOpacity key={index} onPress={() => setRentingAs(item)}>
              <NeuMorph
                style={[
                  styles.button,
                  rentingAs === item ? styles.activeButton : {},
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
