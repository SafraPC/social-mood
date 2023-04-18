import { UserDTO } from '../screens/Login/application/Login.dto';

export const preChat = (userInfo: UserDTO) => `
tudo que eu lhe enviar daqui para frente,
preciso que você me responda em um formato entendível por JSON, neste EXATO FORMATO:
{"title":seu_titulo,"description":sua_descricao}
mesmo que seja um ok, crie um titulo descritivo, resuma toda sua resposta em descritpion em até 150 caracteres,
e envie no formato acima, nada mais.

Todas as dúvidas serão realizadas pensando na plataforma Instagram, para este usuário:

nome: ${userInfo.nickname},
idade: ${userInfo.age},
objetivo: ${userInfo.history},
interesses: ${userInfo.interests}"}.
`;
