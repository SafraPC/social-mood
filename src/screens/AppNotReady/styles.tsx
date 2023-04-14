import styled from 'styled-components/native';

export const Loading = styled.ActivityIndicator.attrs({
   size: 20,
   color: 'white',
})``;

export const Container = styled.View`
   flex: 1;
   justify-content: center;
   align-items: center;
`;

export const ErrorText = styled.Text`
   color: ${({ theme }) => theme.colors.darkRed};
   font-size: 18px;
   font-weight: bold;
   text-align: center;
`;
