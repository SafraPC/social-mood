import React from 'react';
import { homeController } from './Home.controller';
import { HomeView } from './Home.view';

const Home = () => {
   const controller = homeController();

   return <HomeView {...controller} />;
};

export { Home };
