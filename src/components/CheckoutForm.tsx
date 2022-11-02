import React from 'react';
import { Keyboard, StyleSheet, Text, View } from 'react-native';
import { colors } from '../../assets/constants';
// import { FormButton } from './FormButton';
import { MyButton } from './MyButton';
import { TextInputBox } from './TextInputBox';

type Props = {
  onSubmit: (email: string, password: string, isValid: boolean) => void;
  loading?: boolean;
};

export const CheckoutForm = ({ onSubmit, loading }: Props) => {
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
      <Text style={styles.formHeader}>Payment details</Text>
      <Text style={styles.formSubHeader}>Enter your card to purchase</Text>

      {/* input fields  */}
      <TextInputBox
        placeholder="Card number"
        onChangeText={text => setEmail(text)}
        label="Email"
        // hasError={email.length > 0 && !email.includes('@')}
      />
      <TextInputBox
        placeholder="Full name"
        onChangeText={text => setEmail(text)}
        label="Email"
        // hasError={email.length > 0 && !email.includes('@')}
      />

      <View style={styles.inputDualContainer}>
        <TextInputBox
          placeholder="CVV"
          onChangeText={text => setPassword(text)}
          label="Password"
          hasError={password.length > 0 && password.length < 6}
        />
        <TextInputBox
          placeholder="MM/YY"
          onChangeText={text => setPassword(text)}
          label="Password"
          // hasError={password.length > 0 && password.length < 6}
        />
      </View>

      {/* add form submit button */}
      <MyButton
        label="Scan card"
        onPress={handleSubmit}
        loading={loading}
        type="secondary"

        // disabled={!email || !(password.length > 5)}
      />
      <MyButton
        label="Add card"
        onPress={handleSubmit}
        loading={loading}
        type="primary"
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
    // backgroundColor: colors.tertiary,
  },
  inputDualContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
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

  formButton: {
    marginTop: 10,
    paddingVertical: 15,
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
