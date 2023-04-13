import React, { useCallback } from 'react';
import { FlatList, FlatListProps, StyleProp, ViewStyle } from 'react-native';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import styled from 'styled-components/native';
import { Empty } from '../components/Empty';
import { Loading } from '../components/Loading';

interface ListProps<T> extends FlatListProps<T> {
   loading?: boolean;
   emptyText?: string;
}

function useFlatList<T = any>() {
   const List = styled(
      FlatList as new (props: FlatListProps<T>) => FlatList<T>
   ).attrs(
      () =>
         ({
            contentContainerStyle: {
               flexGrow: 1,
               padding: 15,
               paddingBottom: getBottomSpace() + 20,
            },
         } as StyleProp<ViewStyle>)
   )`
      background-color: ${({ theme }) => theme.colors.primary};
   `;

   const Separator = styled.View`
      height: 12px;
   `;

   const keyExtractor = useCallback((item: T, index: number) => `${index}`, []);

   return useCallback(
      (props: ListProps<T>) => {
         const { loading, emptyText, ...rest } = props;

         return (
            <List
               keyExtractor={keyExtractor}
               showsVerticalScrollIndicator={false}
               ItemSeparatorComponent={() => <Separator />}
               ListEmptyComponent={() => {
                  if (loading) {
                     return <Loading />;
                  }

                  if (emptyText) {
                     return <Empty text={emptyText} />;
                  }

                  return null;
               }}
               {...rest}
            />
         );
      },
      [keyExtractor]
   );
}

export default useFlatList;
