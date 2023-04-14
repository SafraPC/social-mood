import React, { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import theme from './src/styles/theme';
import { StatusBar } from 'expo-status-bar';
import { Routes } from './src/navigation/index';
import { UserProvider } from './src/contexts/user';
import { preScript } from './src/service/preScript';
import { AppNotReady } from './src/screens/AppNotReady';

const App = () => {
   const [chatOk, setChatOk] = useState(false);
   const [loading, setLoading] = useState(true);

   useEffect(() => {
      const initialize = async () => {
         setLoading(true);
         const isOk = await preScript();
         setChatOk(isOk);
         setLoading(false);
      };
      initialize();
   }, []);

   return (
      <ThemeProvider theme={theme}>
         <StatusBar style="light" />
         <UserProvider>
            {!chatOk ? <AppNotReady loading={loading} /> : <Routes />}
         </UserProvider>
      </ThemeProvider>
   );
};

export default App;
