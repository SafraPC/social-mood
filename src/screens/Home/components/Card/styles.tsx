import styled from 'styled-components/native';

interface TitleProps {
   error: boolean;
}

export const Container = styled.TouchableOpacity`
   background-color: ${({ theme }) => theme.colors.darkElements};
   border-radius: 4px;
   width: 300px;
   padding: 15px;
   margin-top: 15px;
`;

export const Separator = styled.View`
   width: 10px;
`;
export const Title = styled.Text<TitleProps>`
   color: ${({ theme, error }) =>
      error ? theme.colors.softRed : theme.colors.white};
   font-size: 13px;
   font-weight: bold;
   margin-top: 7px;
   text-align: center;
`;

export const Description = styled.Text`
   color: ${({ theme }) => theme.colors.white};
   font-size: 13px;
   margin-top: 7px;
   text-align: center;
`;
