/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import MainNavigator from './navigation/MainNavigator';
import {StatusBar} from 'react-native';
import {colors} from './core';

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={colors.primaryBlue}
      />
      <MainNavigator />
    </NavigationContainer>
  );
};

export default App;
