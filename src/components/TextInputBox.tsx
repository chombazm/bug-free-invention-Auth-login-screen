import React from 'react';
import { View, StyleSheet, TextInput } from 'react-native';

type TextInputProps = {
  label: string;
  placeholder: string;
  value?: string;
  onChangeText: (text: string) => void;
  hasError?: boolean;
};
export const TextInputBox = ({
  // label,
  placeholder,
  // value,
  hasError,
  onChangeText,
}: TextInputProps) => {
  return (
    <View
      style={[styles.formInputContainer, hasError && styles.formInputError]}>
      <TextInput
        style={styles.formInput}
        placeholder={placeholder}
        onChangeText={onChangeText}
        autoCapitalize="none"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  formInputContainer: {
    marginBottom: 25,
    backgroundColor: 'white',
    borderRadius: 10,
  },
  formInputLabel: {},
  formInput: {
    paddingVertical: 15,
    paddingHorizontal: 20,
    fontSize: 16,
  },
  formInputError: {
    borderBottomWidth: 2,
    borderBottomColor: 'red',
  },
});
