import React from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';
import { colors } from '../../assets/constants';

type Props = {
  loading?: boolean;
  label: string;
  onPress: () => void;
};
export const FormButton = ({ onPress, label, loading }: Props) => {
  return (
    <Pressable
      disabled={loading}
      // android_ripple={{ color: '#fff' }}
      style={[styles.formButton, loading && styles.formButtonLoading]}
      onPress={onPress}>
      <Text style={[styles.formButtonText]}>
        {loading ? 'Signing you in...' : label}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  formButton: {
    marginTop: 10,
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderRadius: 10,
    backgroundColor: colors.primary,
    color: colors.lightText,
  },
  formButtonLoading: {
    backgroundColor: colors.lightBg,
  },
  formButtonText: {
    textAlign: 'center',
    color: colors.lightgrey,
    fontWeight: 'bold',
    fontSize: 16,
  },
});
