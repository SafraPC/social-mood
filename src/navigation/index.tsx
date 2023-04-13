import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { BottomRoutes } from './bottomRoutes';
import { Container } from './styles';

const Routes = () => {
   return (
      <Container>
         <NavigationContainer>
            <BottomRoutes />
         </NavigationContainer>
      </Container>
   );
};

export { Routes };
