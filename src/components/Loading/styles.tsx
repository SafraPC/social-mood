import styled from 'styled-components/native';

export const Container = styled.View`
   position: absolute;
   flex: 1;
`;

export const Spinner = styled.ActivityIndicator.attrs({
   size: 'large',
   color: '#fff',
})`
   top: 10;
   left: 0;
   right: 0;
   bottom: 0;
`;
