import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { View, Pressable, SafeAreaView, Image } from 'react-native';
import { MainTabParamList } from '../../../types';
// import { LoginFormComponent } from '../../components/LoginFormComponent';
import { LanguageSelect } from '../../components/LanguageSelect';
import { SectionDivider } from '../../components/SectionDivider';
import { styles } from './styles';
import { CheckoutForm } from '../../components/CheckoutForm';

type Props = NativeStackScreenProps<MainTabParamList>;

const AirtelLogo = require('../../../assets/images/Airtel-logo.png');
const MtnLogo = require('../../../assets/images/Mtn-logo.png');

const paymentOptions = [
  {
    icon: AirtelLogo,
    name: 'Airtel Money',
    url: 'https://www.facebook.com/',
  },
  {
    icon: MtnLogo,
    name: 'Mtn Mobile Money',
    url: 'https://www.google.com/',
  },
];
export const CheckoutScreen = ({ navigation }: Props) => {
  const [loading, setLoading] = React.useState(false);
  const handleSubmit = () => {
    setTimeout(() => {
      setLoading(false);
      navigation.navigate('Home');
    }, 2000);
  };
  return (
    <SafeAreaView style={styles.container}>
      <LanguageSelect />

      <CheckoutForm
        onSubmit={(_, __, isValid) => {
          if (isValid) {
            setLoading(true);
            handleSubmit();
          } else {
          }
        }}
        loading={loading}
      />

      <SectionDivider message="Or Pay with" />

      <View style={styles.socialLoginContainer}>
        <View style={styles.socialLoginButtonContainer}>
          {paymentOptions.map(option => (
            <Pressable
              key={option.name}
              onPress={() => {
                console.warn(option.name);
              }}>
              <Image
                resizeMode="contain"
                source={option.icon}
                style={{ width: 100 }}
              />
            </Pressable>
          ))}
        </View>
      </View>

      {/* <View style={styles.formFooter}>
        <Text style={styles.formFooterText}>Don't have an account? </Text>
        <Pressable onPress={() => navigation.navigate('Register')}>
          <Text style={styles.formFooterLink}>Register</Text>
        </Pressable>
      </View> */}
    </SafeAreaView>
  );
};
