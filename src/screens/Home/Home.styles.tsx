import { getBottomSpace } from 'react-native-iphone-x-helper';
import styled from 'styled-components/native';

interface ButtonProps {
   disabled: boolean;
}

export const Container = styled.ScrollView.attrs({
   contentContainerStyle: {
      padding: 10,
      paddingBottom: getBottomSpace() + 40,
      flexGrow: 1,
   },
})``;

export const Title = styled.Text`
   color: ${({ theme }) => theme.colors.white};
   font-size: 18px;
   font-weight: bold;
   margin-top: 15px;
`;

export const Subtitle = styled.Text`
   color: ${({ theme }) => theme.colors.white};
   font-size: 13px;
   font-weight: bold;
   margin-top: 15px;
   margin-bottom: 30px;
`;

export const Button = styled.TouchableOpacity<ButtonProps>`
   background-color: ${({ theme, disabled }) =>
      disabled ? 'gray' : theme.colors.darkElements};
   border-radius: 4px;
   padding: 15px;
   margin-top: 35px;
`;

export const ButtonText = styled.Text`
   color: ${({ theme }) => theme.colors.white};
   font-size: 13px;
   font-weight: bold;
   text-align: center;
`;

export const Section = styled.View`
   margin-top: 20px;
   background-color: ${({ theme }) => theme.colors.secondary};
   padding: 15px;
   border-radius: 4px;
`;

export const SectionTitle = styled.Text`
   color: ${({ theme }) => theme.colors.white};
   font-size: 13px;
   font-weight: bold;
   margin-top: 7px;
   text-align: center;
`;
