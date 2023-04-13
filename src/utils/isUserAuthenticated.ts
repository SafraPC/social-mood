import AsyncStorage from '@react-native-async-storage/async-storage';

export const USER_TOKEN = '@user_token';

const isUserAuthenticated = async () => {
   try {
      const token = await AsyncStorage.getItem(USER_TOKEN);
      if (token) {
         return token;
      }
      return null;
   } catch (error) {
      return null;
   }
};

export { isUserAuthenticated };
