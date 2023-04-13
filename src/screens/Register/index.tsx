import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
   Container,
   GoToLogin,
   LoginText,
   WelcomeText,
} from './Register.styles';

const Register = () => {
   const navigation = useNavigation();

   return (
      <Container>
         <WelcomeText>Register!!!</WelcomeText>
         <GoToLogin onPress={() => navigation.navigate('Login')}>
            <LoginText>Logar</LoginText>
         </GoToLogin>
      </Container>
   );
};

export default Register;
