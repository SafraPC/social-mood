import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { createContext, useEffect } from 'react';
import { useState } from 'react';

interface UserInfo {
   name: string;
   email: string;
   age: string;
   sex: string;
   history: string;
   interests: string[];
   password: string;
}

interface UserContextProps {
   user: UserInfo;
   setUser: (user: UserInfo) => void;
}
export const UserContext = createContext<UserContextProps>(
   {} as UserContextProps
);

const UserProvider: React.FC<{ children: React.ReactElement }> = ({
   children,
}) => {
   const [user, setUser] = useState<UserInfo>({
      name: '',
      email: '',
      age: '',
      history: '',
      interests: [],
      password: '',
      sex: '',
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
