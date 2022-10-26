import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TextInput,
  Pressable,
  SafeAreaView,
} from 'react-native';
import { AppleIcon, Facebook, GoogleIcon } from '../../../assets/icons';
import { MainTabParamList } from '../../../types';
import { LanguageSelect } from '../../components/LanguageSelect';
import { SectionDivider } from '../../components/SectionDivider';
import { styles } from './styles';

type Props = NativeStackScreenProps<MainTabParamList>;

export const LoginScreen = ({ navigation }: Props) => {
  return (
    <ScrollView>
      <SafeAreaView style={styles.container}>
        <LanguageSelect />

        <View style={styles.formContainer}>
          <View>
            <Text style={styles.formHeader}>Sign in to recharge Directly</Text>
            <Text style={styles.formSubHeader}>
              Enter your phone number to continue
            </Text>

            <View style={styles.formInputContainer}>
              <TextInput style={styles.formInput} placeholder="Phone number" />
            </View>

            <View style={styles.formInputContainer}>
              <TextInput style={styles.formInput} placeholder="Password" />
            </View>

            <View>
              <Text style={styles.forgotPassword}>Recover password?</Text>
            </View>

            <Pressable style={styles.formButton}>
              <Text style={styles.formButtonText}>Sign in</Text>
            </Pressable>
          </View>

          <SectionDivider />

          <View style={styles.socialLoginContainer}>
            <View style={styles.socialLoginButtonContainer}>
              <Pressable style={styles.socialLoginButton}>
                <View>
                  <Facebook />
                </View>
              </Pressable>
              <Pressable style={styles.socialLoginButton}>
                <Text style={styles.socialLoginButtonIcon}>
                  <AppleIcon />
                </Text>
              </Pressable>
              <Pressable style={styles.socialLoginButton}>
                <GoogleIcon />
              </Pressable>
            </View>
          </View>

          <View style={styles.formFooter}>
            <Text style={styles.formFooterText}>Don't have an account? </Text>
            <Pressable onPress={() => navigation.navigate('Register')}>
              <Text style={styles.formFooterLink}>Register</Text>
            </Pressable>
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};
