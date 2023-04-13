import { TextInput, TouchableOpacity, View } from 'react-native';
import styled from 'styled-components/native';

export type InputTextProps = {
   focused: boolean;
   error: boolean;
};

export const Container = styled(TouchableOpacity)`
   margin-bottom: 40px;
`;

export const Content = styled(View)<InputTextProps>`
   width: 100%;
   flex-direction: row;
   border-color: ${({ theme, focused, error }) =>
      focused
         ? theme.colors.darkElements
         : error
         ? theme.colors.darkRed
         : theme.colors.gray};
   border-radius: 4px;
   border-width: 1px;
   background-color: ${({ theme }) => theme.colors.white};
   justify-content: center;
   align-items: center;
   padding: 0 8px;
`;

export const InputText = styled(TextInput)`
   flex: 1;
   height: 46px;
   padding: 0 8px;
   color: ${({ theme }) => theme.colors.gray};
`;

export const Label = styled.Text`
   font-size: 16px;
   color: ${({ theme }) => theme.colors.gray};
   margin-bottom: 8px;
   font-weight: bold;
`;

export const ErrorText = styled.Text`
   font-size: 14px;
   color: ${({ theme }) => theme.colors.darkRed};
   margin-top: 4px;
`;

export const PasswordButton = styled.TouchableOpacity.attrs({
   hitSlop: { top: 10, bottom: 10, left: 10, right: 10 },
})``;

export const RowContainer = styled.View`
   flex-direction: row;
`;

export const RequiredText = styled.Text`
   font-size: 14px;
   color: ${({ theme }) => theme.colors.darkRed};
`;

export const Highlight = styled.Text`
   font-size: 14px;
   align-self: center;
   color: ${({ theme }) => theme.colors.gray};
`;

export const BottomText = styled.Text`
   font-size: 14px;
   margin-top: 4px;
   color: ${({ theme }) => theme.colors.darkGreen};
`;
