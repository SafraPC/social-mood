import AsyncStorage from '@react-native-async-storage/async-storage';
import { useContext, useState } from 'react';
import { UserContext } from '../../contexts/user';
import { UserDTO } from './application/Login.dto';

export interface LoginInterface {
   handleSubmit: (data: UserDTO) => void;
   error: string;
}

const LoginController = (): LoginInterface => {
   const [error, setError] = useState('');
   const { setUser } = useContext(UserContext);

   const handleSubmit = (data: UserDTO) => {
      const { age, history, interests, nickname } = data;
      if (!age || !history || !interests || !nickname) {
         setError('Preencha todos os campos!');
         return;
      }
      if (age < 18) {
         setError('Você precisa ter mais de 18 anos!');
         return;
      }
      AsyncStorage.setItem('user', JSON.stringify(data));
      setUser(data);
   };

   return {
      error,
      handleSubmit,
   };
};

export { LoginController };
