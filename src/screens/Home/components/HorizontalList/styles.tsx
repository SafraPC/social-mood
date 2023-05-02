import styled from 'styled-components/native';

export const Container = styled.View`
   padding: 30px;
   min-height: 120px;
   justify-content: center;
   align-items: center;
`;

export const EmptyMessage = styled.Text`
   color: ${({ theme }) => theme.colors.darkYellow};
   font-weight: bold;
   text-align: center;
`;
