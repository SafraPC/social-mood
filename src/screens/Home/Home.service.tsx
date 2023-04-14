import { AxiosResponse } from 'axios';
import api from '../../service/api';
import { UserDTO } from '../Login/application/Login.dto';
import { ChatDTO } from './aplication/Home.dto';

export const getNewReelsSuggestions = async (userInfo: UserDTO) => {
   try {
      const response = await api.post<ChatDTO>(`/chat/completions`, {
         model: 'gpt-3.5-turbo',
         messages: [{ role: 'user', content: 'o que são reels do instagram?' }],
      });

      return response.data;
   } catch (err) {
      console.log(err.response.data);
   }
};

export const getNewPostSuggestions = async (userInfo: UserDTO) => {
   try {
      const response = await api.post(`/chat/completions`, {
         model: 'gpt-3.5-turbo',
         messages: [{ role: 'user', content: 'o que são posts do instagram?' }],
      });
      console.log(response.data);
      return response.data;
   } catch (err) {
      console.log(err.message);
   }
};

export const getNewStatusSuggestions = async (userInfo: UserDTO) => {
   try {
      const response = await api.post(`/chat/completions`, {
         model: 'gpt-3.5-turbo',
         messages: [
            { role: 'user', content: 'O que são status do instagram?' },
         ],
      });
      console.log(response.data);
      return response.data;
   } catch (err) {
      console.log(err.message);
   }
};

export const getAdvices = async (userInfo: UserDTO) => {
   try {
      const response = await api.post(`/chat/completions`, {
         model: 'gpt-3.5-turbo',
         messages: [{ role: 'user', content: 'O que é um conselho?' }],
      });
      console.log(response.data);
      return response.data;
   } catch (err) {
      console.log(err.message);
   }
};
