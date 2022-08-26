import React from 'react';
import {SafeAreaView, ScrollView, Text, View} from 'react-native';

export default function Home() {
  return (
    <SafeAreaView>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View>
          <Text>Home Screen</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
