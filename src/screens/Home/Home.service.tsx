import api from '../../service/api';
import { preChat } from '../../service/preScript';
import {
   extractResponseText,
   GPTResponseText,
} from '../../utils/extractResponseText';
import { UserDTO } from '../Login/application/Login.dto';
import { ChatDTO } from './aplication/Home.dto';

export interface GPTResponse {
   error: boolean;
   data: GPTResponseText;
}

export const getNewReelsSuggestions = async (
   userInfo: UserDTO
): Promise<GPTResponse> => {
   try {
      const chat = `
      ${preChat(userInfo)}
       Quais são as melhores sugestões de Reels baseadas nos meus objetivos, e por quê?
       caso eu já tenha perguntado isso, me dê outras sugestões de reels. 
      `;

      const response = await api.post<ChatDTO>(`/chat/completions`, {
         model: 'gpt-3.5-turbo',
         messages: [{ role: 'user', content: chat }],
      });
      const message = response.data.choices[0].message.content;
      const answer = extractResponseText(message);
      return {
         error: false,
         data: answer,
      };
   } catch (err) {
      //fail quietly
   }
};

export const getNewPostSuggestions = async (
   userInfo: UserDTO
): Promise<GPTResponse> => {
   try {
      const chat = `
      ${preChat(userInfo)}
       Quais são as melhores sugestões de Posts baseadas nos meus objetivos, e por quê?
       caso eu já tenha perguntado isso, me dê outras sugestões de Posts para o feed. 
      `;

      const response = await api.post<ChatDTO>(`/chat/completions`, {
         model: 'gpt-3.5-turbo',
         messages: [{ role: 'user', content: chat }],
      });
      const message = response.data.choices[0].message.content;
      const answer = extractResponseText(message);
      return {
         error: false,
         data: answer,
      };
   } catch (err) {
      //fail quietly
   }
};

export const getNewStatusSuggestions = async (
   userInfo: UserDTO
): Promise<GPTResponse> => {
   try {
      const chat = `
      ${preChat(userInfo)}
       Quais são as melhores sugestões de Status 24h baseados em meus objetivos, e por quê?
       caso eu já tenha perguntado isso, me dê outras sugestões sobre este assunto. 

       me envie sua resposta no modelo que pedi.
      `;

      const response = await api.post<ChatDTO>(`/chat/completions`, {
         model: 'gpt-3.5-turbo',
         messages: [{ role: 'user', content: chat }],
      });
      const message = response.data.choices[0].message.content;
      const answer = extractResponseText(message);
      return {
         error: false,
         data: answer,
      };
   } catch (err) {
      //fail quietly
   }
};

export const getAdvices = async (userInfo: UserDTO): Promise<GPTResponse> => {
   try {
      const chat = `
      ${preChat(userInfo)}
       Quais são as melhores quaisquer conselhos baseados nos meus objetivos, e por quê?
       caso eu já tenha perguntado isso, me dê outras sugestões normais. 
      `;

      const response = await api.post<ChatDTO>(`/chat/completions`, {
         model: 'gpt-3.5-turbo',
         messages: [{ role: 'user', content: chat }],
      });
      const message = response.data.choices[0].message.content;
      const answer = extractResponseText(message);
      return {
         error: false,
         data: answer,
      };
   } catch (err) {
      //fail quietly
   }
};
