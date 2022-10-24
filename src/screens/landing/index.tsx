import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, ScrollView, Pressable } from 'react-native';
import { styles } from './styles';
export const LandingScreen = () => {
  const navigate = useNavigation();

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text>Landing screen</Text>
      </View>

      <View>
        <Text>Landing screen</Text>
      </View>

      <View>
        <Pressable onPress={() => navigate.navigate('Login')}>
          <Text>Register</Text>
        </Pressable>
      </View>

      <View>
        <Text>Landing screen</Text>
      </View>

      <View>
        <Text>Landing screen</Text>
      </View>

      <View>
        <Text>Landing screen</Text>
      </View>
    </ScrollView>
  );
};
