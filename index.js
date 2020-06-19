/**
 * @format
 */
//import React, {Component} from 'react'
import 'react-native-gesture-handler';
import { AppRegistry } from 'react-native';

import { name as appName } from './app.json';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import stackScreen from './components/stackScreen';
import DetailStackScreen from './components/DetailStackScreen';
import SplashScreen from './components/SplashScreen'




AppRegistry.registerComponent(appName, () => SplashScreen);
