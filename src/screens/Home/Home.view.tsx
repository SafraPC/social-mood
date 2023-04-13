import React from 'react';
import { Text } from 'react-native';
import { Page } from '../../components/Page';
import { HomeController } from './Home.controller';

const HomeView: React.FC<HomeController> = ({ id }) => {
   return (
      <Page>
         <Text>Logado!</Text>
      </Page>
   );
};

export { HomeView };
