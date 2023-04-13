import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const Container = styled.View`
   flex: 1;
   background-color: ${({ theme }) => theme.colors.primary};
   padding: ${({ theme }) => theme.spacing.md}px;
   padding-top: ${getStatusBarHeight() + 20}px;
`;
