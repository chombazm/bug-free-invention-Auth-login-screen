import React from 'react';
import { Keyboard, StyleSheet, Text, View } from 'react-native';
import { colors } from '../../assets/constants';
import { FormButton } from './FormButton';
import { TextInputBox } from './TextInputBox';

type Props = {
  onSubmit: (email: string, password: string, isValid: boolean) => void;
  loading?: boolean;
};

export const LoginFormComponent = ({ onSubmit, loading }: Props) => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  // const [loading, setLoading] = React.useState(false);

  const handleSubmit = () => {
    // check if email and password are not empty
    if (email && password) {
      // setLoading(true);
      onSubmit(email, password, true);
      Keyboard.dismiss();
    } else {
      onSubmit(email, password, false);
    }

    // setTimeout(() => {
    //   setLoading(false);
    // }, 2000);
  };
  return (
    <View style={styles.formContainer}>
      <Text style={styles.formHeader}>Sign in to recharge Directly</Text>
      <Text style={styles.formSubHeader}>
        Enter your phone number to continue
      </Text>

      {/* input fields  */}
      <TextInputBox
        placeholder="Enter Email"
        onChangeText={text => setEmail(text)}
        label="Email"
        hasError={email.length > 0 && !email.includes('@')}
      />

      <TextInputBox
        placeholder="************"
        onChangeText={text => setPassword(text)}
        label="Password"
        hasError={password.length > 0 && password.length < 6}
      />

      <View>
        <Text style={styles.forgotPassword}>Recover password?</Text>
      </View>

      {/* add form submit button */}
      <FormButton
        label="Sign In"
        onPress={handleSubmit}
        loading={loading}
        // disabled={!email || !(password.length > 5)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  formContainer: {
    width: '100%',
    paddingHorizontal: 20,
    paddingVertical: 40,
    backgroundColor: colors.tertiary,
  },
  formHeader: {
    fontSize: 24,
    fontWeight: 'bold',
    // marginBottom: 20,
  },
  formSubHeader: {
    fontSize: 14,
    paddingVertical: 10,
    // fontWeight: 'bold',
    marginBottom: 10,
  },
  forgotPassword: {
    marginVertical: 10,
    textAlign: 'right',
  },
});
