import styled from 'styled-components/native';

export const Container = styled.View`
   flex: 1;
   background-color: ${({ theme }) => theme.colors.primary};
   align-items: center;
   justify-content: center;
`;

export const WelcomeText = styled.Text`
   color: white;
`;

export const GoToLogin = styled.TouchableOpacity`
   margin-top: 20px;
   padding: 10px;
   border-radius: 4px;
   background-color: white;
`;

export const LoginText = styled.Text`
   color: ${({ theme }) => theme.colors.primary};
`;
