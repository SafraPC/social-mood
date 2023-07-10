import React, { useState } from 'react';
import { KeyboardAvoidingView, Platform } from 'react-native';
import Input from '../../components/Input';
import { Page } from '../../components/Page';
import { LoginInterface } from './Login.controller';
import { Container, Error, Submit, SubmitText, Title } from './Login.styles';

const LoginView: React.FC<LoginInterface> = ({
   handleSubmit,
   error,
   setAge,
   setHistory,
   setInterests,
   setNickname,
}) => {
   const keyboardBehavior = Platform.OS === 'ios' ? 'padding' : 'height';
   return (
      <Page>
         <KeyboardAvoidingView behavior={keyboardBehavior}>
            <Container>
               <Title>
                  Olá, seja bem vindo ao Social Mood! me diga um pouco de você,
                  antes de continuarmos.
               </Title>
               <Input
                  label="Como quer ser chamado ?"
                  placeholder="ex: João "
                  required
                  onChangeText={setNickname}
               />
               <Input
                  label="Qual seria o seu objetivo ?"
                  placeholder="explique o que quer alcançar nas redes sociais."
                  required
                  onChangeText={setHistory}
               />
               <Input
                  keyboardType="numeric"
                  label="Qual sua idade ?"
                  placeholder="ex: 18 "
                  required
                  onChangeText={setAge}
               />
               <Input
                  label="Quais são os seus nichos ?"
                  placeholder="ex: Musica, instrumentos, acordes, etc. "
                  required
                  onChangeText={setInterests}
               />

               <Submit onPress={handleSubmit}>
                  <SubmitText>Continuar</SubmitText>
               </Submit>
               <Error>{error || ''}</Error>
            </Container>
         </KeyboardAvoidingView>
      </Page>
   );
};

export { LoginView };
