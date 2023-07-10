import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from './src/styles/theme';
import { StatusBar } from 'expo-status-bar';
import { Routes } from './src/navigation/index';
import { UserProvider } from './src/contexts/user';
import Toast from 'react-native-toast-message';

const App = () => {
   return (
      <ThemeProvider theme={theme}>
         <StatusBar style="light" />
         <UserProvider>
            <Routes />
         </UserProvider>
         <Toast />
      </ThemeProvider>
   );
};

export default App;
