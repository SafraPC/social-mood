import React from 'react';
import { LoginController, LoginInterface } from './Login.controller';
import { LoginView } from './Login.view';

const Login: React.FC = () => {
   const controller = LoginController();

   return <LoginView {...controller} />;
};

export { Login };
