import React from 'react';

import { View, Text, StyleSheet } from 'react-native';

export const SectionDivider = () => {
  return (
    <View style={styles.sectionDivider}>
      <View style={styles.sectionDividerLine} />
      <Text style={styles.sectionDividerText}>Or continue with</Text>
      <View style={styles.sectionDividerLine} />
    </View>
  );
};

const styles = StyleSheet.create({
  sectionDivider: {
    width: '100%',
    padding: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    fontWeight: 'bold',
    marginVertical: 20,
  },
  sectionDividerText: {
    paddingHorizontal: 10,
  },
  sectionDividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: '#ccc',
    alignSelf: 'center',
  },
});
