import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import {Provider as AuthProvider} from './src/context/authContext'

import { setNavigator } from './src/NavigationRef'

import Routes from './src/routes';

const App = () => {
  return (
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
  );
}

export default () => {
  return(
    <AuthProvider>
      <App Ref={(navigator) => setNavigator(navigator) }/>
    </AuthProvider>
  )
}