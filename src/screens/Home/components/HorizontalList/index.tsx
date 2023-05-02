import React from 'react';
import { ActivityIndicator } from 'react-native';
import useFlatList from '../../../../hooks/useFlatList';
import { GPTResponse } from '../../Home.service';
import { Card } from '../Card';
import { Separator } from '../Card/styles';
import { Container, EmptyMessage } from './styles';

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
   const List = useFlatList<GPTResponse>();

   if (loading) {
      return (
         <Container>
            <ActivityIndicator />
         </Container>
      );
   }
   if (!data.length) {
      return (
         <Container>
            <EmptyMessage>{emptyMessage}</EmptyMessage>
         </Container>
      );
   }

   return (
      <List
         data={data.reverse()}
         horizontal
         ItemSeparatorComponent={() => <Separator />}
         renderItem={({ item }) => <Card item={item} />}
      />
   );
};

export { HorizontalList };
