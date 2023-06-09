import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Login } from '../../screens/Login';

const UnauthorizedRoutes = () => {
   const Stack = createNativeStackNavigator();

   return (
      <Stack.Navigator
         initialRouteName="login"
         screenOptions={{
            headerShown: false,
         }}>
         <Stack.Screen name="login" component={Login} />
      </Stack.Navigator>
   );
};

export { UnauthorizedRoutes };
