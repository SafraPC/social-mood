import AsyncStorage from '@react-native-async-storage/async-storage';
import { useCallback, useContext, useState } from 'react';
import { UserContext } from '../../contexts/user';

export interface LoginInterface {
   handleSubmit: () => void;
   error: string;
   setNickname: (nickname: string) => void;
   setAge: (age: string) => void;
   setHistory: (history: string) => void;
   setInterests: (interests: string) => void;
}

const LoginController = (): LoginInterface => {
   const [error, setError] = useState('');
   const [nickname, setNickname] = useState('');
   const [age, setAge] = useState('');
   const [history, setHistory] = useState('');
   const [interests, setInterests] = useState<string>();

   const { setUser } = useContext(UserContext);

   const handleSubmit = useCallback(() => {
      try {
         if (!age || !history || !interests || !nickname) {
            setError('Preencha todos os campos!');
            return;
         }

         if (Number(age) < 18) {
            setError('Você precisa ter mais de 18 anos!');
            return;
         }

         const data = {
            age: Number(age),
            history,
            interests,
            nickname,
         };

         AsyncStorage.setItem('user', JSON.stringify(data));
         setUser(data);
      } catch (err) {
         setError('Ocorreu um erro ao salvar os dados!');
      }
   }, [age, history, interests, nickname, setUser]);

   return {
      error,
      handleSubmit,
      setAge,
      setHistory,
      setInterests,
      setNickname,
   };
};

export { LoginController };
