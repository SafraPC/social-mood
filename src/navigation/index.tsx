import React, { useCallback, useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { BottomRoutes } from './bottomRoutes';
import { Container } from './styles';
import { UserContext } from '../contexts/user';
import { UnauthorizedRoutes } from './unauthorized';

const Routes = () => {
   const { user } = useContext(UserContext);

   const SecurityRoute = useCallback(() => {
      if (user?.nickname) {
         return <BottomRoutes />;
      }
      return <UnauthorizedRoutes />;
   }, [user]);

   return (
      <Container>
         <NavigationContainer>
            <SecurityRoute />
         </NavigationContainer>
      </Container>
   );
};

export { Routes };
