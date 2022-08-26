import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';

const MainContainer = (props: Props) => {
  const {style, topMargin, removePadding, backgroundColor, children} = props;
  const headerHeight = topMargin ?? 48;

  return (
    <SafeAreaView>
      <View
        style={StyleSheet.flatten([
          {
            marginTop: headerHeight,
            paddingHorizontal: removePadding ? 0 : 20,
            backgroundColor: backgroundColor || '#F0F2F8',
          },
          style,
        ])}>
        {children}
      </View>
    </SafeAreaView>
  );
};

export default MainContainer;
