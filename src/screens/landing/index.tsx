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
import { colors } from '../../../assets/constants';
import { styles } from './styles';
import { LanguageSelect } from '../../components/LanguageSelect';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { MainTabParamList } from '../../../types';

const heroLandingImg = require('../../../assets/images/landing.png');
type Props = NativeStackScreenProps<MainTabParamList>;
export const LandingScreen = ({ navigation }: Props) => {
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
            onPress={() => navigation.navigate('Login')}
            style={[styles.button, { backgroundColor: colors.primary }]}>
            <Text style={styles.buttonText}>Sign in</Text>
          </Pressable>
          <Pressable
            onPress={() => navigation.navigate('Register')}
            style={[styles.button, { backgroundColor: colors.lightBg }]}>
            <Text style={[styles.buttonText, { color: colors.primary }]}>
              Register
            </Text>
          </Pressable>
        </View>

        <View>
          <Pressable onPress={() => navigation.navigate('Home')}>
            <Text style={{ color: colors.primary }}>Skip {'>>'}</Text>
          </Pressable>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};
