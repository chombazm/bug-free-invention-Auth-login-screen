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

const heroLandingImg = require('../../../assets/images/landing.png');

export const LandingScreen = () => {
  // const navigate = useNavigation();

  return (
    <ScrollView>
      <SafeAreaView style={styles.container}>
        <View style={styles.topHeaderBar}>
          <Text>English</Text>
        </View>

        <View style={styles.imageContainer}>
          <View style={styles.imageWrapper}>
            {/* <View style={styles.customBlur} /> */}
          </View>
          <Image style={styles.image} source={heroLandingImg} />
        </View>

        <View style={styles.buttonContainer}>
          <Pressable
            style={[styles.button, { backgroundColor: colors.primary }]}>
            <Text style={styles.buttonText}>Sign in</Text>
          </Pressable>
          <Pressable
            style={[styles.button, { backgroundColor: colors.lightBg }]}>
            <Text style={[styles.buttonText, { color: colors.primary }]}>
              Register
            </Text>
          </Pressable>
        </View>

        <View>
          <Pressable>
            <Text style={{ color: colors.primary }}>Skip {'>>'}</Text>
          </Pressable>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};
