import styled from 'styled-components/native';

export const Container = styled.View`
   background-color: black;
   flex: 1;
`;

export const List = styled.FlatList.attrs({
   contentContainerStyle: {
      padding: 16,
   },
})``;
