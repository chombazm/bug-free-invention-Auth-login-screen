import React from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';
import { colors } from '../../assets/constants';

type Props = {
  loading?: boolean;
  label: string;
  onPress: () => void;
  disabled?: boolean;
  type?: 'primary' | 'secondary';
};
export const MyButton = ({
  onPress,
  label,
  loading,
  disabled,
  type,
}: Props) => {
  return (
    <Pressable
      disabled={loading || disabled}
      android_ripple={{ color: '#fff' }}
      style={[
        type === 'primary'
          ? styles.formButtonPrimary
          : styles.formButtonSecondary,
        // (loading || disabled) && styles.formButtonLoading,
      ]}
      onPress={onPress}>
      <Text style={[styles.formButtonText]}>
        {loading ? 'Signing you in...' : label}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  formButtonPrimary: {
    marginTop: 10,
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 10,
    backgroundColor: '#876efb',
    color: colors.lightText,
  },
  formButtonSecondary: {
    marginTop: 10,
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 10,
    // backgroundColor: colors.lightText,
    borderWidth: 1,
    borderColor: '#876efb',
    color: '#000',
    marginBottom: 10,
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
