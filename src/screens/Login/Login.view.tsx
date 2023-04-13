import React, { useState } from 'react';
import { KeyboardAvoidingView } from 'react-native';
import Input from '../../components/Input';
import { Page } from '../../components/Page';
import { LoginInterface } from './Login.controller';
import { Container, Error, Submit, SubmitText, Title } from './Login.styles';

const LoginView: React.FC<LoginInterface> = ({ handleSubmit, error }) => {
   const [nickname, setNickname] = useState('');
   const [age, setAge] = useState('');
   const [history, setHistory] = useState('');
   const [interests, setInterests] = useState<string>();

   return (
      <Page>
         <KeyboardAvoidingView behavior="padding">
            <Container>
               <Title>
                  Olá, seja bem vindo ao Social Mood! me diga um pouco de você,
                  antes de continuarmos.
               </Title>
               <Input
                  label="Como quer ser chamado ?"
                  placeholder="ex: João "
                  required
                  value={nickname}
                  onChangeText={setNickname}
               />
               <Input
                  label="Qual seria o seu objetivo ?"
                  placeholder="explique o que quer alcançar nas redes sociais."
                  required
                  value={history}
                  onChangeText={setHistory}
               />
               <Input
                  keyboardType="numeric"
                  label="Qual sua idade ?"
                  placeholder="ex: 18 "
                  required
                  value={age}
                  onChangeText={setAge}
               />
               <Input
                  label="Quais são os seus nichos ?"
                  placeholder="ex: Musica, instrumentos, acordes, etc. "
                  required
                  value={interests}
                  onChangeText={setInterests}
               />

               <Submit
                  onPress={() => {
                     handleSubmit({
                        age,
                        history,
                        interests,
                        nickname,
                     });
                  }}>
                  <SubmitText>Continuar</SubmitText>
               </Submit>
               <Error>{error || ''}</Error>
            </Container>
         </KeyboardAvoidingView>
      </Page>
   );
};

export { LoginView };
