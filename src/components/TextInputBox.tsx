import React from 'react';
import { View, StyleSheet, TextInput } from 'react-native';

type TextInputProps = {
  label: string;
  placeholder: string;
  value?: string;
  onChangeText: (text: string) => void;
  hasError?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  keyboardType?: 'default' | 'email-address' | 'numeric' | 'phone-pad';
};
export const TextInputBox = ({
  // label,
  placeholder,
  value,
  hasError,
  onChangeText,
  leftIcon,
  rightIcon,
  keyboardType,
}: TextInputProps) => {
  return (
    <View
      style={[styles.formInputContainer, hasError && styles.formInputError]}>
      <View style={styles.inputIcon}>{leftIcon && leftIcon}</View>
      <TextInput
        style={styles.formInput}
        placeholder={placeholder}
        onChangeText={onChangeText}
        autoCapitalize="none"
        keyboardType={keyboardType}
        value={value}
      />
      <View style={styles.inputIcon}>{rightIcon && rightIcon}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  formInputContainer: {
    minWidth: '45%',
    marginBottom: 25,
    backgroundColor: '#e9e9e9',
    borderRadius: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  inputIcon: {
    marginHorizontal: 10,
    // flex: ;
  },
  formInputLabel: {},

  formInput: {
    flex: 1,
    minWidth: 250,
    paddingVertical: 15,
    // paddingHorizontal: 20,
    // backgroundColor: 'pink',
    fontSize: 16,
  },
  formInputError: {
    borderBottomWidth: 2,
    borderBottomColor: 'red',
  },
});
