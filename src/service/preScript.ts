import { ChatDTO } from '../screens/Home/aplication/Home.dto';
import { extractResponseText } from '../utils/extractResponseText';
import api from './api';

export const preMessage = `tudo que eu lhe enviar daqui para frente,
preciso que você me responda em um formato entendível por JSON, neste EXATO FORMATO:
{"title":seu_titulo,"description":sua_descricao}
mesmo que seja um ok, crie um titulo descritivo, e envie no formato acima, nada mais.
também responda essa mensagem neste formato.

Todas as dúvidas serão realizadas pensando na plataforma Instagram.
`;

export const preScript = async () => {
   try {
      const response = await api.post<ChatDTO>(`/chat/completions`, {
         model: 'gpt-3.5-turbo',
         messages: [{ role: 'user', content: preMessage }],
      });
      const message = response.data.choices[0].message.content;
      const answer = extractResponseText(message);
      console.log(answer);
      return true;
   } catch (err) {
      console.log(err);
      return false;
   }
};
