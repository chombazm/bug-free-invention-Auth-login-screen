import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { View, Text, Pressable, SafeAreaView } from 'react-native';
import { AppleIcon, Facebook, GoogleIcon } from '../../../assets/icons';
import { MainTabParamList } from '../../../types';
import { LoginFormComponent } from '../../components/LoginFormComponent';
import { LanguageSelect } from '../../components/LanguageSelect';
import { SectionDivider } from '../../components/SectionDivider';
import { styles } from './styles';

type Props = NativeStackScreenProps<MainTabParamList>;

const socialsToLogin = [
  {
    icon: <Facebook />,
    name: 'Facebook',
    url: 'https://www.facebook.com/',
  },
  {
    icon: <GoogleIcon />,
    name: 'Google',
    url: 'https://www.google.com/',
  },
  {
    icon: <AppleIcon />,
    name: 'Apple',
    url: 'https://www.apple.com/',
  },
];
export const LoginScreen = ({ navigation }: Props) => {
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

      <LoginFormComponent
        onSubmit={(_, __, isValid) => {
          if (isValid) {
            setLoading(true);
            handleSubmit();
          } else {
          }
        }}
        loading={loading}
      />

      <SectionDivider />

      <View style={styles.socialLoginContainer}>
        <View style={styles.socialLoginButtonContainer}>
          {socialsToLogin.map(social => (
            <Pressable
              key={social.name}
              style={styles.socialLoginButton}
              onPress={() => {
                console.warn(social.name);
              }}>
              {social.icon}
            </Pressable>
          ))}
        </View>
      </View>

      <View style={styles.formFooter}>
        <Text style={styles.formFooterText}>Don't have an account? </Text>
        <Pressable onPress={() => navigation.navigate('Register')}>
          <Text style={styles.formFooterLink}>Register</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};
