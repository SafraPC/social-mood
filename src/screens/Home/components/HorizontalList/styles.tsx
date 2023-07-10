import styled from 'styled-components/native';

export const Container = styled.View`
   justify-content: center;
   align-items: center;
`;

export const EmptyContainer = styled.View`
   justify-content: center;
   align-items: center;
   min-height: 50px;
`;

export const EmptyMessage = styled.Text`
   color: ${({ theme }) => theme.colors.darkYellow};
   font-weight: bold;
   text-align: center;
`;
