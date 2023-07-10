import React from 'react';
import { ActivityIndicator } from 'react-native';
import useFlatList from '../../../../hooks/useFlatList';
import { GPTResponse } from '../../Home.service';
import { Card } from '../Card';
import { Separator } from '../Card/styles';
import { Container, EmptyContainer, EmptyMessage } from './styles';

interface HorizontalListProps {
   data: GPTResponse[];
   loading: boolean;
   emptyMessage: string;
}

const HorizontalList: React.FC<HorizontalListProps> = ({
   data,
   loading,
   emptyMessage,
}) => {
   const { List } = useFlatList<GPTResponse>();

   if (!data.length) {
      return (
         <EmptyContainer>
            {loading ? <ActivityIndicator /> : null}
            <EmptyMessage>{emptyMessage}</EmptyMessage>
         </EmptyContainer>
      );
   }

   return (
      <Container>
         {loading ? <ActivityIndicator /> : null}
         <List
            data={data.reverse()}
            noBottomPadding
            horizontal
            ItemSeparatorComponent={() => <Separator />}
            renderItem={({ item }) => <Card item={item} />}
         />
      </Container>
   );
};

export { HorizontalList };
