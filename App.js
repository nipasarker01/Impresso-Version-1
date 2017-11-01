import React from 'react';
import { Platform, StatusBar, StyleSheet, View, AsyncStorage } from 'react-native';
import { AppLoading, Asset, Font } from 'expo';
import { Ionicons } from '@expo/vector-icons';
import RootNavigation from './navigation/RootNavigation';
import { StackNavigator } from 'react-navigation'; // 1.0.0-beta.11
import SplashScreen from './screens/SplashScreen';
import OnboardingScreen from './screens/OnboardingScreen';
import StartupScreen from './screens/StartupScreen';
import SwiperScreen from './screens/Swiper';
import OptionScreen from './screens/OptionScreen';
import AuthScreen from './screens/AuthScreen';
import ForgotPassword from './screens/ForgotPassword';
export default class App extends React.Component {
  render() {
      return (
        <SplashScreen>

          <AuthScreen />

           </SplashScreen>
);
    }

  }
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  statusBarUnderlay: {
    height: 24,
    backgroundColor: 'rgba(0,0,0,0.2)',
  },
});
