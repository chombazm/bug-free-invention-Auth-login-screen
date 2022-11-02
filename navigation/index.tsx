import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { LoginScreen } from '../src/screens/Login';
import { RegisterScreen } from '../src/screens/register';
import { LandingScreen } from '../src/screens/landing';
import { NotFoundScreen } from '../src/screens/notFound';

import { RootStackParamList, MainTabParamList } from '../types';
import { HomeScreen } from '../src/screens/Home';
import { CheckoutScreen } from '../src/screens/Checkout';

export const Navigation = () => {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
};

const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="Root"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Root" component={MainTabNavigator} />
      <Stack.Screen name="NotFound" component={NotFoundScreen} />
    </Stack.Navigator>
  );
}

const MainTab = createNativeStackNavigator<MainTabParamList>();

function MainTabNavigator() {
  return (
    <MainTab.Navigator
      initialRouteName="Checkout"
      screenOptions={{
        headerShown: false,
      }}>
      <MainTab.Screen name="Landing" component={LandingScreen} />
      <MainTab.Screen name="Login" component={LoginScreen} />
      <MainTab.Screen name="Register" component={RegisterScreen} />
      <MainTab.Screen name="Home" component={HomeScreen} />
      <MainTab.Screen name="Checkout" component={CheckoutScreen} />
    </MainTab.Navigator>
  );
}
