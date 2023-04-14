import api from '../../service/api';
import { preMessage } from '../../service/preScript';
import {
   extractResponseText,
   GPTResponseText,
} from '../../utils/extractResponseText';
import { UserDTO } from '../Login/application/Login.dto';
import { ChatDTO } from './aplication/Home.dto';

interface GPTResponse {
   error: boolean;
   data: GPTResponseText;
}

const preChat = (userInfo: UserDTO) => `
${preMessage}

Guarde o contato: e não responda a mesma coisa que tenha respondido anteriormente,
mesmo que seja a mesma pergunta.

 Nome: ${userInfo.nickname},
 Idade: ${userInfo.age},
 Objetivo: ${userInfo.history},
 Interesses: ${userInfo.interests},

 Me responda de forma objetiva com uma descrição de no máximo 300 caracteres:`;

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
      console.log(err.message);
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
      console.log(err.message);
   }
};

export const getNewStatusSuggestions = async (
   userInfo: UserDTO
): Promise<GPTResponse> => {
   try {
      const chat = `
      ${preChat(userInfo)}
       Quais são as melhores sugestões de Status baseadas nos meus objetivos, e por quê?
       caso eu já tenha perguntado isso, me dê outras sugestões de Status de 24h. 
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
      console.log(err.message);
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
      console.log(err.message);
   }
};
