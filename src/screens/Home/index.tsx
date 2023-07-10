import React from 'react';
import { HomeController } from './Home.controller';
import { HomeView } from './Home.view';

const Home = () => {
   const controller = HomeController();

   return <HomeView {...controller} />;
};

export { Home };
