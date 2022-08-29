import React from 'react';
import styles from './ActionButton.styles';
import {Text, TouchableOpacity, View, Linking, Alert} from 'react-native';

export default function ActionButtons() {
  const handleButtonClick = type => Alert.alert(`${type} Button Pressed`);

  return (
    <View>
      <View style={styles.row}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleButtonClick('Skip')}>
          <Text style={[styles.proceedButtonText, styles.skipButtonText]}>
            Skip
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.proceedButton]}
          onPress={() => handleButtonClick('Proceed')}>
          <Text style={styles.proceedButtonText}>Proceed</Text>
        </TouchableOpacity>
      </View>
      <View>
        <Text style={styles.orText}>Or</Text>
        <TouchableOpacity
          onPress={() => Linking.openURL('mailto:dasjideepak@gmail.com')}>
          <Text style={styles.reqCallbackText}>Request a call back</Text>
        </TouchableOpacity>
        <Text style={styles.takeCareText}>We’ll take care of it</Text>
      </View>
    </View>
  );
}
