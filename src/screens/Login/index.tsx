import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TextInput,
  Pressable,
  SafeAreaView,
} from 'react-native';
import { LanguageSelect } from '../../components/LanguageSelect';
import { SectionDivider } from '../../components/SectionDivider';
import { styles } from './styles';
export const LoginScreen = () => {
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
                <Text style={styles.socialLoginButtonIcon}>Facebook</Text>
              </Pressable>
              <Pressable style={styles.socialLoginButton}>
                <Text style={styles.socialLoginButtonIcon}>Apple</Text>
              </Pressable>
              <Pressable style={styles.socialLoginButton}>
                <Text style={styles.socialLoginButtonIcon}>Google</Text>
              </Pressable>
            </View>
          </View>

          <View style={styles.formFooter}>
            <Text style={styles.formFooterText}>Don't have an account? </Text>
            <Text style={styles.formFooterLink}>Register</Text>
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};
