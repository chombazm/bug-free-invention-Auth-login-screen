// import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
  View,
  Text,
  ScrollView,
  Pressable,
  Image,
  SafeAreaView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { colors } from '../../../assets/constants';
import { styles } from './styles';
import { LanguageSelect } from '../../components/LanguageSelect';

const heroLandingImg = require('../../../assets/images/landing.png');

type RouteNameProps = {
  Login: undefined;
  Register: undefined;
  Dashboad: undefined;
};
export const LandingScreen = () => {
  const navigate = useNavigation();

  const routeTo = (props: RouteNameProps) => {
    // console.log(props, 'check props');
    navigate.navigate(props);
  };
  return (
    <ScrollView>
      <SafeAreaView style={styles.container}>
        <LanguageSelect />

        <View style={styles.imageContainer}>
          <View style={styles.imageWrapper}>
            {/* <View style={styles.customBlur} /> */}
          </View>
          <Image style={styles.image} source={heroLandingImg} />
        </View>

        <View style={styles.buttonContainer}>
          <Pressable
            onPress={() => routeTo('Login')}
            style={[styles.button, { backgroundColor: colors.primary }]}>
            <Text style={styles.buttonText}>Sign in</Text>
          </Pressable>
          <Pressable
            onPress={() => routeTo('Register')}
            style={[styles.button, { backgroundColor: colors.lightBg }]}>
            <Text style={[styles.buttonText, { color: colors.primary }]}>
              Register
            </Text>
          </Pressable>
        </View>

        <View>
          <Pressable onPress={() => {}}>
            <Text style={{ color: colors.primary }}>Skip {'>>'}</Text>
          </Pressable>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};
