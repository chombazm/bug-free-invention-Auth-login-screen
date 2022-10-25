import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const LanguageSelect = () => {
  return (
    <View style={styles.topHeaderBar}>
      <Text>English</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  topHeaderBar: {
    width: '100%',
    padding: 20,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    fontWeight: 'bold',
    // backgroundColor: 'red',
  },
});
