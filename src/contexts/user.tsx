import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { createContext, useEffect } from 'react';
import { useState } from 'react';
import { UserDTO } from '../screens/Login/application/Login.dto';

interface UserContextProps {
   user: UserDTO;
   setUser: (user: UserDTO) => void;
}
export const UserContext = createContext<UserContextProps>(
   {} as UserContextProps
);

const UserProvider: React.FC<{ children: React.ReactElement }> = ({
   children,
}) => {
   const [user, setUser] = useState<UserDTO>({
      age: '',
      history: '',
      interests: '',
      nickname: '',
   });

   useEffect(() => {
      const initialize = async () => {
         const user = await AsyncStorage.getItem('user');
         if (user) {
            setUser(JSON.parse(user));
         }
      };
      initialize();
   }, [user]);

   return (
      <UserContext.Provider value={{ user, setUser }}>
         {children}
      </UserContext.Provider>
   );
};

export { UserProvider };
