import React from 'react';
import { View, StyleSheet, TextInput } from 'react-native';

type TextInputProps = {
  label: string;
  placeholder: string;
  value?: string;
  onChangeText: (text: string) => void;
};
export const TextInputBox = ({
  // label,
  placeholder,
  // value,
  onChangeText,
}: TextInputProps) => {
  return (
    <View style={styles.formInputContainer}>
      <TextInput
        style={styles.formInput}
        placeholder={placeholder}
        onChangeText={onChangeText}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  formInputContainer: {
    marginBottom: 10,
    backgroundColor: 'white',
    borderRadius: 10,
  },
  formInputLabel: {},
  formInput: {
    paddingVertical: 20,
    paddingHorizontal: 20,
    fontSize: 18,
  },
});
